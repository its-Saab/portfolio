//npm packages
import React, { useContext } from "react";
import DataContext from "../contexts/dataContext";
import { TaskBar, List, Button } from "@react95/core";
import styled from "styled-components";
import { useClippy } from "@react95/clippy";
//project files
import { startWebamp } from "../utils/startWebamp";

const Link = styled.a`
	text-decoration: none;
	color: inherit;
`;

function Taskbar() {
	const { projectRepo, react95Repo } = useContext(DataContext).getProjectInfo();
	const { clippy } = useClippy();
	return (
		<>
			<TaskBar
				list={
					<List>
						<Link onClick={() => startWebamp()}>
							<List.Item className="pointer" icon="mplayer_1_10_16x16_4bit">
								Media
							</List.Item>
						</Link>
						<List.Divider />
						<List.Item className="pointer" icon="flying_windows_100_16x16_4bit">
							<Link href={react95Repo} target="_blank" rel="noopener noreferrer">
								Built with React95
							</Link>
						</List.Item>
						<List.Divider />
						<List.Item
							className="pointer"
							icon="mystify_your_mind_100_16x16_4bit"
						>
							<Link href={projectRepo} target="_blank" rel="noopener noreferrer">
								Repo
							</Link>
						</List.Item>
					</List>
				}
			/>
			<Button
				style={{
					position: "absolute",
					top: "0",
					right: "0",
					cursor: "pointer",
				}}
				onClick={() => clippy.play("Wave")}
			>
				Hello Clippy!
			</Button>
		</>
	);
}

export default Taskbar;
