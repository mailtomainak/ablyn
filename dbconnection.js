var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'secret',
    database: 'tweets'
});
module.exports = connection;
