/*
if password and username is correct, set a valid session
if not redirect to login page, set error value
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};