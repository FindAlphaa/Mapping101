import { Link } from "react-router-dom";

import "../styles/Label.css";

function Label() {
	return (
		<>
			<Link to="/">
				<div className="label">
					<div className="logo">Mapping 101</div>
				</div>
			</Link>
		</>
	);
}

export default Label;
