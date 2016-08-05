var express = require('express');
var app = express();
var user = require('./controllers/db');
var bodyParser = require('body-parser');
var session = require('express-session');


app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

app.use(bodyParser.json());

app.get('/', user.getAllUsersApi);
app.post('/login', user.loginUserApi);
app.get('/user/:id', user.getUserByIdApi);
app.post('/user', user.addUserApi);
app.put('/user', user.updateUserApi);
// app.delete('/user', user.deleteUserApi);

app.listen(3000, function () {
    console.log('localhost:3000');
});
