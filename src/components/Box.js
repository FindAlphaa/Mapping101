import "../styles/Box.css";

function Box({ nodeName, nodeDescription }) {
	return (
		<div className="box">
			<div className="main-node">
				<div className="overlap-group">
					<div className="text">
						<p className="text-wrapper">{nodeDescription}</p>
						<div className="div">{nodeName}</div>
					</div>
					{/* <IconsArrowRight51
						className="icons-arrow-right"
						color="white"
					/> */}
					<img
						className="vector"
						alt="Vector"
						src="https://generation-sessions.s3.amazonaws.com/442168ef3275fe6ed29a0e9c4e816c86/img/vector.svg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Box;
