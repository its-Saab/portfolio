//npm packages
import React from 'react'
import styled from 'styled-components'

const StyledSkill = styled.div`
    display: flex;
    align-items: center;
    justify-content: center
`


function Skills({ content, isMobile }) {

    const { hard, soft } = content;
    return (
        <div className="skills">
            <h2>Technical Skills</h2>
            <div className="skills__grid">
            {
                hard.map((skill, idx) => (
                    <div className="skills__grid--item">
                    <StyledSkill key={idx}>
                    <img className="skills__grid--img" src={skill?.img?.default}  style={{ flex: 1 }} />
                    </StyledSkill>
                    </div>
                ))
            }
            </div>
            <h2>Interpersonal Skills</h2>
            <p className="skills--paragraph">{soft}</p>

        </div>
    )
}

export default Skills;
