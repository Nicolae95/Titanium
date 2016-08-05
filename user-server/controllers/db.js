var mysql = require('mysql');
var uuid = require('node-uuid');
var jwt = require('jwt-simple');

var connection = mysql.createConnection({
    multipleStatements: true,
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'mydatabase'
});

connection.connect(function(err) {
    if (err){
        console.error('error connecting: ' + err.stack);
        throw err;
    }
});


function myError (code, msg) {
    return {code: code, msg: msg};
}

//var secretKey = "ikjhk";

function loginUser (body, cb) {
    if (!body.login) {
        return cb(myError(409, 'login is mandatory'));
    }
    if (!body.pass) {
        return cb(myError(409, 'pass is mandatory'));
    }

    connection.query('SELECT * from users JOIN users_data ON users.id = users_data.user_id where login = ? and pass = ?',[body.login, body.pass], function(err, rows, fields) {
        console.log(rows);
        cb(null,rows);
    });

}

exports.loginUserApi = function loginUserApi (req, res) {
    loginUser(req.body, function (err, data) {
        if (err) {
            res.status(err.code).send(err.msg);
        } else {
            // var claims = {
            //     id: data[req.body.id],
            //     }
            //var jwt = nJwt.create(claims,secretKey);
            //var token = jwt.compact();
            //console.log(token);
            res.setHeader
            res.send(data);
        }
    });
}


function getAllUsers (cb) {
    connection.query('SELECT * from users JOIN users_data ON users.id = users_data.user_id', function(err, rows, fields) {
        cb(err, rows);
    });
}

exports.getAllUsersApi = function getAllUsersApi (req, res) {
    getAllUsers(function (err, data) {
        if (err) {
            res.status(err.code).send(err.msg);
        } else {
            res.header('Content-Type', 'application/json');
            res.send(JSON.stringify(data));
        }
    });
}

function getUserById (id, cb) {
    connection.query('SELECT * from users JOIN users_data ON users.id = users_data.user_id WHERE id = ?', id , function(err, rows, fields) {
        cb(err, rows);
    });
}

exports.getUserByIdApi = function getUserByIdApi (req, res) {
    getUserById(req.params.id, function (err, data) {
        if (err) {
            res.status(err.code).send(err.msg);
        } else {
            res.header('Content-Type', 'application/json');
            res.send(JSON.stringify(data));
        }
    });
}

function addUser (body, cb) {
    if (!body.login) {
        return cb(myError(409, 'login is mandatory'));
    }
    if (!body.pass) {
        return cb(myError(409, 'password is mandatory'));
    }
    if (!body.first_name) {
        return cb(myError(409, 'first name is mandatory'));
    }
    if (!body.last_name) {
        return cb(myError(409, 'last name is mandatory'));
    }
    var User = {
        login: body.login,
        pass: body.pass
    };
    var User_data = {
        first_name: body.first_name,
        last_name: body.last_name,
    }

    connection.query('INSERT INTO users SET ?', User, function(err, rows, fields) {
        // console.log(rows);
        // cb(err, rows);
    });
    connection.query('INSERT INTO users_data SET ?', User_data, function(err, rows, fields) {
        // console.log(rows);
        // cb(err, rows);
    });
}

exports.addUserApi = function addUserApi (req, res) {
    addUser(req.body, function (err, data) {
        if (err) {
            res.status(err.code).send(err.msg);
        } else {
            res.send(data)
        }
    });
}

function updateUser (body, cb) {
    if (!body.login) {
        return cb(myError(409, 'login is mandatory'));
    }
    if (!body.pass) {
        return cb(myError(409, 'password is mandatory'));
    }
    if (!body.first_name) {
        return cb(myError(409, 'first name is mandatory'));
    }
    if (!body.last_name) {
        return cb(myError(409, 'last name is mandatory'));
    }

    getUserById(body.id, function (err, data) {
        if (err) {
            return cb(err);
        }
        connection.query('UPDATE users SET login = ?, pass = ? WHERE id = ?', [body.login, body.pass, body.id], function(err, rows, fields) {
            //cb(null, rows);
        });
        connection.query('UPDATE users_data SET first_name = ?, last_name = ? WHERE user_id = ?', [body.first_name, body.last_name, body.id], function(err, rows, fields) {
            //cb(null, rows);
        });
    });

}

exports.updateUserApi = function updateUserApi (req, res) {
    updateUser(req.body, function (err, data) {
        if (err) {
            res.status(err.code).send(err.msg);
        } else {
            res.send(data)
        }
    });
}


// function deleteUser (body, cb) {
//     if (!body.id) {
//         return cb(myError(409, 'id is mandatory'));
//     }
//
//     connection.query('DELETE FROM users WHERE id = ?', body.id , function(err) {
//         cb(null, 'Entry with id ' + body.id + ' was successfully deleted');
//     });
//
// }
//
// exports.deleteUserApi = function deleteUserApi (req, res) {
//     deleteUser(req.body, function (err, data) {
//         if (err) {
//             res.status(err.code).send(err.msg);
//         } else {
//             res.send(data);
//         }
//     });
// }
