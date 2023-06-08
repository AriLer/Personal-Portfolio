import styled, { keyframes } from 'styled-components'
import React from 'react'
import { testimonialsData } from './../constants/index'
import Recomendation from './Recomendation'

const Section = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
  background-color: #3d787d;
`

const Container = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`

const Slider = styled.div``

const About = () => {
  return (
    <Section id="testimonials">
      <Container>
        {testimonialsData.map((item) => (
          <Recomendation data={item}></Recomendation>
        ))}
      </Container>
    </Section>
  )
}

export default About
