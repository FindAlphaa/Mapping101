import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
import Box from "../components/Box";

import "../styles/MainPage.css";

function MainPage() {
	return (
		<>
			<NavBar />
			<Intro />

			{/* 카테고리 바 */}
			<div className="category">
				<div className="logo">Category</div>
			</div>

			<Box
				nodeName="경기 관련 소비재"
				nodeDescription="consumer goods related to the economy"
			/>
		</>
	);
}

export default MainPage;
