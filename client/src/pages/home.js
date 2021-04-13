import React, { useState } from 'react'
import Container from '../components/container/container'
import Row from '../components/row/row'
import Col from '../components/col/col'
import BookSearch from '../components/bookSearch/bookSearch'
import axios from 'axios'
import Card from '../components/card/card'
import API from "../utils/API"

const Home = () => {
  const [books, setBooks] = useState([])


  // Search for the books the user requests
  function handleSearchForm(e) {
    e.preventDefault()
    let searchQuery = e.target[0].value.replace(/\s/g, '+')
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${process.env.REACT_APP_API_KEY}`)
      .then(resp => {
        setBooks(resp.data.items)
      }).catch(err => console.log(err))
  }

// see if the user has already saved this file earlier, if no duplicates are found the user will store the book in a database
  function handleSaveClick(e) {
    e.preventDefault()
    API.getBook(e.target.parentElement.childNodes[4].attributes.dataid.value).then(resp => {
      if (resp.data === null) {
        let saveBookData = {
          title: e.target.parentElement.childNodes[1].innerHTML,
          img: e.target.parentElement.childNodes[0].src,
          authors: e.target.parentElement.childNodes[2].innerHTML,
          link: e.target.parentElement.childNodes[3].href,
          id: e.target.parentElement.childNodes[4].attributes.dataid.value
        }
        API.postBook(saveBookData)
          .then(resp => { console.log(resp) })
          .catch(err => console.log(err))
      } else {
        alert("book already in saved storage")
      }
    })

  }

  return (
    <Container>
      <Row>
        <BookSearch
          onSubmit={handleSearchForm}
          name="search" />
      </Row>
      <Row>
        {books.map((book) => (
          <Col className="col" onClick={handleSaveClick} key={book.id}>
            <Card
              title={book.volumeInfo.title}
              img={
                book.volumeInfo.imageLinks === undefined
                  ? ""
                  : `${book.volumeInfo.imageLinks.thumbnail}`}
              authors={book.volumeInfo.authors}
              link={book.volumeInfo.canonicalVolumeLink}
              dataid={book.id}
            />
          </Col>
        )
        )}
      </Row>
    </Container>
  )
}

export default Home