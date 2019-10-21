const crud_routes = require('express').Router();

const BookController = require('../controllers/BookController')

crud_routes.get('/books', BookController.index);
crud_routes.get('/books/read/:id', BookController.read_book)
crud_routes.post('/books/create', BookController.create_book);
crud_routes.put('/books/update/:id', BookController.uptade_book);
crud_routes.delete('/books/delete/:id', BookController.delete_book);

module.exports = crud_routes;