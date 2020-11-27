/*
gets a customer's all orders
based on :userid (req.params.userid) param or on logged in user id (req.session.userid)
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    const OrderModel = requireOption(objectrepository, 'OrderModel');

    return function (req, res, next) {

        if(typeof req.params.userid !== 'undefined') {
            OrderModel.find({_orderer: req.params.userid}, (err, orders) => {

                if (err) {
                    return next(err);
                }

                res.locals.orders = orders;
                console.log(res.locals.orders);
                return next();

            });
        }
        else
        {
            OrderModel.find({_orderer: req.session.userid}, (err, orders) => {

                if (err) {
                    return next(err);
                }

                res.locals.orders = orders;
                return next();

            });
        }
    };
};