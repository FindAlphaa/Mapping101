import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import Node from "./Node";
import Link from "./Link";

import styles from "./Graph.module.css";

function Graph({ data, onNodeClick, width = 2004, height = 1000 }) {
	const [nodes, setNodes] = useState([...data.nodes]);
	const [links, setLinks] = useState([...data.links]);

	const [hoveredNode, setHoveredNode] = useState(null); // 마우스 오버한 노드의 id를 저장

	const handleNodeClick = (node) => {
		// handleNodeClick 클릭한 노드의 id를 상위 컴포넌트로 전달 (GraphPage)
		// Add logic here when each node is clicked
		console.log("Node clicked:", node);
		onNodeClick(node.id); /* 콜백 함수 */
	};

	const handleNodeHover = (node) => {
		// Node 와 Link 강조 기능.
		// 1. Reset opacity of all nodes and links
		nodes.forEach((n) => (n.opacity = 1));
		links.forEach((link) => (link.opacity = 1));

		// 2. Set opacity for links not connected to the hovered node
		const unconnectedLinks = links.filter(
			(link) =>
				!(link.source.id === node.id || link.target.id === node.id)
		);
		unconnectedLinks.forEach((link) => (link.opacity = 0.1));

		// 3. Set opacity for nodes not connected to the hovered node
		const connectedNodeIds = links
			.filter(
				(link) =>
					link.source.id === node.id || link.target.id === node.id
			)
			.flatMap((link) => [link.source.id, link.target.id]);

		nodes.forEach((n) => {
			if (!connectedNodeIds.includes(n.id) && n.id !== node.id) {
				n.opacity = 0.1;
			}
		});

		setHoveredNode(node.id);
	};

	const handleNodeHoverOut = () => {
		links.forEach((link) => {
			link.opacity = 1;
		});

		nodes.forEach((node) => {
			node.opacity = 1;
		});

		setHoveredNode(null);
	};

	const simulationRef = useRef(null);
	const svgRef = useRef(null); // SVG 요소에 대한 참조 추가

	useEffect(() => {
		if (simulationRef.current) {
			simulationRef.current.nodes(nodes);
		}

		simulationRef.current = d3
			.forceSimulation(nodes)
			.force(
				"link",
				d3
					.forceLink(links)
					.id((d) => d.id)
					.distance(200)
			)
			.force("charge", d3.forceManyBody().strength(-3000)) // 노드 간의 전하를 설정 (양수: 서로 밀어내는 힘, 음수: 서로 당기는 힘)
			.force("collide", d3.forceCollide().radius(150)) // 노드 간의 충돌 방지
			.force("center", d3.forceCenter()) // 노드를 화면의 중앙에 위치시킴
			.force("x", d3.forceX()) // 노드의 x 좌표를 설정
			.force("y", d3.forceY()); // 노드의 y 좌표를 설정

		simulationRef.current.on("tick", () => {
			setNodes([...nodes]);
			setLinks([...links]);
		});

		const zoom = d3
			.zoom()
			.scaleExtent([
				0.1, // 최소 줌 비율
				5, // 최대 줌 비율
			]) // 줌의 범위 설정 (예: 0.5x ~ 5x)
			.on("zoom", (event) => {
				d3.select(svgRef.current)
					.select("g")
					.attr("transform", event.transform);
			});

		d3.select(svgRef.current).call(zoom).on("dblclick.zoom", null); // 더블클릭 시 줌 동작 비활성화

		// 초기 줌 레벨 설정
		d3.select(svgRef.current).call(
			zoom.transform,
			d3.zoomIdentity.scale(0.5)
		);

		return () => simulationRef.current.stop();
	}, []); // 의존성 배열에 data.links, data.nodes, links 추가

	return (
		<div className={styles.graph}>
			<svg
				ref={svgRef} // SVG 요소에 참조 연결
				width={width}
				height={height}
				viewBox={[-width / 2, -height / 2, width, height]}
				style={{ maxWidth: "100%", height: "auto" }}
			>
				<g>
					{/* 모든 요소를 포함하는 g 요소 추가 */}
					<g className="links">
						{links.map((link, index) => (
							<Link key={index} link={link} />
						))}
					</g>
					<g className="nodes">
						{nodes.map((node, index) => (
							<Node
								key={index}
								node={node}
								onClick={handleNodeClick}
								simulation={simulationRef}
								onHover={handleNodeHover}
								onHoverOut={handleNodeHoverOut}
							/>
						))}
					</g>
				</g>
			</svg>
		</div>
	);
}

export default Graph;
