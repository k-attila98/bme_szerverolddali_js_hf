/*
fetches a specific customer's data by :userid (req.params.userid) param
data saved to res.locals.customer
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};