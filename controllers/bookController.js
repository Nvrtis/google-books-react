const Book = require('../models/book')

module.exports = {

  // gets all the books (for saved page)
  getBooks: function (req, res) {
    Book.find({})
      .then(books => { res.json(books) })
      .catch(err => res.status(500).send())

  },

  // saves the books from google books to your own saved list
  createBooks: function (req, res) {
    Book.create(req.body)
      .then(bookData => { res.json(bookData) })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })

  },

  // deletes books from saved list
  deleteBook: function (req, res) {
    console.log(req.params.id)
    Book.findByIdAndDelete(req.params.id)
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },

  // gets a single book from your list (used to check for duplicates)
  getBook: function (req, res) {
    console.log(req.params)
    Book.findOne(req.params)
      .then(book => { res.json(book) })
      .catch(err => res.status(500).send())

  }

}