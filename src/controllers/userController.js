const { users, generateId } = require('../data/users');

// GET - Listar todos os usuários
const listarUsuarios = (req, res) => {
    return res.status(200).json(users);
};

// GET - Buscar usuário por ID
const buscarUsuarioPorId = (req, res) => {
    const id = parseInt(req.params.id);

    const usuario = users.find(user => user.id === id);

    if (!usuario) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado"
        });
    }

    return res.status(200).json(usuario);
};

// POST - Cadastrar usuário
const cadastrarUsuario = (req, res) => {
    const { nome, email } = req.body;

    // Validação dos campos obrigatórios
    if (!nome || !email) {
        return res.status(400).json({
            error: "Os campos nome e email são obrigatórios."
        });
    }

    const novoUsuario = {
        id: generateId(),
        nome,
        email
    };

    users.push(novoUsuario);

    return res.status(201).json({
        data: novoUsuario
    });
};

// PUT - Atualizar usuário
const atualizarUsuario = (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, email } = req.body;

    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado"
        });
    }

    users[index] = {
        id,
        nome,
        email
    };

    return res.status(200).json(users[index]);
};

// DELETE - Remover usuário
const removerUsuario = (req, res) => {
    const id = parseInt(req.params.id);

    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado"
        });
    }

    users.splice(index, 1);

    return res.status(204).send();
};

module.exports = {
    listarUsuarios,
    buscarUsuarioPorId,
    cadastrarUsuario,
    atualizarUsuario,
    removerUsuario
};