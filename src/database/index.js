const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/financeiro');

mongoose.Promise = global.Promise;

module.exports = mongoose;