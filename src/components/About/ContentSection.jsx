import React from 'react'

const ContentSection = (props) => {
  return (
    <div className="text-container" style={{ flex: `${props.flex}` }}>
      <div className="vl" />
      <div>
        <h1 className="row-title">{props.data.title}</h1>
        <h2>{props.data.subtitle}</h2>
        {props.data.subtitle && <h3>{props.data.listTitle}</h3>}
        <ul>
          {props.data.list.map((item) => (
            <li key={`cotent-list-${props.data.title}-${item}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ContentSection
