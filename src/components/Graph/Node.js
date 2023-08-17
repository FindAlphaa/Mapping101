import React, { useEffect } from "react";
import * as d3 from "d3";

function Node({ node, onClick, simulation }) {
	const ref = React.useRef(null);

	useEffect(() => {
		if (ref.current) {
			d3.select(ref.current)
				.datum(node) // bind the node data to the DOM element
				.call(
					d3
						.drag()
						.on("start", dragstarted)
						.on("drag", dragged)
						.on("end", dragended)
				);
		}

		function dragstarted(event, d) {
			if (!event.active) simulation.current.alphaTarget(0.3).restart();
			d.fx = d.x;
			d.fy = d.y;
		}

		function dragged(event, d) {
			d.fx = event.x;
			d.fy = event.y;
		}

		function dragended(event, d) {
			if (!event.active) simulation.current.alphaTarget(0);
			d.fx = null;
			d.fy = null;
		}
	}, [node, simulation]);

	return (
		<g
			ref={ref}
			transform={`translate(${node.x},${node.y})`}
			onClick={() => onClick(node)}
		>
			<circle r={node.radius} fill={node.color} cursor="pointer" />
			<text textAnchor="middle" dy="0" fontSize={15} fill="black">
				{node.id}
			</text>
		</g>
	);
}

export default Node;
