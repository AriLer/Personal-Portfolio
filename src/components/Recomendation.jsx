import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 30px;
  /* padding-bottom: 50px; */
  justify-content: space-between;
  flex: 1;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: end;
  flex: 2;
`

const Quote = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 40px;
  opacity: 0.5;
`

const Person = styled.img`
  height: 80px;
  border-radius: 50%;
  border: 3px solid white;
`

const Body = styled.div`
  flex: 6;
`

const Footer = styled.div`
  text-align: left;
  flex: 2;
`
const AuthorName = styled.h2`
  margin: 0;
`
const AuthorTitle = styled.h3`
  margin: 0;
`

const Recomendation = (props) => {
  return (
    <Container style={{ backgroundColor: props.color }}>
      <Header>
        <Quote src="src/assets/icons/quote.png" />
        <Person src={`src/assets/people/${props.data.imgSrc}`}></Person>
      </Header>
      <Body>{props.data.content}</Body>
      <Footer>
        <AuthorName>-{props.data.author.name}</AuthorName>
        <AuthorTitle>{props.data.author.title}</AuthorTitle>
      </Footer>
    </Container>
  )
}

export default Recomendation
