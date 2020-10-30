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
                name: 'Ali Abdul Aziz',
                password: 'barossgabor1',
                address: '1072 Budapest, Akácfa utca 18.',
                country: 'Magyarország',
                email: 'aliakiraly@gmail.com'
            },
            {
                _id: '124',
                name: 'Busák János',
                password: 'xixokintmaradt',
                address: 'St Katharine\'s & Wapping, London EC3N 4AB',
                country: 'United Kingdom',
                email: 'meglettaxixo@freemail.com'
            }
        ];
        next();
    };
};