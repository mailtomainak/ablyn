var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password100',
    database: 'followers'
});
module.exports = connection;
