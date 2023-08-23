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
		const fetchData = async () => {
			const response = await axios.get(`/api/radar/${selectedNodeId}`);
			const data = {
				labels: [
					"초과이익지속성",
					"성장성",
					"수익성",
					"잠재성",
					"매출액변동성",
					"화제성",
				],
				datasets: [
					{
						label: response.data.label,
						data: response.data.data,
						fill: false,
						backgroundColor: "rgba(255, 99, 132, 0.2)",
						borderColor: "rgb(255, 99, 132)",
						pointBackgroundColor: "rgb(255, 99, 132)",
						pointBorderColor: "#fff",
						pointHoverBackgroundColor: "#fff",
						pointHoverBorderColor: "rgb(255, 99, 132)",
					},
				],
			};
			setData(data);
			setLoading(false);
		};

		if (selectedNodeId) fetchData();
	}, [selectedNodeId]);

	if (loading || !data) {
		return <Loading />;
	}

	return (
		<div className={styles.radarWrapper}>
			<Radar
				data={data}
				className={styles.radarGraph}
				options={{
					scales: {
						r: {
							// radial scale
							pointLabels: {
								color: "white", // 여기에서 원하는 색상을 지정하세요.
							},
						},
					},
				}}
			/>
		</div>
	);
};

export default RadarGraph;
