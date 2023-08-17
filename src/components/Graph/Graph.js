import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import styles from "./Graph.module.css";
import Node from "./Node";
import Link from "./Link";

function Graph({ data, onNodeClick, width = 2004, height = 1000 }) {
	const [nodes, setNodes] = useState([...data.nodes]);
	const [links, setLinks] = useState([...data.links]);
	const simulationRef = useRef(null);
	const svgRef = useRef(null); // SVG 요소에 대한 참조 추가

	useEffect(() => {
		data.nodes.forEach((node) => {
			node._children = data.links
				.filter((link) => link.source === node.id)
				.map((link) => data.nodes.find((n) => n.id === link.target));
		});

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
					.distance(100)
			)
			.force("charge", d3.forceManyBody().strength(-2000)) // 노드 간의 전하를 설정 (양수: 서로 밀어내는 힘, 음수: 서로 당기는 힘)
			.force("collide", d3.forceCollide().radius(50)) // 노드 간의 충돌 방지
			.force("x", d3.forceX()) // 노드의 x 좌표를 설정
			.force("y", d3.forceY()); // 노드의 y 좌표를 설정

		simulationRef.current.on("tick", () => {
			setNodes([...nodes]);
			setLinks([...links]);
		});

		const zoom = d3
			.zoom()
			.scaleExtent([0.5, 5]) // 줌의 범위 설정 (예: 0.5x ~ 5x)
			.on("zoom", (event) => {
				d3.select(svgRef.current)
					.select("g")
					.attr("transform", event.transform);
			});

		d3.select(svgRef.current).call(zoom).on("dblclick.zoom", null); // 더블클릭 시 줌 동작 비활성화

		return () => simulationRef.current.stop();
	}, []); // 의존성 배열에 data.links, data.nodes, links 추가

	const handleNodeClick = (node) => {
		// handleNodeClick 클릭한 노드의 id를 상위 컴포넌트로 전달 (GraphPage)
		// Add logic here when each node is clicked
		console.log("Node clicked:", node);
		onNodeClick(node.id); /* 콜백 함수 */
	};

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
							/>
						))}
					</g>
				</g>
			</svg>
		</div>
	);
}

export default Graph;
