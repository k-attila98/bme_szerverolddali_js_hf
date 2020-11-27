/*
delete a customer's order from db
uses res.locals.order
redirects to /my_orders, the user can only access its orders from this page
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {

        if(typeof res.locals.order === 'undefined')
        {
            return next();
        }

        res.locals.order.remove(err => {
            if(err)
            {
                return next(err);
            }

            return res.redirect(`/my_orders`);
        });

    };
};