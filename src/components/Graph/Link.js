import React from "react";

function Link({ link }) {
	return (
		<line
			x1={link.source.x}
			y1={link.source.y}
			x2={link.target.x}
			y2={link.target.y}
			stroke="#999"
			strokeWidth={link.value}
			strokeOpacity={link.opacity}
		/>
	);
}

export default Link;
