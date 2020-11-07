/*
delete a customer's order from db
uses res.locals.order
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {

        if(typeof res.locals.order === 'undefined')
        {
            return next();
        }

        res.locals.order.redirect(err => {
            if(err)
            {
                return next(err);
            }

            console.log('deleted an order: ' + req.params.orderid + ' userid: ' + req.params.userid);

            return res.redirect(`/customer/order/${res.locals.user._id}`);
        });


        //res.redirect('/customer/order/' + req.params.userid);
    };
};