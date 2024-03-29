/*
delete a customer's order from db
uses res.locals.order
redirects to the customer's orders
meant to be called only from the admin privilege level (bc of the redirect)
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

            return res.redirect(`/customer/order/${res.locals.customer._id}`);
        });

    };
};