const mongoose = require('mongoose'); // Erase if already required

const termSchema = new mongoose.Schema({
    dateTime: String,
    pv1: String,
});

//Export the model
module.exports = termSchema;