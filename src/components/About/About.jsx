import React from 'react'
import './About.css'
import ContentSection from './ContentSection'
import { aboutData } from './../../constants/index'

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <h1 className="section-title">
          <span>01.</span> About me.
        </h1>
        <div className="content-row">
          <ContentSection
            data={aboutData[0]}
            flex={7}
            key={'education-section'}
          />
          <img src="./people/ari.JPG" style={{ flex: '5' }} />
        </div>
        <div className="content-row">
          <ContentSection
            data={aboutData[1]}
            flex={7}
            key={'hobbies-section'}
          />
          <ContentSection
            data={aboutData[2]}
            flex={5}
            key={'languages-section'}
          />
        </div>
      </div>
    </section>
  )
}

export default About
