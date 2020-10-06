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