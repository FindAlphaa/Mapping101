import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./SearchBar.module.css";

function SearchBar() {
	const [search, setSearch] = useState("");

	const onChange = (event) => {
		setSearch(event.target.value);
	};

	return (
		<>
			<form>
				<input
					placeholder="카테고리 검색하기"
					value={search}
					onChange={onChange}
				/>
				<input type="submit" />
			</form>
		</>
	);
}

export default SearchBar;
