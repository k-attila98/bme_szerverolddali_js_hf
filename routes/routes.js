const renderMW = require('../middleware/common/renderMW');

const authMW = require('../middleware/auth/authMW');
const checkLoginMW = require('../middleware/auth/checkLoginMW');
const setPrivilegeMW = require('../middleware/auth/setPrivilegeMW');
const checkPrivilegeMW = require('../middleware/auth/checkPrivilegeMW');
const forgotPasswordMW = require('../middleware/auth/lostPasswordMW');
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

const CustomerModel = require('../models/customer');
const OrderModel = require('../models/order');

module.exports = function (app) {
    const objRepo = {
        CustomerModel: CustomerModel,
        OrderModel: OrderModel
    };

    app.get('/',
        getTopCustomersMW(objRepo),
        renderMW(objRepo, 'index'));

    app.use('/login',
        checkLoginMW(objRepo),
        renderMW(objRepo, 'login'));

    app.use('/register',
        registerNewUserMW(objRepo),
        renderMW(objRepo, 'register'));

    app.use('/lost_password',
        forgotPasswordMW(objRepo),
        renderMW(objRepo, 'lost_password'));

    app.use('/logout',
        logoutMW()
    );

    app.use('/order',
        authMW(objRepo),
        setPrivilegeMW(objRepo),
        //checkPrivilegeMW(objRepo),
        getCustomerMW(objRepo),
        saveOrderMW(objRepo),
        renderMW(objRepo, 'order'));

    app.get('/customer/list',
        authMW(objRepo),
        setPrivilegeMW(objRepo),
        checkPrivilegeMW(objRepo),
        getCustomersMW(objRepo),
        renderMW(objRepo, 'dashboard'));

    app.use('/customer/add',
        authMW(objRepo),
        setPrivilegeMW(objRepo),
        checkPrivilegeMW(objRepo),
        saveCustomerMW(objRepo),
        renderMW(objRepo, 'customer_add_edit'));

    app.get('/customer/del/:userid',
        authMW(objRepo),
        setPrivilegeMW(objRepo),
        checkPrivilegeMW(objRepo),
        getCustomerMW(objRepo),
        delCustomerMW(objRepo));

    app.use('/customer/edit/:userid',
        authMW(objRepo),
        setPrivilegeMW(objRepo),
        checkPrivilegeMW(objRepo),
        getCustomerMW(objRepo),
        saveCustomerMW(objRepo),
        renderMW(objRepo, 'customer_add_edit'));

    app.get('/customer/order/:userid',
        authMW(objRepo),
        setPrivilegeMW(objRepo),
        checkPrivilegeMW(objRepo),
        getCustomerMW(objRepo),
        getOrdersMW(objRepo),
        renderMW(objRepo, 'customer_orders'));

    app.use('/customer/order/:userid/add',
        authMW(objRepo),
        setPrivilegeMW(objRepo),
        checkPrivilegeMW(objRepo),
        getCustomerMW(objRepo),
        //getOrderMW(objRepo),
        saveOrderMW(objRepo),
        renderMW(objRepo, 'order_add_edit'));

    app.get('/customer/order/:userid/:orderid/del',
        authMW(objRepo),
        setPrivilegeMW(objRepo),
        checkPrivilegeMW(objRepo),
        getCustomerMW(objRepo),
        getOrderMW(objRepo),
        delOrderMW(objRepo));

    app.use('/customer/order/:userid/:orderid/edit',
        authMW(objRepo),
        setPrivilegeMW(objRepo),
        checkPrivilegeMW(objRepo),
        getCustomerMW(objRepo),
        getOrderMW(objRepo),
        saveOrderMW(objRepo),
        renderMW(objRepo, 'order_add_edit'));

}