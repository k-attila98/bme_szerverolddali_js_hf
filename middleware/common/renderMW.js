/*
renders the given view in viewName
 */

const requireOption = require('../common/requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res) {

        res.render(viewName);
    };
};