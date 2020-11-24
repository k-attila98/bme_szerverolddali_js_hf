/*
gets a customer's all orders
based on :userid (req.params.userid) param
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    const OrderModel = requireOption(objectrepository, 'OrderModel');

    return function (req, res, next) {

        OrderModel.find({ _orderer: res.locals.customer._id }, (err, orders) => {

            if(err)
            {
                return next(err);
            }

            res.locals.orders = orders;
            return next();

        });

    };
};