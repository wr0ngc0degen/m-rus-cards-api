var mongoose = require('mongoose');

var Card = mongoose.model('Card', {
    english: {
        type: String,
        minlength: 1,
        trim: true
    },
    catalan: {
        type: String,
        minlength: 1,
        trim: true
    },
    imageURL: {
        type: String,
        default: null
    },
    russian: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {Card};