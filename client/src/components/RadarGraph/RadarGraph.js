import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import { Radar } from "react-chartjs-2";
import styles from "./RadarGraph.module.css";

const RadarGraph = ({ nodeId }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (nodeId) {
      // radar graph 데이터를 가져올 JS 파일의 경로
      const filePath = `./data/${nodeId}_stat.js`;

      import(filePath)
        .then((module) => {
          const loadedData = module.default;
          // nodeId와 일치하는 레이더 차트 데이터 찾기
          const matchingDataset = loadedData.datasets.find(
            (dataset) => dataset.label === nodeId
          );
          if (matchingDataset) {
            setData({
              labels: loadedData.labels,
              datasets: [matchingDataset],
            });
            setLoading(false);
          } else {
            console.error("No matching dataset found for the nodeId");
            setLoading(true);
          }
        })
        .catch((error) => {
          console.error("Error fetching the JS file:", error);
          setLoading(true);
        });
    }
  }, [nodeId]);

  if (loading || !data) {
    return <Loading />;
  }

  return (
    <div className={styles.radarWrapper}>
      <h1 className={styles.radarTitle}>Radar Graph from JS File</h1>
      <Radar data={data} className={styles.radarGraph} />
    </div>
  );
};

export default RadarGraph;
