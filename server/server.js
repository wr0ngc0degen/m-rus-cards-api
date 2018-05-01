var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Card} = require('./models/card');

var app = express();

app.use(bodyParser.json());

app.post('/cards', (req, res) => {
    var card = new Card({
        english: req.body.english,
        spanish: req.body.spanish,
        imageURL: req.body.imageURL,
        russian: req.body.russian
    });

    card.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});

app.listen(3001, () => {
    console.log('Started on port 3001');
});

module.exports = {app};