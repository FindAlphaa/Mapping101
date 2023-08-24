import React from "react";
import "./style.css";

function Frame() {
	return (
		<div className="frame">
			<div className="overlap-group">
				<div className="a-grade">
					<div className="group">
						<div className="rectangle" />
						<div className="text-wrapper">A+</div>
					</div>
				</div>
				<div className="group-wrapper">
					<div className="group">
						<div className="div" />
						<div className="text-wrapper">A</div>
					</div>
				</div>
				<div className="b-grade">
					<div className="group">
						<img
							className="img"
							alt="Rectangle"
							src="https://generation-sessions.s3.amazonaws.com/900674687d2a42f3261ae90f63be8916/img/rectangle-10.svg"
						/>
						<div className="text-wrapper">B+</div>
					</div>
				</div>
				<div className="div-wrapper">
					<div className="group">
						<div className="rectangle-2" />
						<div className="text-wrapper">B</div>
					</div>
				</div>
				<div className="c-grade">
					<div className="group">
						<div className="rectangle-3" />
						<div className="text-wrapper">C</div>
					</div>
				</div>
				<div className="d-grade">
					<div className="group">
						<div className="rectangle-4" />
						<div className="text-wrapper">D</div>
					</div>
				</div>
				<div className="none">
					<div className="group">
						<div className="rectangle-5" />
						<div className="text-wrapper">없음</div>
					</div>
				</div>
			</div>
			<div className="text-wrapper-2">ESG 등급표</div>
		</div>
	);
}

export default Frame;
