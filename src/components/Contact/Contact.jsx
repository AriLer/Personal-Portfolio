import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <div>
        <h2>Contact me</h2>
        <div className="contact-info">
          <div className="contact-col">
            <h3>
              <b>Name </b>Ari Lerner
            </h3>
            <h3>
              <b>Email </b>Ari.lernerdev@gmail.com
            </h3>
          </div>
          <div className="contact-col">
            <h3>
              <b>Phone </b>058-4361177
            </h3>
            <h3>
              <b>Address </b>Haifa, Israel
            </h3>
          </div>
        </div>
        <div className="socials">
          <a href="https://github.com/AriLer/" target="_blank">
            <img src="./icons/github.png" />
          </a>
          <a href="https://www.instagram.com/ari.lerner_/" target="_blank">
            <img src="./icons/instagram.png" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
