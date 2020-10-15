/*
gets all of the customers from the db
save into res.locals.customers
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    const CustomerModel = requireOption(objectrepository, 'CustomerModel');

    return function (req, res, next) {
        next();
    };
};