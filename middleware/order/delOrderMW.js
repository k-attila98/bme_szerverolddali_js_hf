/*
delete a customer's order from db
uses res.locals.order
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {

        console.log('deleted an order: ' + req.params.orderid + ' userid: ' + req.params.userid);
        res.redirect('/customer/order/' + req.params.userid);
        next();
    };
};