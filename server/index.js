const express = require('express');
const path = require('path')
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = 8000;

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.use('/auth', require('./auth'))

app.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
  });

app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');    
});


app.listen(PORT, () => {
    console.log(`
        Listening on port ${PORT}
        http://localhost:${PORT}
    `)
});