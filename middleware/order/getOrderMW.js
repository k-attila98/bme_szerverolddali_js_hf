/*
fetches order from db
based on :userid (req.params.userid) and :orderid (req.params.orderid) param
saves to res.locals.order
 */
const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.order = {
            _id: '2',
            carFuel: 'benzin',
            carFrame: 'Fiat Polski',
            carEngine: '2JZ',
            carColour: '#FFF6C5'
        };

        next();
    };
};