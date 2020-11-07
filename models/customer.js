const Schema = require('mongoose').Schema;
const db = require('../config/database');

const Customer = db.model('Customer', {
    //_id: String,
    name: {type: String, default: '-'},
    password: String,
    address: {type: String, default: '-'},
    country: {type: String, default: '-'},
    email: String,
    privilegeLevel: {type: Number, default: 0 }
});

module.exports = Customer;