import React from 'react'
import './ProjectCard.css'

const Projects = (props) => {
  return (
    <div className="card">
      <div className="slide-container">
        <img
          className="project-img"
          src={`./projects/${props.data.images[0]}`}
          key={`image-${props.data.images[0]}`}
          id={`project-image-${props.data.name}`}
        />
      </div>
      <div className="about">
        <h1>{props.data.name}</h1>
        <h2>{props.data.desc}</h2>
        <div>
          {props.data.links.map((link) => (
            <a href={link.url} target="_blank" key={`link-${link.url}`}>
              {link.text}
            </a>
          ))}
        </div>
        <div>
          {props.data.tech.map((logo) => (
            <img
              className="icon"
              src={`./icons/${logo}.png`}
              key={`${logo}-logo`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
