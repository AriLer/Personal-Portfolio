import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Project from './ProjectCard'
import { projectsData } from './../constants/index'

const Carousel = styled.div`
  overflow: hidden;
  height: 80%;
`

const Inner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
  height: 100%;
`

const ProjectCarousel = (props) => {
  // const [activeIndex]

  return (
    <Carousel>
      <Inner style={{ transform: `translateX(-${props.active * 100}%)` }}>
        {projectsData.map((item, index) => {
          return <Project key={`project-${index}`} data={item} />
        })}
      </Inner>
    </Carousel>
  )
}
export default ProjectCarousel
