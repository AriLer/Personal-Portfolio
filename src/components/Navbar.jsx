import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const Container = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  padding: 10px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    /* padding: 10px; */
  }
`
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  font-size: 90%;
  font-family: 'Roboto Mono', monospace;
`

const List = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;

  /* @media only screen and (max-width: 768px) {
        display: none;  
    } */
`

const ListItem = styled.li`
  cursor: pointer;
  color: #dedede;
`

const Num = styled.span`
  color: #da4ea2;
  font-weight: 800;
`

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <List>
            <a href="#about">
              <ListItem>
                <Num>01.</Num> About me
              </ListItem>
            </a>
            <a href="#projects">
              <ListItem>
                <Num>02.</Num> Projects
              </ListItem>
            </a>
            <a href="#testimonials">
              <ListItem>
                <Num>03.</Num> Recomendations
              </ListItem>
            </a>
            <a href="#contact">
              <ListItem>
                <Num>04.</Num> Contact me
              </ListItem>
            </a>
          </List>
        </Links>
      </Container>
    </Section>
  )
}

export default Navbar
