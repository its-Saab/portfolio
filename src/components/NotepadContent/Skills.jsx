//npm packages
import React from 'react'
import { ProgressBar } from '@react95/core'
import styled from 'styled-components'

const StyledSkill = styled.div`
    display: flex;
    align-items: center;
    justify-content: center
`


function Skills({ content, isMobile }) {

    const { hard, soft } = content;
    console.log("hard", hard)
    return (
        <div>
            <h2>Technical Skills</h2>
            {
                hard.map((skill, idx) => (
                    <>
                    <StyledSkill key={idx}>
                    <img src={skill?.img?.default}  style={{ flex: 1 }} />
                    </StyledSkill>
                    </>
                ))
            }
            <br />
            <h2>Interpersonal Skills</h2>
            <p>{soft}</p>

        </div>
    )
}

export default Skills;
