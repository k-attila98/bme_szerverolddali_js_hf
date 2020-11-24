/*
saves an order to the db
if there is an existing one update
redirect to /order
*/

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    const OrderModel = requireOption(objectrepository, 'OrderModel');

    return function (req, res, next) {

        if(
            (typeof req.body.carFuel === 'undefined') ||
            (typeof req.body.carColour === 'undefined') ||
            (typeof req.body.carFrame === 'undefined') ||
            (typeof req.body.carEngine === 'undefined') ||
            (typeof res.locals.customer === 'undefined')
        )
        {
            return next();
        }

        if(typeof res.locals.order === 'undefined')
        {
            res.locals.order = new OrderModel();
        }

        res.locals.order.carFuel = req.body.carFuel;
        res.locals.order.carColour = req.body.carColour;
        res.locals.order.carFrame = req.body.carFrame;
        res.locals.order.carEngine = req.body.carEngine;
        res.locals.order._orderer = res.locals.customer._id;


        res.locals.order.save(err => {
            if(err)
            {
                return next(err);
            }
            return res.redirect(`/customer/order/${res.locals.customer._id}`);
        });
    };
};