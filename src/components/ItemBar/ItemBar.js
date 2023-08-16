import SearchBar from "../SearchBar/SearchBar";

import styles from "./ItemBar.module.css";

function ItemBar({ itemName, itemDescription }) {
	return (
		<div className={styles.itembar}>
			<div className={styles.itembarIn}>
				<div className={styles.item}>
					<span className={styles.itemName}>{itemName}</span>
					<span className={styles.itemDescription}>
						{itemDescription}
					</span>
				</div>
				<SearchBar />
			</div>
		</div>
	);
}

export default ItemBar;
