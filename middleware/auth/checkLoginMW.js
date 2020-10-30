/*
if password and username is correct, set a valid session (req.session)
if not correct, redirect to /login, set wrong pass param
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    //const CustomerModel = requireOption(objectrepository, 'CustomerModel');

    return function (req, res, next) {
        /*
        if((typeof req.body === 'undefined') || (typeof req.body.email === 'undefined') || (typeof req.body.password === 'undefined')){
            return next();
        }


        //search for an email in the db
        CustomerModel.findOne( {email: req.body.email},
            function (err, result) {
                if ((err) || (!result)) {
                    res.locals.error.push('Hibás felhasználó/jelszó!a');
                    return next();
                }

                //check password
                if (result.password !== req.body.password) {
                    res.locals.error.push('Hibás felhasználó/jelszó!b');
                    return next();
                }

                //if everything is correct, create session, go to landing page

                req.session.user.loggedin = true;
                req.session.user.id = result._id;

                return res.redirect('/order');
        });

        */
        return res.redirect('/order');
        next();
    };
};