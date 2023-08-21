import React from "react";
import styles from "./Section2.module.css";
import { Link } from "react-router-dom";

const Section2 = () => {
	return (
		<div className={styles.section2}>
			<div className={styles.communicationSevice}>
			<Link to="/graph/meterial" className={styles.navLink}>
				<div className={styles.back}>
				<div className={styles.back1} />
				</div>
				<div className={styles.text}>
				<div className={styles.communicationService}>
					Communication Service
				</div>
				<div className={styles.div}>커뮤니케이션서비스</div>
				</div>
				<img
				className={styles.vectorIcon}
				alt="Communication Service Icon"
				src="customercommunication.svg"
				/>
			</Link>
			</div>

			<div className={styles.it}>
				<Link to="/graph/it" className={styles.navLink}>
					<div className={styles.back}>
						<div className={styles.back3} />
					</div>
					<div className={styles.text1}>
						<div className={styles.internetTectnology}>
							Internet Tectnology
						</div>
						<div className={styles.it1}>IT</div>
					</div>
					<img
						className={styles.vectorIcon1}
						alt="Internet Technology Icon"
						src="serverit.svg"
					/>
				</Link>
			</div>

		<div className={styles.material}>
			<Link to="/graph/communication-service" className={styles.navLink}>
			<div className={styles.back}>
				<div className={styles.back5} />
			</div>
			<div className={styles.text1}>
				<div className={styles.internetTectnology}>Material</div>
				<div className={styles.it1}>소재</div>
			</div>
			<img
				className={styles.vectorIcon1}
				alt="Material Icon"
				src="targetmaterial.svg"
			/>
			</Link>
		</div>
		</div>
	);
};
export default Section2;
