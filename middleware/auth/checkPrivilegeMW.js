/*
checks the privilege level of the logged in user
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    //const CustomerModel = requireOption(objectrepository, 'CustomerModel');

    return function (req, res, next) {

        if(res.locals.privilegelevel !== 1)
            res.redirect('/order');

        next();
    };
};