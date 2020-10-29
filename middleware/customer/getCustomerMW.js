/*
fetches a specific customer's data by :userid (req.params.userid) param
data saved to res.locals.customer
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    //const CustomerModel = requireOption(objectrepository, 'CustomerModel');

    return function (req, res, next) {

        /*
        CustomerModel.findOne({ _id: req.params.userid }, (err, customer) => {
            if(err || !customer) {
                return  next(err);
            }

            res.locals.costumer = customer;
            return next();
        }
        );


        */
        res.locals.customer = {
                _id: '123',
                name: 'Asd1',
                password: 'asdasd',
                address: 'Cim1',
                country: 'HU',
                email: 'Email1'
            };

        next();
    };
};