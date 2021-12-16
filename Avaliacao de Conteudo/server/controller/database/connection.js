var mysql = require('mysql2');
var conexaoDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'prova_dois'
});

module.exports = conexaoDB