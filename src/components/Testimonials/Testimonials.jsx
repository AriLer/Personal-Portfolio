import React from 'react'
import { testimonialsData } from './../../constants/index'
import Recomendation from './Recomendation'
import './Testimonials.css'

const About = () => {
  return (
    <section className="seciton" id="testimonials">
      <h1
        className="section-title testimonials-title"
        style={{ marginBottom: '10px' }}
      >
        <span>03.</span> Testimonials.
      </h1>
      <div className="recomendations-container">
        {testimonialsData.map((item) => (
          <Recomendation
            data={item}
            key={`recomendation-${item.author.name}`}
          ></Recomendation>
        ))}
      </div>
    </section>
  )
}

export default About
