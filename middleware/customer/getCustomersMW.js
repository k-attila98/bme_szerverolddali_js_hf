/*
gets all of the customers from the db
save into res.locals.customers
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};