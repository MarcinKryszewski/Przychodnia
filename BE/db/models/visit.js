const mongoose = require('mongoose');

const Visit = mongoose.model('visits', {
    userid: String,
    visitname: String,
});

module.exports = Visit;