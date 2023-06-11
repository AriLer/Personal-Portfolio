import React from 'react'

const Recomendation = (props) => {
  return (
    <div className="recomendation-card">
      <header>
        <img className="quote" src="./icons/quote.png" />
        <img className="person" src={`./people/${props.data.imgSrc}`} />
      </header>
      <main>{props.data.content}</main>
      <div className="author">
        <h2>- {props.data.author.name}</h2>
        <h3>{props.data.author.title}</h3>
      </div>
    </div>
  )
}

export default Recomendation
