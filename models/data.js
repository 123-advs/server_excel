const mongoose = require('mongoose');
const termSchema = require('./detailData')

var dataSchema = new mongoose.Schema({
    terms: [termSchema],
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {
    timestamps: true
});

//Export the model
module.exports = mongoose.model('Data', dataSchema);