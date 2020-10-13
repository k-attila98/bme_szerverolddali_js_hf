const renderMW = require('../middleware/common/renderMW');

const checkLoginMW = require('../middleware/auth/checkLoginMW');
const handleWrongLoginMW = require('../middleware/auth/handleWrongLoginMW');
const registerNewUserMW = require('../middleware/auth/registerNewUserMW');
const forgotPasswordMW = require('../middleware/auth/forgotPasswordMW');
const authMW = require('../middleware/auth/authMW');
const checkPrivilegeMW = require('../middleware/auth/checkPrivilegeMW');

const getTopCustomersMW = require('../middleware/customer/getTopCustomersMW');
const getCustomersMW = require('../middleware/customer/getCustomersMW');
const getCustomerMW = require('../middleware/customer/getCustomerMW');
const saveCustomerMW = require('../middleware/customer/saveCustomerMW');
const delCustomerMW = require('../middleware/customer/delCustomerMW');

const getOrdersMW = require('../middleware/order/getOrdersMW');
const getOrderMW = require('../middleware/order/getOrderMW');
const saveOrderMW = require('../middleware/order/saveOrderMW');
const delOrderMW = require('../middleware/order/delOrderMW');

module.exports = function (app) {
    const objRepo = {};

    app.get('/',
        getTopCustomersMW(objRepo),
        renderMW(objRepo, 'index'));

    app.get('/login',
        renderMW(objRepo, 'login'));
    app.post('/login',
        checkLoginMW(objRepo),
        handleWrongLoginMW(objRepo),
        checkPrivilegeMW(objRepo));

    app.get('/register',
        renderMW(objRepo, 'register'));
    app.post('/register',
        registerNewUserMW(objRepo));

    app.get('/password_forgot',
        renderMW(objRepo, 'lost_password'));
    app.post('/password_forgot',
        forgotPasswordMW(objRepo));

    app.use('/order',
        authMW(objRepo),
        getCustomerMW(objRepo),
        saveOrderMW(objRepo),
        renderMW(objRepo, 'order'));

    app.get('/customer/list',
        authMW(objRepo),
        getCustomersMW(objRepo),
        renderMW(objRepo, 'dashboard'));

    app.use('/customer/add',
        authMW(objRepo),
        saveCustomerMW(objRepo),
        renderMW(objRepo, 'customer_add'));

    app.get('/customer/del/:userid',
        authMW(objRepo),
        getCustomerMW(objRepo),
        delCustomerMW(objRepo));

    app.use('/customer/edit/:userid',
        authMW(objRepo),
        getCustomerMW(objRepo),
        saveCustomerMW(objRepo),
        renderMW(objRepo, 'customer_edit'));

    app.get('/customer/order/:userid',
        authMW(objRepo),
        getCustomerMW(objRepo),
        getOrdersMW(objRepo),
        renderMW(objRepo, 'customer_orders'));

    app.use('/customer/order/:userid/add',
        authMW(objRepo),
        getCustomerMW(objRepo),
        getOrderMW(objRepo),
        saveOrderMW(objRepo),
        renderMW(objRepo, 'order_add'));

    app.get('/customer/order/:userid/:orderid/del',
        authMW(objRepo),
        getOrderMW(objRepo),
        delOrderMW(objRepo));

    app.use('/customer/order/:userid/:orderid/edit',
        authMW(objRepo),
        getCustomerMW(objRepo),
        getOrderMW(objRepo),
        saveOrderMW(objRepo),
        renderMW(objRepo, 'order_edit'));

}