const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ContactSchema = new Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    }
});

const Contact = module.exports = mongoose.model('Contact', ContactSchema);