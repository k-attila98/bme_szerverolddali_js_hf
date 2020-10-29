/*
saves a customers data into the db, inserts new entity
if it exist, update
redirect to /customer/list
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if((typeof req.body.name === 'undefined') ||
            (typeof req.body.address === 'undefined') ||
            (typeof req.body.email === 'undefined') ||
            (typeof req.body.password === 'undefined') ||
            (typeof req.body.country === 'undefined')){
            return next();
        }

        res.redirect('/customer/list');
        //next();
    };
};