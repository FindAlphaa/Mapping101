import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import styles from "./Graph.module.css";
import Node from "./Node";
import Link from "./Link";

function Graph({ data, onNodeClick, width = 2004, height = 1000 }) {
	const [nodes, setNodes] = useState([...data.nodes]);
	const [links, setLinks] = useState([...data.links]);
	const simulationRef = useRef(null);

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
			.force("charge", d3.forceManyBody().strength(-1000))
			.force("x", d3.forceX())
			.force("y", d3.forceY());

		simulationRef.current.on("tick", () => {
			setNodes([...nodes]);
			setLinks([...links]);
		});

		return () => simulationRef.current.stop();
	}, [data.links, data.nodes, nodes, links]); // 의존성 배열에 data.links, data.nodes, links 추가

	const handleNodeClick = (node) => {
		// handleNodeClick 클릭한 노드의 id를 상위 컴포넌트로 전달 (GraphPage)
		// Add logic here when each node is clicked
		console.log("Node clicked:", node);
		onNodeClick(node.id); /* 콜백 함수 */
	};

	return (
		<div className={styles.graph}>
			<svg
				width={width}
				height={height}
				viewBox={[-width / 2, -height / 2, width, height]}
				style={{ maxWidth: "100%", height: "auto" }}
				// ... other svg properties ...
			>
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
			</svg>
		</div>
	);
}

export default Graph;
