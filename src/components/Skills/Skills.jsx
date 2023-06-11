import React from 'react'
import './Skills.css'
import { skillData } from '../../constants'

const Skills = () => {
  return (
    <section className="skills-section">
      <h1 className="skills-title" style={{ textAlign: 'center' }}>
        My Tools
      </h1>
      <div className=" skills-container">
        <div>
          {skillData.map((skill) => (
            <div className="skill-item" key={`skill-item${skill.name}-1`}>
              <img src={`./icons/${skill.url}`} />
              <h2>{skill.name}</h2>
            </div>
          ))}
          {skillData.map((skill) => (
            <div className="skill-item" key={`skill-item${skill.name}-2`}>
              <img src={`./icons/${skill.url}`} />
              <h2>{skill.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
