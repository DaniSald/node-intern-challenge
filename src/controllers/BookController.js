const mongoose = require('mongoose');
const Book = mongoose.model('Book');

module.exports = {

    async index(req, res){
        const book = await Book.find();

        return res.json(book);
    },

    async read_book(req, res){
        const book = await Book.findById(req.params.id);

        return res.json(book);
    },

    async create_book(req, res){
        const book = await Book.create(req.body);

        return res.json(book);
    },

    async uptade_book(req, res){
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(book);
    },

    async delete_book(req, res){
        await Book.findByIdAndRemove(req.params.id);

        return res.send('livro deletado');
    }

}