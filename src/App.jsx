import styled from 'styled-components'
import './App.css'
import {Hero, About, Projects, Contact} from './components'



const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: white;
  &::-webkit-scrollbar{
    display: none
  }
`


const App = () => {
  const blob = document.getElementById('blob');

  document.body.onpointermove = ev => {
    const {clientX, clientY} = ev;
    blob.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
    }, {duration: 3000, fill:  "forwards"})
  }

  return (
      <Container>
        <div id="blob"></div>
        {/* <div id="blur"></div> */}
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Container>
  )
}

export default App
