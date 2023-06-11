import React from 'react'
import Navbar from './Navbar'
import './Hero.css'

import resume from "./../../../public/Letters/Resume.pdf";



const Hero = () => {
  return (
    <section className="section" id="hero">
      <Navbar />
      <div className="section-container hero-container">
        <p>Hi, my name is</p>
        <h1>Ari Lerner</h1>
        <h2>I'm a developer specializing in front-end and AI</h2>
        {/* <a > */}
        <button className="contact-btn" onClick={() => window.open(resume)}><i></i>Download resume</button>
        {/* </a> */}
      </div>
    </section>
  )
}

export default Hero
