import axios from 'axios'

export default {
  getAllBooks: function() {
    return axios.get("/api/books")
  }
}