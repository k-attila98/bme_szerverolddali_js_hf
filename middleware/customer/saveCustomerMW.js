/*
saves a customers data into the db, inserts new entity
if it exist, update
redirect to /customer/list
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    const CustomerModel = requireOption(objectrepository, 'CustomerModel');

    return function (req, res, next) {

        if((typeof req.body.name === 'undefined') ||
            (typeof req.body.address === 'undefined') ||
            (typeof req.body.email === 'undefined') ||
            (typeof req.body.password === 'undefined') ||
            (typeof req.body.country === 'undefined'))
        {
            return next();
        }

        if(typeof res.locals.customer === 'undefined')
        {
            res.locals.customer = new CustomerModel();

        }

        res.locals.customer.name = req.body.name;
        res.locals.customer.address = req.body.address;
        res.locals.customer.email = req.body.email;
        res.locals.customer.password = req.body.password;
        res.locals.customer.country = req.body.country;

        res.locals.customer.save((err) =>
        {
            if(err)
            {
                return next(err);
            }

            return res.redirect('/customer/list');
        });



    };
};