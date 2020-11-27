/*
gets all of the customers except with the name 'admin' from the db
save into res.locals.customers
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    const CustomerModel = requireOption(objectrepository, 'CustomerModel');

    return function (req, res, next) {

        CustomerModel.find({ name: {$ne: 'admin'} }, (err, customers) => {
            if(err)
            {
                return next(err);
            }

            res.locals.customers = customers;
            return next();
        }
        );
    };
};