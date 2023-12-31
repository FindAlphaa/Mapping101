import React from "react";
import LineChart from "../LineChart/LineChart";
import RadarGraph from "../RadarGraph/RadarGraph";
import styles from "./InfoBar.module.css";

const InfoBar = React.forwardRef((props, ref) => {
  return (
    <div className={styles.container}>
      <div className={styles.graphVisual}>
        <div className={styles.infoBar} ref={ref}>
          <div className={styles.infoWrapper}>
            <LineChart selectedNodeId={props.selectedNodeId} />
          </div>
        </div>
        <div className={styles.radarGraph}>
          {/* 추가 섹션의 내용을 여기에 넣으세요 */}
          <RadarGraph selectedNodeId={props.selectedNodeId} />
        </div>
      </div>
    </div>
  );
});

export default InfoBar;
