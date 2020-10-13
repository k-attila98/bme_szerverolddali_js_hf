/*
saves a customers data into the db, inserts new entity
if it exist, update
redirect to /customer/list
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};