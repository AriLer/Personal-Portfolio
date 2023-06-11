import React, { useState } from 'react'
import ProjectCarousel from './ProjectCarousel'
import './projects.css'

const Projects = () => {
  const [activeIndex, SetActiveIndex] = useState(0)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0
    } else if (newIndex >= 3) {
      newIndex = 2
    }

    SetActiveIndex(newIndex)
    console.log(newIndex)
  }

  return (
    <section className="section" id="projects">
      <div className="project-container">
        <h1 className="section-title">
          <span>02.</span> Projects.
        </h1>
        <ProjectCarousel active={activeIndex} key="project-carousel" />
        <div
          className="indicator-btn left-btn"
          onClick={() => updateIndex(activeIndex - 1)}
          style={{ display: activeIndex > 0 ? 'block' : 'none' }}
        >
          <img className="arrow" src="./icons/left-arrow.png" />
        </div>

        <div
          className="indicator-btn right-btn"
          onClick={() => updateIndex(activeIndex + 1)}
          style={{ display: activeIndex < 2 ? 'block' : 'none' }}
        >
          <img className="arrow" src="./icons/right-arrow.png" />
        </div>
      </div>
    </section>
  )
}

export default Projects
