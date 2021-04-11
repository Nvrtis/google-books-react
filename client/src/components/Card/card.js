import React from 'react'
import "./style.css"


// deconstruct props and makes the cards for projects
const Card = ({ title, link, repoLink, desc,img}) => {

  return (
    <div className="card">
      <div className="card-body">
        <img src={img} className="img-fluid img" alt="project-image"/>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <a href={link} className="btn btn-primary">Link to live page</a>
        <a href={repoLink} className="btn btn-primary">Link to repo page</a>
      </div>
    </div>
  )
}

export default Card