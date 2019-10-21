const express = require('express');
const bodyParser = require('body-parser');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());

app.use(function (req, res, next){
    console.log(req.url);
    next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/calcs', require('./src/routes/calcs'));

const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/Books",
    { useNewUrlParser: true, useUnifiedTopology: true}
);
requireDir('./src/models');

app.use(require('./src/routes/crud'));

app.listen(7777);