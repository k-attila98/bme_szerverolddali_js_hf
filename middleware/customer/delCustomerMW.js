/*
Deletes customer with all of its orders, data: res.locals.customer
redirects to /customer/del/:userid
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};