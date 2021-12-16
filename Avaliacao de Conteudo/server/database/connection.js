var mysql = require('mysql2');
var conexaoDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'avaliacao'
});

module.exports = conexaoDB