/*
checks the privilege level of the logged in user
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    //const CustomerModel = requireOption(objectrepository, 'CustomerModel');

    return function (req, res, next) {

        /*
        CustomerModel.findOne( {_id: req.session.user.id},
            function (err, result) {
                if ((err) || (!result)) {
                    res.locals.error.push('Nem található ilyen felhasználó!');
                    return next();
                }

                req.session.user.privilege = result.privilegeLevel;
            });
        */


        if(res.locals.privilegelevel !== 1)
            res.redirect('/order');

        next();
    };
};