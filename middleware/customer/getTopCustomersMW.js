/*
gets the top 5/10 customers from the db based on the number of orders
saved into res.locals.topcustomers
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};