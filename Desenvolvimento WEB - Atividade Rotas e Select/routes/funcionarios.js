var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: 'root',
    database : 'Northwind'
});

connection.connect();

router.get(
    '/',
    (req, res, next) => {
        connection.query('SELECT lastname, firstname FROM employees limit 9', (results, error) => {
            if(error) throw error;
            res.send(results);
        }
        )}
);

module.exports = router;
