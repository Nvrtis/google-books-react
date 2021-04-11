import React, {useEffect, useState} from 'react'
import Container from '../components/container/container'
import Row from '../components/row/row'
import Col from '../components/col/col'
import API from '../utils/API'

const Save = () => {
  const [savedBooks, setSavedBooks] = useState([])


  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getAllBooks().then(resp => {setSavedBooks(resp)})

  }



  return (
    <Container>
      <Row>
      {/* {savedBooks.map((book) => (
          <Col className="col" key={book.id}>
            <Card 
              title={book.volumeInfo.title}
              img={
                book.volumeInfo.imageLinks === undefined
                  ? ""
                  : `${book.volumeInfo.imageLinks.thumbnail}`}
              authors={book.volumeInfo.authors}
              link={book.volumeInfo.canonicalVolumeLink}
              dataId={book.id}
              />
          </Col>
        )
        )} */}
      </Row>
    </Container>
  )
}

export default Save