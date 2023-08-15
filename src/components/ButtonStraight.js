import PropTypes from "prop-types";
import React from "react";
import "../styles/ButtonStraight.css";

function ButtonStraight({ className, smallButtonClassName, text = "HOME" }) {
	return (
		<div className={`button-straight ${className}`}>
			<div className={`small-button ${smallButtonClassName}`}>{text}</div>
		</div>
	);
}

ButtonStraight.propTypes = {
	text: PropTypes.string,
};

export default ButtonStraight;
