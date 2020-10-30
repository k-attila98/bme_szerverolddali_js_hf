/*
registers a new user into the db
redirects to /login
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
                if ((err) || (result !== null)) {
                    res.locals.error.push('Már regisztráltak ezzel az emaillel');
                    return next();
                }

                //check if password is present
                if (result.password !== req.body.password) {
                    res.locals.error.push('Nincs megadva jelszó!');
                    return next();
                }

                //create new user and save to db
                var newCustomer = new CustomerModel();
                newCustomer.name = req.body.name;
                newCustomer.email = req.body.email;
                newCustomer.password = req.body.password;
                newCustomer.address = req.body.address;
                newCustomer.save(err => { res.redirect('/login'); } );
        });

         */
        res.redirect('/login');
    };
};