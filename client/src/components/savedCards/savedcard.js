import React from 'react'
import DeleteButtons from '../delete-button/delete-button'
import "./style.css"


// deconstruct props and makes the cards for projects
const SavedCard = ({title, img, authors, link, datavalue}) => {
  // console.log(props.volumeInfo.imageLinks.smallThumbnail)
  // console.log(props.volumeInfo.imageLinks.thumbnail)
console.log(datavalue)
  return (
    <div className="card">
      <div className="card-body">
        <img src={img} className="img-fluid img" alt={title}/>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Authors: {authors}</p>
        <a href={link} target="_blank" rel="noreferrer" className="btn btn-primary">Link to buy</a>
        <DeleteButtons datavalue={datavalue} />
      </div>
    </div>
  )
}

export default SavedCard