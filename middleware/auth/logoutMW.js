/*
log the current user out, terminate session
redirects to /
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        req.session.destroy(err => { res.redirect('/');});
    };
};