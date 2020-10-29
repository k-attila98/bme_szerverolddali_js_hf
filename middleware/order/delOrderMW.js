/*
delete a customer's order from db
uses res.locals.order
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {

        console.log('deleted an order');
        res.redirect('/customer/order/'+res.locals.customer._id);
        next();
    };
};