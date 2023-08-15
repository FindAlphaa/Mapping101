import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./SearchBar.module.css";

function SearchBar() {
	const [search, setSearch] = useState("");

	const onChange = (event) => {
		setSearch(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<>
			<form className={styles.searchBar} onSubmit={onSubmit}>
				<input
					placeholder="카테고리 검색하기"
					value={search}
					onChange={onChange}
					className={styles.searchInput}
				/>
				<button type="submit" className={styles.submitBtn}>
					<img
						src="/Magnifier.svg"
						alt="돋보기"
						className={styles.magnifier}
					/>
				</button>
			</form>
		</>
	);
}

export default SearchBar;
