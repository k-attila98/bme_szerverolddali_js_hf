/*
if password and username is correct, set a valid session (req.session)
if not correct, redirect to /login, set wrong pass param
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};