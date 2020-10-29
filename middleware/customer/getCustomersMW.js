/*
gets all of the customers from the db
save into res.locals.customers
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    //const CustomerModel = requireOption(objectrepository, 'CustomerModel');

    return function (req, res, next) {

        res.locals.customers = [
            {
                _id: '123',
                name: 'Asd1',
                password: 'asdasd',
                address: 'Cim1',
                country: 'HU',
                email: 'Email1'
            },
            {
                _id: '124',
                name: 'Asd2',
                password: 'asdasd',
                address: 'Cim2',
                country: 'DE',
                email: 'Email2'
            }
        ];
        next();
    };
};