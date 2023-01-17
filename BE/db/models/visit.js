const mongoose = require('mongoose');

const Visit = mongoose.model('visits', {
    userid: mongoose.Schema.Types.ObjectId,
    visitname: String,
});

module.exports = Visit;