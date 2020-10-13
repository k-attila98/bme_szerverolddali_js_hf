/*
saves an order to the db, uses :userid (req.params.userid)
if there is an existing one update
redirect to /order
*/

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};