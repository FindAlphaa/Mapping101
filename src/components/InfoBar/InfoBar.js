import LineChart from "../LineChart/LineChart";

import styles from "./InfoBar.module.css";

function InfoBar({ selectedNodeId }) {
	return (
		<div className={styles.infoBar}>
			<div className={styles.infoWrapper}>
				<LineChart selectedNodeId={selectedNodeId} />

				{/* TrendScore Box */}
				<div className={styles.trendScoreBox}></div>
			</div>
		</div>
	);
}

export default InfoBar;
