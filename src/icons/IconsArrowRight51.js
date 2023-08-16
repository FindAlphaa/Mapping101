/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
function IconsArrowRight51({ color = "white", className }) {
  return (
    <svg
      className={`icons-arrow-right-5-1 ${className}`}
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M20.3118 3.78947C21.4092 2.73684 23.1816 2.73684 24.279 3.78947L39.1691 18.0721C40.277 19.1348 40.277 20.8652 39.1691 21.9278L24.2794 36.2105C23.7288 36.7381 23.0098 37 22.2958 37C21.5818 37 20.8626 36.7383 20.3122 36.2106C19.2044 35.1479 19.2043 33.4174 20.3122 32.3548L30.3591 22.7174H2.81439C1.27746 22.7174 0 21.5174 0 20C0 18.4824 1.27749 17.2826 2.81439 17.2826H30.3591L20.3118 7.64519C19.2039 6.58255 19.2039 4.85211 20.3118 3.78947Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
}

IconsArrowRight51.propTypes = {
  color: PropTypes.string,
};

export default IconsArrowRight51;
