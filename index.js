/*
const CustomerModel = require('./models/customer');

let cstm = new CustomerModel();

cstm.name = 'Ali Abdul Aziz';
cstm.password = 'barossgabor1';
cstm.address = '1072 Budapest, Akácfa utca 18.';
cstm.country = 'Magyarország';
cstm.email = 'aliakiraly@gmail.com';
cstm.save((err) => {
    console.log(err);
});
*/


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(
    session({
        secret: 'nemtudokjobbatkitalalni'
    })
);

require('./routes/routes')(app);

app.use((err, req, res, next) => {
    if(err)
    {
        res.end('Oops, something went wrong...')
        console.log(err);
    }
});

app.listen(3000, function () {
    console.log('Running on :3000');
});