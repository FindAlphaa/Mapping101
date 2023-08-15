import { Link } from "react-router-dom";

import ButtonStraight from "./ButtonStraight";

import "../styles/ButtonStraight.css";

function Button() {
	return (
		<Link to="/">
			<div className="buttons">
				<ButtonStraight
					className="frame"
					smallButtonClassName="button-straight-outline-small"
					text="HOME"
				/>
			</div>
		</Link>
	);
}

export default Button;
