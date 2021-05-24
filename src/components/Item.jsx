//npm packages
import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	text-align: center;
	width: 25%;
	padding: 10px 0;
`;

const StyledSpan = styled.span`
	margin-top: 5px;
`;

function File({ item, openNotepad }) {
	const { name, image } = item;

	return (
		<StyledItem>
			<img
				className="notepad__item"
				src={image.default}
				alt="icon"
				onClick={() => openNotepad(item)}
			/>
			<small className="notepad__item--text">Click to learn more</small>

			<StyledSpan>{name}</StyledSpan>
		</StyledItem>
	);
}

export default File;
