import React from 'react'
import styled, { keyframes } from 'styled-components'

const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-around;
  height: 100%;
  width: 100%;

  background: rgb(29, 38, 50);
  background: linear-gradient(
    0deg,
    rgba(29, 38, 50, 0.4) 0%,
    rgba(43, 55, 68, 0.9) 100%
  );

  border-radius: 55px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  z-index: 3;
`

const ProjectImg = styled.img`
  margin: 4% auto;
  margin-bottom: 0;
  /* margin-top: 3%; */
  height: 60%;
  border-radius: 20px;
`

const Desc = styled.div`
  padding: 20px auto;
  width: 85%;
  margin: auto;
  height: 25%;
  text-align: left;
`

const Title = styled.h1`
  margin: 0;
`

const About = styled.h2`
  color: #8c8c8c;
  font-weight: 400;
  white-space: pre-line;
`

const Tech = styled.div`
  /* background-colsor: red; */
`

const Icon = styled.img`
  height: 30px;
  margin: 0 10px;
`

const Projects = (props) => {
  return (
    <Card>
      <ProjectImg src={`src/assets/Projects/${props.data.imgSrc}`}></ProjectImg>
      <Desc>
        <Title>{props.data.name}</Title>
        <About>{props.data.desc}</About>
        <Tech>
          {props.data.tech.map((logo) => (
            <Icon
              src={`src/assets/Icons/${logo}.png`}
              key={`${logo}-logo`}
            ></Icon>
          ))}
        </Tech>
      </Desc>
    </Card>
  )
}

export default Projects
