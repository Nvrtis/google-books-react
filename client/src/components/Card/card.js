import React from 'react'
import Buttons from '../save-button/save-button'
import "./style.css"


// deconstruct props and makes the cards for projects
const Card = ({title, img, authors, link, dataid}) => {
  // console.log(props.volumeInfo.imageLinks.smallThumbnail)
  // console.log(props.volumeInfo.imageLinks.thumbnail)
// console.log(title)
  return (
    <div className="card">
      <div className="card-body">
        <img src={img} className="img-fluid img" alt={title}/>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Authors: {authors}</p>
        <a href={link} target="_blank" className="btn btn-primary">Link to buy</a>
        <Buttons dataid={dataid} />
      </div>
    </div>
  )
}

export default Card