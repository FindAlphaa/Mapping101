import React from "react";
import { PacmanLoader } from "react-spinners";

import styles from "./Loading.module.css";

function Loading() {
	return (
		<div className={styles.loading}>
			<h3 className={styles.noti}>데이터를 로딩중입니다...</h3>
			<PacmanLoader color="#1eb5e4" />
		</div>
	);
}

export default Loading;
