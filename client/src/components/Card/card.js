import React from 'react'
import "./style.css"


// deconstruct props and makes the cards for projects
const Card = ({title,img, authors, link}) => {
  // console.log(props.volumeInfo.imageLinks.smallThumbnail)
  // console.log(props.volumeInfo.imageLinks.thumbnail)
console.log(title)
  return (
    <div className="card">
      <div className="card-body">
        <img src={img} className="img-fluid img" alt={title}/>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Authors: {authors}</p>
        <a href={link} className="btn btn-primary">Link to page</a>

      </div>
    </div>
  )
}

export default Card