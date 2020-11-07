const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fdimir');

module.exports = mongoose;