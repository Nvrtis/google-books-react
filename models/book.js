const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        required: "A title is required",
    },
    img: {
        type: String,
    },
    authors: [
        String
    ],
    link: {
        type: String
    }

})

const Book = mongoose.model("Book", bookSchema)
module.exports = Book