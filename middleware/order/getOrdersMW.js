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

        /*
        res.locals.orders = [
            {
                _id: '1',
                carFuel: 'benzin',
                carFrame: 'Fiat Polski',
                carEngine: '2JZ',
                carColour: '#FFF6C5'
            },
            {
                _id: '2',
                carFuel: 'dízel',
                carFrame: 'Mitsubishi Lancer EVO VII',
                carEngine: 'BMW M3s engine',
                carColour: '#009090'
            }
        ];
        next();

         */
    };
};