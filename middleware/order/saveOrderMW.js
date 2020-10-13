/*
saves an order to the db, uses :userid
if there is an existing one update
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};