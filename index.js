const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const colors = require("colors");

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
        console.log('[' + 'Error!'.inverse.red + '] ' + err);
    }
});

app.listen(3000, function () {
    console.log('[' + 'Run'.brightGreen + '] Running on :3000');
    console.log('[' + 'Tip'.brightMagenta +'] Tipp: admin felhasználó létrehozásához adatbázisban a privilegeLevel-t kell módosítani \'1\'-re (security reasons)');
    //console.log('[' + 'Error!'.bgWhite.black + '] ' + 'test');
});