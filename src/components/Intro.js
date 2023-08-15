import SearchUi from "./SearchUi";

import "../styles/Intro.css";

function Intro() {
	return (
		<div className="frame">
			<div className="overlap-group">
				<div className="image-section">
					<img className="image" alt="background" src="intro.png" />
				</div>
				<SearchUi />
				<p className="mapping">
					쉬운 투자 정보 한눈에 보기는?
					<br />
					Mapping 101
				</p>
			</div>
		</div>
	);
}

export default Intro;
