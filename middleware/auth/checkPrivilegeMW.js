/*
checks the privilege level of the logged in user
sets the correct param in session (req.session)
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};