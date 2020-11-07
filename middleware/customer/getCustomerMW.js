/*
fetches a specific customer's data by :userid (req.params.userid) param
data saved to res.locals.customer
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    const CustomerModel = requireOption(objectrepository, 'CustomerModel');

    return function (req, res, next) {

        //console.log(req.params.userid);

        if(typeof req.params.userid === 'undefined')
        {
            CustomerModel.findOne({ _id: req.session.userid }, (err, customer) => {
                    if(err || !customer) {
                        return  next(err);
                    }

                    res.locals.customer = customer;
                    return next();
                }
            );
        }
        else
        {
            CustomerModel.findOne({ _id: req.params.userid }, (err, customer) => {
                    if(err || !customer) {
                        return  next(err);
                    }

                    res.locals.customer = customer;
                    return next();
                }
            );
        }

        /*
        res.locals.customer = {
                _id: '123',
                name: 'Ali Abdul Aziz',
                password: 'barossgabor1',
                address: '1072 Budapest, Akácfa utca 18.',
                country: 'Magyarország',
                email: 'aliakiraly@gmail.com'
            };

        next();

         */
    };
};