/*
if password and username is correct, set a valid session (req.session)
if not correct, redirect to /login, set wrong pass param
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    const CustomerModel = requireOption(objectrepository, 'CustomerModel');

    return function (req, res, next) {

        if((typeof req.body === 'undefined') || (typeof req.body.email === 'undefined') || (typeof req.body.password === 'undefined')){
            return next();
        }

        //search for an email in the db
        CustomerModel.findOne( {email: req.body.email},
            function (err, result) {
                if ((err) || (!result)) {
                    res.locals.error = 'Hibás felhasználó/jelszó!';
                    //console.log(res.locals.error);
                    return next();
                }

                //check password
                if (result.password !== req.body.password) {
                    res.locals.error = 'Hibás felhasználó/jelszó!';
                    //console.log(res.locals.error);
                    return next();
                }

                //if everything is correct, create session, go to landing page
                req.session.loggedin = true;
                req.session.userid = result._id;

                return req.session.save(err => res.redirect('/order'));
        });
    };
};