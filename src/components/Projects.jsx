import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import ProjectCarousel from './ProjectCarousel'

const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`

const Container = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  position: relative;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`

const IndicatorBtn = styled.button`
  margin: 10px;
  position: absolute;
  top: 50%;
  background-color: transparent;
  font-weight: bold;
`

const Arrow = styled.img`
  height: 30px;
`

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
    <Section id="projects">
      <Container>
        <h1 className="section-title">Projects.</h1>
        <ProjectCarousel active={activeIndex} key="project-carousel" />

        <IndicatorBtn
          onClick={() => {
            updateIndex(activeIndex - 1)
          }}
          style={{ left: '-10%' }}
          key="prev-proj-btn"
        >
          <Arrow src="src/assets/icons/left-arrow.png" />
        </IndicatorBtn>
        <IndicatorBtn
          onClick={() => {
            updateIndex(activeIndex + 1)
          }}
          style={{ right: '-10%' }}
          key="next-proj-btn"
        >
          <Arrow src="src/assets/icons/right-arrow.png" />
        </IndicatorBtn>
      </Container>
    </Section>
  )
}

export default Projects
