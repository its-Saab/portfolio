//npm packages
import React from "react";
import styled from "styled-components";

//project files
import { startWebamp } from "../utils/startWebamp";
import blankComputer from "../assets/blank_screen_100.ico";
import audioCd from "../assets/progman_14.ico";

const StyledShorcut = styled.div`
	margin-left: 20px;
	margin-top: 20px;
	align-items: center;
`;

function Shortcuts({ openExplorer }) {
	return (
		<div>
			<StyledShorcut>
				<img
					style={{ cursor: "pointer" }}
					src={blankComputer}
					alt="blank"
					onClick={() => openExplorer()}
				/>
				<div>
				<small onClick={() => openExplorer()} style={{ cursor: "pointer" }}>Explorer</small>
				</div>
			</StyledShorcut>
			<StyledShorcut>
				<img
					style={{ cursor: "pointer" }}
					src={audioCd}
					alt="audio"
					onClick={() => startWebamp()}
				/>
				<div >
					<small style={{ cursor: "pointer" }}	onClick={() => startWebamp()}>Media</small>
				</div>
			</StyledShorcut>
		</div>
	);
}

export default Shortcuts;
