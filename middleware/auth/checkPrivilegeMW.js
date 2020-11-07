/*
checks the privilege level of the logged in user
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {

    return function (req, res, next) {

        if(res.locals.privilegelevel !== 1 || res.locals.privilegelevel !== req.session.userprivilege)
            res.redirect('/order');

        return next();
    };
};