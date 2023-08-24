import React, { useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";
import axios from "axios";

import Loading from "../Loading/Loading";
import styles from "./TreeMap.module.css";
import { set } from "mongoose";
import ESGGrade from "../ESGGrade/ESGGrade";

function TreeMap({ selectedNodeId }) {
	const [data, setData] = useState();

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		const fetchTreeData = async () => {
			const PORT = 5000;
			const res = await axios.get(
				`http://localhost:${PORT}/api/company/${selectedNodeId}`
			);
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
				gradient: false,
				colorKey: "color",
				tooltip: {
					renderer: (params) => {
						return {
							content: `ESG: ${params.datum.description}`,
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

		background: {
			fill: "#2c2c2c",
		},

		title: {
			text: selectedNodeId,
			fontSize: 18,
			fontWeight: "bold",
			color: "#fff",
		},
		subtitle: {
			text: "선택된 키워드에 대한 회사 ESG 점수",
			fontSize: 14,
			fontWeight: "normal",
			color: "#fff",
		},
	};
	return (
		<div className={styles.treeMapWrapper}>
			{loading ? (
				<Loading />
			) : (
				<div className="ag-theme-alpine">
					<ESGGrade />
					<div className={styles.treeMapContainer}>
						<AgChartsReact options={options} />
					</div>
				</div>
			)}
		</div>
	);
}

export default TreeMap;
