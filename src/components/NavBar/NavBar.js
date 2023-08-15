import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<div className={styles.navContainer}>
			<div className={styles.nav}>
				<Link to="/" className={styles.navLink}>
					<div className={styles.label}>
						<div className={styles.logo}>Mapping 101</div>
					</div>
				</Link>
				<Link to="/" className={styles.navLink}>
					<div className={styles.buttonStraight}>
						<div className={styles.smallButton}>HOME</div>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default NavBar;
