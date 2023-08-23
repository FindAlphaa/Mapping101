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
  const [error, setError] = useState(null); // error handling

  useEffect(() => {
    // 초기 상태로 데이터와 오류 상태를 초기화
    setData(null);
    setError(null);

    const fetchData = async () => {
      const PORT = 4000;
      try {
        const response = await axios.get(
          `http://localhost:${PORT}/api/radar/${selectedNodeId}`
        );

        // 응답이 정상적으로 왔고 데이터가 있는 경우
        if (response && response.data) {
          // 응답받은 데이터를 사용하여 차트 데이터 구성
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
          setData(data); // 차트 데이터 상태 업데이트
          setLoading(false); // 로딩 상태 해제
        } else {
          // 응답에 데이터가 없는 경우
          setData(null);
          setLoading(false);
        }
      } catch (error) {
        // API 요청 중 오류 발생 시 처리
        console.log(error);
        setError(error.message); // 오류 메시지 상태 업데이트
        setLoading(false); // 로딩 상태 해제
        setData(null); // 데이터 상태 초기화
      }
    };

    // 선택된 노드 ID가 있으면 데이터 요청
    if (selectedNodeId) fetchData();
  }, [selectedNodeId]);

  // 로딩 중이거나 데이터가 없을 경우 로딩 컴포넌트 렌더링
  if (loading || !data) {
    return <Loading />;
  }

  // 오류 발생 시 로딩 컴포넌트 렌더링 (오류 메시지 표시를 위해 수정할 수 있습니다.)
  if (error) {
    return <Loading />;
  }

  return (
    <div className={styles.radarWrapper}>
      <Radar
        data={loading ? null : data}
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
