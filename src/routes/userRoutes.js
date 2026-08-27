const express = require('express');
const router = express.Router();

const {
    listarUsuarios,
    buscarUsuarioPorId,
    cadastrarUsuario,
    atualizarUsuario,
    removerUsuario
} = require('../controllers/userController');

router.get('/', listarUsuarios);

router.get('/:id', buscarUsuarioPorId);

router.post('/', cadastrarUsuario);

router.put('/:id', atualizarUsuario);

router.delete('/:id', removerUsuario);

module.exports = router;