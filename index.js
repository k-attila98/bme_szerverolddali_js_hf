const express = require('express');
const app = express();

require('./routes/routes')(app);

app.use(express.static('static'));
app.listen(3000, function () {
    console.log('Running on :3000');
});