const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require("./api/api");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', api);

app.get('/', (req, res) => {
    res.send(`<p>Accede en: <i>/api</i></p>`);
});

app.use( (req, res, next) => { 
    res.status(404);
    res.json({
        message: "Not found"
    });
});

app.use( (err, req, res, next) => { 
    res.status(500);
    res.json({
        message: err.message
    });
});

module.exports = app;