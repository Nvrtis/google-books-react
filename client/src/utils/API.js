import axios from 'axios'

export default {
  getAllBooks: function() {
    return axios.get("/api/books")
  },
  postBook: function(data) {
    return axios.post("/api/books", data)
  },
}