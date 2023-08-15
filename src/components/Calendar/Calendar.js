import styles from "./Calendar.module.css";

function Calendar() {
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	return (
		<div className={styles.buttonGrid}>
			{months.map((month, index) => (
				<button key={index} className={styles.gridButton}>
					{month}
				</button>
			))}
		</div>
	);
}

export default Calendar;
