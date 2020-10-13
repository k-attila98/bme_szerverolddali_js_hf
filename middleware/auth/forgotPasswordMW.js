/*
handles the wrong password option, writes the correct password to the console
redirects to /login
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};