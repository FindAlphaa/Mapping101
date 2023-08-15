import Label from "./Label";
import Button from "./Button";

import "../styles/NavBar.css";

function NavBar() {
	return (
		<div className="box">
			<div className="navbar">
				<div className="overlap-group">
					<Label />
					<Button />
				</div>
			</div>
		</div>
		// <>
		// 	<Label />
		// 	<Button />
		// </>
	);
}

export default NavBar;
