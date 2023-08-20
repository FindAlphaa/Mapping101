import React from "react";
import LineChart from "../LineChart/LineChart";

import styles from "./InfoBar.module.css";

const InfoBar = React.forwardRef((props, ref) => {
	return (
		<div className={styles.infoBar} ref={ref}>
			<div className={styles.infoWrapper}>
				<LineChart selectedNodeId={props.selectedNodeId} />
			</div>
		</div>
	);
});

export default InfoBar;
