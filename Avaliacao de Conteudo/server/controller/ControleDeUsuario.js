var Usuario = require('../models/usuario.js')
const conexaoDB = require('../database/connection.js')

//Creates and save new user
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" })
        return
    }

    console.log(req.body)
    var novoUsuario = new Usuario(req.body.idlogin, req.body.login, req.body.senha, req.body.nome, req.body.sobrenome)
    console.log(typeof parseInt(novoUsuario.idlogin))
    conexaoDB.query('INSERT INTO login VALUES (?, ?, ?, ?, ?)', [parseInt(novoUsuario.idlogin), novoUsuario.login, novoUsuario.login, novoUsuario.nome, novoUsuario.sobrenome], (err, res) => {
        if (err) throw err;

        console.log('Last insert ID:', novoUsuario.idlogin);
    });

    res.json("POST realizado com sucesso")
}

//Retrieve and return all users
exports.readAll = (req, res) => {
    let usuario
    conexaoDB.query('SELECT * FROM login', (results, error) => {
        if (error) throw error;

        user = results
        console.log(usuario)
    });
    res.send(usuario);
}

//Retrieve and return one user
exports.readOne = (req, res) => {

    let usuario
    conexaoDB.query('SELECT * FROM login WHERE idlogin = ?', parseInt(req.params.id), (results, error) => {
        if (error) throw error;

        user = results
        console.log(usuario)
    });
    res.send(usuario);
}

//Update a user
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" })
        return
    }

    var novoUsuario = new Usuario(req.body.idlogin, req.body.login, req.body.senha, req.body.nome, req.body.sobrenome)
    conexaoDB.query('UPDATE login SET idlogin = ?, login = ?, senha = ?, nome = ?, sobrenome = ? WHERE idlogin = ?', [parseInt(req.params.id), novoUsuario.login, novoUsuario.login, novoUsuario.nome, novoUsuario.sobrenome, req.params.id], (err, res) => {
        if (err) throw err;
    });
    res.send("Realizado com Sucesso!");
}

//Delete a user
exports.delete = (req, res) => {

    console.log(parseInt(req.params.id))
    conexaoDB.query('DELETE FROM login WHERE idlogin = ?', parseInt(req.params.id), (results, error) => {
        if (error) throw error;
    });
    res.send("Deletado com sucesso");
}