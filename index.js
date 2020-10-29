const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.set('view engine', 'ejs');

//app.use(express.static('static'));

require('./routes/routes')(app);

app.listen(3000, function () {
    console.log('Running on :3000');
});