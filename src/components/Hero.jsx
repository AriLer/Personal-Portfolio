import React from 'react'
import styled, { keyframes } from 'styled-components'
import Navbar from './Navbar'

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
  /* width: 1400px; */
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

const Left = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`

const Intro = styled.p`
  font-family: 'Roboto Mono', monospace;
  justify-content: left;
  font-size: 130%;
  font-weight: 500;
`

const Title = styled.h1`
  margin: 0;
  font-size: 6rem;
  @media only screen and (max-width: 768px) {
    /* font-size: 5rem; */
    text-align: center;
  }
`

const Subtitle = styled.h2`
  color: rgba(140, 140, 140);
  font-size: 150%;
  width: 80%;
`

const Button = styled.button`
  background-color: transparent;
  color: white;
  font-weight: 500;
  width: 150px;
  margin: 50px 5px;
  padding: 15px;
  color: #da4ea2;
  font-weight: 800;
  font-family: 'Roboto Mono', monospace;
  border: 2px solid #da4ea2;
  border-radius: 5px;
  cursor: pointer;
`

const Right = styled.div`
  flex: 3;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Intro>Hi, my name is</Intro>
          <Title>Ari Lerner</Title>
          <Subtitle>I'm a developer specializing in front-end and AI</Subtitle>
          <a href="#contact">
            <Button>Contact Me</Button>
          </a>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  )
}

export default Hero
