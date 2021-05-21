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
				<img src={blankComputer} alt="blank" onClick={() => openExplorer()} />
				<div>Explorer</div>
			</StyledShorcut>
			<StyledShorcut>
				<img src={audioCd} alt="audio" onClick={() => startWebamp()} />
				<div>Media</div>
			</StyledShorcut>
		</div>
	);
}

export default Shortcuts;
