import React, { useEffect, useState } from 'react'
import Container from '../components/container/container'
import Row from '../components/row/row'
import Col from '../components/col/col'
import API from '../utils/API'
import SavedCard from '../components/savedCards/savedcard'
const Save = () => {
  const [savedBooks, setSavedBooks] = useState([])


  useEffect(() => {
    loadBooks()
  }, []);

  function loadBooks () {
    API.getAllBooks().then(resp => { setSavedBooks(resp.data) })
  }

  function handleDeleteClick(e) {
    e.preventDefault()
    // console.log(_id: e.target.attributes[1].value)
    API.deleteBook( e.target.attributes[1].value).then(
      loadBooks()
    )
  }

  console.log(savedBooks)
  return (
    <Container>
      <Row>
        {savedBooks.length === 0 ?
          "No saved books"
          : savedBooks.map((book) => (
              <Col className="col" onClick={handleDeleteClick} key={book._id}>
                <SavedCard
                  title={book.title}
                  img={
                    book.img === undefined
                      ? ""
                      : `${book.img}`}
                  authors={book.authors}
                  link={book.link}
                  datavalue={book._id}
                />
              </Col>
            )
            )
        }
      </Row>
    </Container>
  )
}
export default Save

