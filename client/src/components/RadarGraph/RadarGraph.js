import React, { useState, useEffect } from "react";
import { Radar } from "react-chartjs-2";
import axios from "axios";
import Loading from "../Loading/Loading";
import styles from "./RadarGraph.module.css";
import { Chart, RadialLinearScale } from "chart.js";

Chart.register(RadialLinearScale);

const RadarGraph = ({ selectedNodeId }) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (selectedNodeId) {
			const filePath = "/data/it_stat.json";

			axios
				.get(filePath)
				.then((response) => {
					const loadedData = response.data;

					// 로드된 데이터의 형식 확인
					console.log("Loaded Data from it_stat.json:", loadedData);

					const matchingDataset = loadedData.datasets.find(
						(dataset) => dataset.label === selectedNodeId
					);

					if (matchingDataset) {
						setData({
							labels: loadedData.labels,
							datasets: [matchingDataset],
						});
						setLoading(false);
					} else {
						console.error(
							"No matching dataset found for the nodeId:",
							selectedNodeId
						);
						setLoading(true);
					}
				})
				.catch((error) => {
					console.error("Error fetching the JSON file:", error);
					setLoading(true);
				});
		}
	}, [selectedNodeId]);

	if (loading || !data) {
		return <Loading />;
	}

	return (
		<div className={styles.radarWrapper}>
			<h1 className={styles.radarTitle}>Radar Graph from JSON File</h1>
			<Radar data={data} className={styles.radarGraph} />
		</div>
	);
};

export default RadarGraph;
