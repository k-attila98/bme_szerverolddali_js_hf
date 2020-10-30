/*
handles the wrong password option, writes the correct password to the console
redirects to /login
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    //const CustomerModel = requireOption(objectrepository, 'CustomerModel');

    return function (req, res, next) {

        /*
        //if not enough parameter
        if((typeof req.body === 'undefined') || (typeof req.body.email === 'undefined')){
            res.locals.error.push('Nem lett megadva email!');
            return next();
        }

        //find customer by email
        CustomerModel.findOne( { email: req.body.email },
            function (err, result) {
                if ((err) || (!result)) {
                    res.locals.error.push('Nem található ilyen felhasználó!');
                    return next();
                }

                //print pw
                console.log("The password for " + result.email +" is: " + result.password);
                res.redirect('/login');
        });

         */

        const result = {
            _id: '123',
            name: 'Asd1',
            password: 'asdasd',
            address: 'Cim1',
            country: 'HU',
            email: 'Email1'
        };

        console.log("The password for " + result.email +" is: " + result.password);
        res.redirect('/login');
    };
};