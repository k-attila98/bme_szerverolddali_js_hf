const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fdimir', { useNewUrlParser: true });

module.exports = mongoose;