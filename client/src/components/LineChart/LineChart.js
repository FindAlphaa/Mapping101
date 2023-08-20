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
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true); // Initializing the loading state

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`http://localhost:5000/api/graph/${selectedNodeId}`
				);

				setData(response.data.data);
				setLoading(false); // 데이터 로딩 완료
			} catch (error) {
				console.log(error);
				setLoading(true);
			}
		};

		fetchData();

		console.log("selectedNodeId", selectedNodeId);
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
				data,
			},
			{
				label: "My Second dataset",
				backgroundColor: "rgba(153, 102, 255, 0.2)",
				borderColor: "rgba(153, 102, 255,1)",
				data,
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
