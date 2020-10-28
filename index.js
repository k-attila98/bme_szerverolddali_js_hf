const express = require('express');
const app = express();

app.use(express.static('static'));

app.set('view engine', 'ejs');

require('./routes/routes')(app);

app.listen(3000, function () {
    console.log('Running on :3000');
});