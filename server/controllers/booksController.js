const express = require('express');
const BookService = require('../service/book');
const router = express.Router();
router.get('/allbooks', async function (req, res, next) {
    const books = await BookService.getAllBooks();
    res.status(200).json(books);
})
module.exports = router;
