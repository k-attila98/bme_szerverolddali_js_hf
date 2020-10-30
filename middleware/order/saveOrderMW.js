/*
saves an order to the db, uses :userid (req.params.userid)
if there is an existing one update
redirect to /order
*/

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {

        if((typeof req.body.carFuel === 'undefined') ||
            (typeof req.body.carColour === 'undefined') ||
            (typeof req.body.carFrame === 'undefined') ||
            (typeof req.body.carEngine === 'undefined')){
            return next();
        }

        console.log('saved an order for userid: ' +  req.params.userid);
        next();
    };
};