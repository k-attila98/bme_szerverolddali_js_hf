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
    console.log('Tipp: admin felhsználóhoz adatbázisban a privilegeLevel-t kell módosítani \'1\'-re');
});