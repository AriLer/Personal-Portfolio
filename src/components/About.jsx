import styled, { keyframes } from 'styled-components'
import React from 'react'

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
  text-align: left;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`

const About = () => {
  return (
    <Section id="about">
      <Container>
        <h1 className="section-title">About me</h1>
        <div>
          <h1>Education</h1>
          <h2>The Hebrew Reali School of Haifa </h2>
          <h3>12 years + full Bagrut</h3>
          <ul>
            <li>software Engineering - 10 units</li>
            <li>Physics - 5 units</li>
            <li>Mathematics - 5 units</li>
            <li>Accelerated English - 5 units</li>
          </ul>
        </div>
      </Container>
    </Section>
  )
}

export default About
