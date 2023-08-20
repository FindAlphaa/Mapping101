import React, { useEffect, useState } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

import styles from "./LineChart.module.css";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const LineChart = ({ selectedNodeId }) => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true); // Initializing the loading state

	useEffect(() => {
		const fetchData = async () => {
			try {
				console.log(selectedNodeId);
				const response = await axios.get(
					`http://localhost:8080/getData/${encodeURIComponent(
						selectedNodeId
					)}`
				);

				const data = response.data;

				setData(data);
				setLoading((prev) => !prev); // 데이터 로딩 완료
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
		console.log(data);
	}, [selectedNodeId]);

	const graphData = {
		labels: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
		],
		datasets: [
			{
				label: "My First dataset",
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
				data: [65, 59, 80, 81, 56, 55, 40],
			},
			{
				label: "My Second dataset",
				backgroundColor: "rgba(153, 102, 255, 0.2)",
				borderColor: "rgba(153, 102, 255,1)",
				data: [28, 48, 40, 19, 86, 27, 90],
			},
		],
	};

	return (
		<>
			{loading ? (
				<div>Loading...</div>
			) : (
				//  로딩 스피너 추가
				<div className={styles.graph}>
					<h2 className={styles.graphTitle}>{selectedNodeId}</h2>
					<Line data={graphData} />
				</div>
			)}
		</>
	);
};

export default LineChart;
