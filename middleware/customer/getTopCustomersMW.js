/*
gets the top 5/10 customers from the db based on the number of orders
saved into res.locals.topcustomers
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    //const CustomerModel = requireOption(objectrepository, 'CustomerModel');

    return function (req, res, next) {
        res.locals.topCustomers = [
            {
                _id: '123',
                name: 'Ali Abdul Aziz',
                orderCount: '2'
            },
            {
                _id: '124',
                name: 'Busák János',
                orderCount: '0'
            }
        ];
        next();
    };
};