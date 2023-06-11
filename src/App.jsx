import './App.css'
import {
  Hero,
  About,
  Projects,
  Testimonials,
  Contact,
  Skills,
} from './components'

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
    <div className="outer-app-container">
      <div id="blob"></div>
      <div id="blur"></div>
      <div className="inner-app-container">
        <Hero id="#" />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
    </div>
  )
}

export default App
