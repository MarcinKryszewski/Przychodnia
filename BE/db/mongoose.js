const mongoose = require('mongoose');
const {databaseConnectionString, databaseName} = require('../config')

// db connect
mongoose.set("strictQuery", false);
mongoose.connect(databaseConnectionString, {dbName: databaseName});