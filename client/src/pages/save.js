import React, { useEffect, useState } from 'react'
import Container from '../components/container/container'
import Row from '../components/row/row'
import Col from '../components/col/col'
import API from '../utils/API'
import Card from '../components/card/card'
const Save = () => {
  const [savedBooks, setSavedBooks] = useState([])


  useEffect(() => {
    API.getAllBooks().then(resp => { setSavedBooks(resp.data) })
  }, []);

  console.log(savedBooks)
  return (
    <Container>
      <Row>
        {savedBooks.length == 0 ?
          "No saved books"
          : savedBooks.map((book) => (
            <Col className="col" key={book._id}>
              <Card
                title={book.title}
                img={
                  book.img === undefined
                    ? ""
                    : `${book.img}`}
                authors={book.authors}
                link={book.link}
                dataId={book.id}
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

