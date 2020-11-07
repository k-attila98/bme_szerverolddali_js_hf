/*
deletes customer with all of its orders based on data: res.locals.customer
redirects to /customer/list
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {


        if(typeof(res.locals.customer === 'undefined')){
            return next();
        }

        res.locals.customer.remove(err => {
            if(err) {
                return next(err);
            }
            return res.redirect('/customer/list');
        }
        );

        /*
        console.log('deleted a customer: ' + req.params.userid);
        return res.redirect('/customer/list');

         */
    };
};