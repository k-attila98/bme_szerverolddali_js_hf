const Schema = require('mongoose').Schema;
const db = require('../config/database');

const Order = db.model('Order', {
    //_id: String,
    carFuel: String,
    carFrame: String,
    carEngine: String,
    carColour: String,
    _orderer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    }
});

module.exports = Order;