const mongoose = require('mongoose');
const {connectionString} = require('../config');

mongoose.connect(connectionString);