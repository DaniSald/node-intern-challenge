const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema ({
    nome: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
});

mongoose.model("Book", BookSchema);