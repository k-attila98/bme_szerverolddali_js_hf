/*
sets the privilege level of the logged in user from db
0: user mode
1: admin mode
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

        res.locals.privilegelevel = 0;

        next();
    };
};