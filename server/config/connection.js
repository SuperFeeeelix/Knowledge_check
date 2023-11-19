const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOD_URI || 'mongodb://127.0.0.1:27017') //database name will go here when created 

module.exports = mongoose.connection