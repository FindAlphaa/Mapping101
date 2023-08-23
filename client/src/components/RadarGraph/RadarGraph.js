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
			const PORT = 5000;
			const response = await axios.get(
				`http://localhost:${PORT}/api/radar/${selectedNodeId}`
			);
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
					plugins: {
						legend: {
							labels: {
								color: "white", // 폰트 색상
								fontSize: 16, // 폰트 크기
							},
						},
					},
					scales: {
						r: {
							angleLines: {
								color: "gray", // 각 라벨을 이어주는 선의 색상 설정
							},
							grid: {
								color: "gray", // 이 부분을 추가하여 그리드 라인의 색상을 흰색으로 설정
							},
							// radial scale
							pointLabels: {
								color: "white", // 폰트 색상
								fontSize: 16, // 폰트 크기
							},
						},
					},
				}}
			/>
		</div>
	);
};

export default RadarGraph;
