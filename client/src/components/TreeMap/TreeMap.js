import React, { useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";
import axios from "axios";

import Loading from "../Loading/Loading";

function TreeMap({ selectedNodeId }) {
	const [data, setData] = useState();

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchTreeData = async () => {
			const res = await axios.get(`/api/company/${selectedNodeId}`);
			const treeData = res.data;
			setData(treeData);
			setLoading(false);
		};
		if (selectedNodeId) fetchTreeData();
	}, [selectedNodeId]);

	const options = {
		data,
		series: [
			{
				type: "treemap",
				labelKey: "name",
				sizeKey: "size",
				colorKey: "color",
				tooltip: {
					renderer: (params) => {
						return {
							content: `ESG: ${params.datum[params.colorKey]}`,
						};
					},
				},
				formatter: (params) => ({
					stroke: params.depth < 2 ? "transparent" : "black",
				}),
				// labels: {
				// 	value: {
				// 		formatter: (params) => `ESG: ${params.datum.color}`,
				// 	},
				// },
			},
		],
		title: {
			text: selectedNodeId,
		},
		subtitle: {
			text: "Company List related to the selected node",
		},
	};
	return (
		<>
			{loading ? (
				<></>
			) : (
				<div className="ag-theme-alpine" style={{ height: 400 }}>
					<AgChartsReact options={options} />
				</div>
			)}
		</>
	);
}

export default TreeMap;
