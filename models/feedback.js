const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var FeedbackSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    input:{
        type: String,
        required: true
    }
});

const Feedback = module.exports = mongoose.model('Feedback', FeedbackSchema);