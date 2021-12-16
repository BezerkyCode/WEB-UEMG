const express = require('express')

const route = express.Router()
const ControleDeUsuario = require('../controller/ControleDeUsuario')

route.get('/', (req, res) => {
    console.log(req.body)
    res.json({ message: "Hello from server!" });
})

route.get('/add-user', (req, res) => {
    res.render('add_user')
})

route.get('/update-user', (req, res) => {
    res.render('update_user')
})

//API
route.post('/api/user/createuser', ControleDeUsuario.create)
route.get('/api/user/getusers', ControleDeUsuario.readAll)
route.get('/api/user/getuser/:id/', ControleDeUsuario.readOne)
route.put('/api/user/updateuser/:id/', ControleDeUsuario.update)
route.delete('/api/user/deleteuser/:id/', ControleDeUsuario.delete)



module.exports = route