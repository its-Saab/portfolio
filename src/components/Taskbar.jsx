//npm packages
import React, { useContext } from "react";
import DataContext from "../contexts/dataContext";
import { TaskBar, List } from "@react95/core";
import styled from "styled-components";
import { useClippy } from "@react95/clippy";
import { Button } from "@react95/core";
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
					<List.Item className="pointer" icon="mplayer_1_10_16x16_4bit">
						<Link onClick={() => startWebamp()}>Media</Link>
					</List.Item>
					<List.Divider />
					<List.Item className="pointer" icon="flying_windows_100_16x16_4bit">
						<Link href={react95Repo} target="_blank">
							Built with React95
						</Link>
					</List.Item>
					<List.Divider />
					<List.Item className="pointer" icon="mystify_your_mind_100_16x16_4bit">
						<Link href={projectRepo} target="_blank">
							Repo
						</Link>
					</List.Item>
				</List>
			}
			/>
			<Button style={{position:"absolute", top:"0",right:"0"}} onClick={() => clippy.play('Wave')}>Hello Merlin!</Button>
			</>
	);
}

export default Taskbar;
