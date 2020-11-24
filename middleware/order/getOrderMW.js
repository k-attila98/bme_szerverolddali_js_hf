/*
fetches order from db
based on :userid (req.params.userid) and :orderid (req.params.orderid) param
saves to res.locals.order
 */
const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    const OrderModel = requireOption(objectrepository, 'OrderModel');

    return function (req, res, next) {

        OrderModel.findOne({ _id: req.params.orderid }, (err, order) => {
            if(err || !order)
            {
                return next(err);
            }

            res.locals.order = order;
            return next();
        });
    };
};