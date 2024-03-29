/*
fetches a specific customer's data by :userid (req.params.userid) param if it is not undefined
if not, we get the data from the logged in user id
data saved to res.locals.customer
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    const CustomerModel = requireOption(objectrepository, 'CustomerModel');

    return function (req, res, next) {

        if(typeof req.params.userid !== 'undefined')
        {
                CustomerModel.findOne({ _id: req.params.userid }, (err, customer) => {
                        if(err || !customer) {
                            return  next(err);
                        }

                        res.locals.customer = customer;
                        return next();
                    }
                );
        }
        else
        {
            CustomerModel.findOne({ _id: req.session.userid }, (err, customer) => {
                    if(err || !customer) {
                        return  next(err);
                    }

                    res.locals.customer = customer;
                    return next();
                }
            );
        }
    };
};