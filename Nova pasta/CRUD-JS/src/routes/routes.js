const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');



router.get('/taferas',taskController.listarUsuarios);

router.get('/tafera/:id',taskController.listarUmUsuario);

router.put('/atualizar/usuario/:id',taskController.atualizarUsuario);

router.delete('/delete/usuario/:id',taskController.deletarUmUsuario);

module.exports = router;