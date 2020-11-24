/*
gets the top 10 customers from the db based on the number of orders
saved into res.locals.topcustomers
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    const OrderModel = requireOption(objectrepository, 'OrderModel');

    return function (req, res, next) {

        OrderModel.aggregate(
            [
                { $group: {
                        _id: '$_orderer',
                        count: { $sum: 1 }
                    } },
                { $lookup: {
                        from: 'customers',
                        localField: '_id',
                        foreignField: '_id',
                        as: 'orderer',

                    } },
                { $sort: { count: -1 } },
                { $limit: 10 },
                { $unwind: { path: '$orderer' } }
            ],
            function(err, result) {
                if (err)
                {
                    return next(err);
                }

                res.locals.topCustomers = result.map(e => {
                    return { name: e.orderer.name, orderCount: e.count };
                });
                return next();
            }
        );
    };
};