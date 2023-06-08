import styled from 'styled-components'
import './App.css'
import { Hero, About, Projects, Testimonials, Contact } from './components'

// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: white;
  &::-webkit-scrollbar {
    display: none;
  }
`

document.body.onpointermove = (ev) => {
  const { clientX, clientY } = ev
  document.getElementById('blob').animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: 'forwards' }
  )
}

const App = () => {
  return (
    <Container>
      <div id="blob"></div>
      <div id="blur"></div>
      <Hero id="#" />
      <About />
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
    </Container>
  )
}

export default App
