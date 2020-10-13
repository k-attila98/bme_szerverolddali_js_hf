/*
delete a customer's order from db
uses :userid (req.params.userid) and :orderid (req.params.orderid)
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};