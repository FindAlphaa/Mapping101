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

import Loading from "../Loading/Loading";

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
        const PORT = 4000;
        const response = await axios.get(
          `http://localhost:${PORT}/api/graph/${selectedNodeId}`
        );

        setData(response.data);
        setLoading(false); // 데이터 로딩 완료
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    };

    if (selectedNodeId) fetchData();

    console.log("selectedNodeId", selectedNodeId);
  }, [selectedNodeId]);

  let graphData = {};
  if (data) {
    graphData = {
      labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월"],
      datasets: [
        {
          label: "긍정 지수",
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          data: data.data,
        },
      ],
    };
  }

  return (
    <div className={styles.lineWrapper}>
      {loading ? (
        <Loading />
      ) : (
        //  로딩 스피너 추가
        <>
          <h2 className={styles.lineTitle}>{selectedNodeId}</h2>
          <Line
            data={graphData}
            className={styles.line}
            options={{
              scales: {
                x: {
                  ticks: {
                    color: "#fff",
                    font: {
                      size: 20,
                    },
                  },
                },
                y: {
                  ticks: {
                    color: "#fff",
                  },
                },
              },
              // 범례의 font 크기를 변경.
              plugins: {
                legend: {
                  labels: {
                    font: {
                      size: 16, // Adjust the legend font size as needed
                    },
                    color: "#fff", // Adjust the legend font color
                  },
                },
              },
            }}
          />
        </>
      )}
    </div>
  );
};

export default LineChart;
