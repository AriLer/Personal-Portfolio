import React from 'react'
import styled, { keyframes } from 'styled-components'
import { testimonialsData } from './../constants/index'
import Recomendation from './Recomendation'

const Section = styled.div`
  height: 55vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  margin-top: 50px;
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`

const Container = styled.div`
  height: 100%;
  width: 1400px;
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
const ContactInfo = styled.div`
  background-color: #3d787d;
  flex: 5;
  height: 100%;
  text-align: left;
  padding: 10px;
`

const Recomindations = styled.div`
  display: flex;
  flex: 6.5;
  height: 100%;
`

const Left = styled.div`
  flex: 5;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 6;
`

const Contact = () => {
  return (
    <Section id="contact">
      {/* <Container> */}
      <ContactInfo>
        <h1> Contact Me</h1>
      </ContactInfo>
      <Recomindations>
        <Left>
          <Recomendation data={testimonialsData[0]} color="#8e9191" />
        </Left>
        <Right>
          <Recomendation data={testimonialsData[1]} color="#da4ea2" />
          <Recomendation data={testimonialsData[2]} color="#923fe6" />
        </Right>
      </Recomindations>
      {/* </Container> */}
    </Section>
  )
}

export default Contact
