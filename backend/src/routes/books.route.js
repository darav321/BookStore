const express = require('express');
const Book = require('../models/books.model');
const { postABook, getAllBooks, getSingleBook, updateBook, deleteBook } = require('../controllers/books.controller.js');
const verifyAdminToken = require('../middlewares/verifyToken.js');
const router = express.Router();

router.post("/create-book", verifyAdminToken, postABook)
router.get("/home", getAllBooks)
router.get("/:id", getSingleBook)
router.put("/edit/:id", updateBook)
router.delete("/:id", deleteBook)
module.exports = router