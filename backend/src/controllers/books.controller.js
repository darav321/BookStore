const Book = require("../models/books.model.js")

const postABook = async (req, res) => {
    try {
        const newBook = await Book({...req.body})
        await newBook.save()
        res.status(200).send({message : "Book posted successfully", book : newBook})
    } catch (error) {
        console.error("Error creating book", error)
        res.status(500).send({message : "Failed to create a book"})
    }
}

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).send(books)
    } catch (error) {
        console.error("Error fetching books", error)
        res.status(500).send({message : "Failed to fetch Books"})
    }
}

const getSingleBook = async (req, res) => {
    try {
        const {id} = req.params
        const book = await Book.findById(id)
        res.status(200).send(book)
    } catch (error) {
        console.error("Error fetching book", error)
        res.status(500).send({message : "Failed to fetch Book"})
    }
}

const updateBook = async (req,res) => {
    try {
        const {id} = req.params
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, {new:true})
        if(!updatedBook)
        {
            res.status(404).send({message : "Book is not found"})
        }
        res.status(200).send({
            message : "Book updated Suucessfully",
            book : updatedBook
        })
    } catch (error) {
        console.error("Error updating book", error)
        res.status(500).send({message : "Failed to update a Book"})
    }
}

const deleteBook = async (req, res) => {
    try {
        const {id} = req.params
        const deletedBook = await Book.findByIdAndDelete(id)
        if(!deletedBook)
        {
            res.status(404).send({message : "Book is not found"})
        }
        res.status(200).send({
            message : "Book deleted Suucessfully",
            book : deletedBook
    })
    } catch (error) {
        console.error("Error deleting book", error)
        res.status(500).send({message : "Failed to delete a Book"})
    }
}

module.exports = {
    postABook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook
}