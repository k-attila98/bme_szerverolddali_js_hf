/*
if the user is logged in call next
if not redirect to login
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {

        if(typeof req.session.loggedin === 'undefined' || req.session.loggedin !== true){
            return res.redirect('/');
        }

        next();
    };
};