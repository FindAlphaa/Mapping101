import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import styles from "./UpButton.module.css";

function UpButton() {
	return (
		<div className={styles.UpButton}>
			<button
				className={styles.button}
				onClick={() =>
					window.scrollTo({
						top: 0,
						behavior: "smooth",
					})
				}
			>
				<FontAwesomeIcon icon={faArrowUp} />
			</button>
		</div>
	);
}

export default UpButton;
