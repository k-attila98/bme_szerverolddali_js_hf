const renderMW = require('../middleware/common/renderMW');

const authMW = require('../middleware/auth/authMW');
const checkLoginMW = require('../middleware/auth/checkLoginMW');
const checkPrivilegeMW = require('../middleware/auth/checkPrivilegeMW');
const forgotPasswordMW = require('../middleware/auth/forgotPasswordMW');
const logoutMW = require('../middleware/auth/logoutMW');
const registerNewUserMW = require('../middleware/auth/registerNewUserMW');

const delCustomerMW = require('../middleware/customer/delCustomerMW');
const getCustomerMW = require('../middleware/customer/getCustomerMW');
const getCustomersMW = require('../middleware/customer/getCustomersMW');
const getTopCustomersMW = require('../middleware/customer/getTopCustomersMW');
const saveCustomerMW = require('../middleware/customer/saveCustomerMW');

const delOrderMW = require('../middleware/order/delOrderMW');
const getOrderMW = require('../middleware/order/getOrderMW');
const getOrdersMW = require('../middleware/order/getOrdersMW');
const saveOrderMW = require('../middleware/order/saveOrderMW');

module.exports = function (app) {
    const objRepo = {};

    app.get('/',
        getTopCustomersMW(objRepo),
        renderMW(objRepo, 'index'));

    app.get('/login',
        renderMW(objRepo, 'login'));
    app.post('/login',
        checkLoginMW(objRepo),
        checkPrivilegeMW(objRepo));

    app.get('/register',
        renderMW(objRepo, 'register'));
    app.post('/register',
        registerNewUserMW(objRepo));

    app.get('/password_forgot',
        renderMW(objRepo, 'lost_password'));
    app.post('/password_forgot',
        forgotPasswordMW(objRepo));

    app.get('/logout',
        logoutMW()
    );

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
        renderMW(objRepo, 'customer_add_edit'));

    app.get('/customer/del/:userid',
        authMW(objRepo),
        getCustomerMW(objRepo),
        delCustomerMW(objRepo));

    app.use('/customer/edit/:userid',
        authMW(objRepo),
        getCustomerMW(objRepo),
        saveCustomerMW(objRepo),
        renderMW(objRepo, 'customer_add_edit'));

    app.get('/customer/order/:userid',
        authMW(objRepo),
        getCustomerMW(objRepo),
        getOrdersMW(objRepo),
        renderMW(objRepo, 'customer_orders'));

    app.use('/customer/order/:userid/add',
        authMW(objRepo),
        getCustomerMW(objRepo),
        //getOrderMW(objRepo),
        saveOrderMW(objRepo),
        renderMW(objRepo, 'order_add_edit'));

    app.get('/customer/order/:userid/:orderid/del',
        authMW(objRepo),
        getCustomerMW(objRepo),
        getOrderMW(objRepo),
        delOrderMW(objRepo));

    app.use('/customer/order/:userid/:orderid/edit',
        authMW(objRepo),
        getCustomerMW(objRepo),
        getOrderMW(objRepo),
        saveOrderMW(objRepo),
        renderMW(objRepo, 'order_add_edit'));

}