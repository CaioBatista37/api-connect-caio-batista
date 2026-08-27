const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Rotas de usuários
app.use('/usuarios', userRoutes);

// Rota inicial para testar se a API está funcionando
app.get('/', (req, res) => {
    res.status(200).json({
        mensagem: 'API Connect funcionando com sucesso!'
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});