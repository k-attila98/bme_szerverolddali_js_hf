/*
deletes customer with all of its orders based on data: res.locals.customer
redirects to /customer/list
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};