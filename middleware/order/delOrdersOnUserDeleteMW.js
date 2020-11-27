/*
delete a customer's orders from db, if we delete the customer
uses req.params.userid to serach for the orderer in the db
redirects calls next, because delCustomer redirects to /customer/list
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    const OrderModel = requireOption(objectrepository, 'OrderModel');

    return function (req, res, next) {

        OrderModel.remove({ _orderer: req.params.userid}, err => {
            if(err)
            {
                return next(err);
            }

            return next();
        });

    };
};