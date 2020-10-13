/*
if password and username is correct, set a valid session
if not correct, redirect to /login, set param
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};