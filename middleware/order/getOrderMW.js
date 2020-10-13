/*
fetches order from db, based on :userid (req.params.userid) and :orderid (req.params.orderid) param
 */
const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};