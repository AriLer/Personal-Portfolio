import React from 'react'
import ProjectCard from './ProjectCard'
import { projectsData } from '../../constants/index'

const ProjectCarousel = (props) => {
  return (
    <div className="carousel">
      <div className="inner" style={{ translate: `-${props.active * 100}% 0` }}>
        {projectsData.map((item, index) => {
          return <ProjectCard key={`project-${index}`} data={item} />
        })}
      </div>
    </div>
  )
}
export default ProjectCarousel
