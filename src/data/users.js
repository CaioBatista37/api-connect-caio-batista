// Simulação de persistência de usuários em memória
const users = [
    {
        id: 1,
        nome: "João Silva",
        email: "joao@email.com"
    },
    {
        id: 2,
        nome: "Maria Souza",
        email: "maria@email.com"
    }
];

// Controle para geração de IDs incrementais
let nextId = 3;

// Retorna o próximo ID disponível e incrementa o contador
const generateId = () => {
    return nextId++;
};

module.exports = {
    users,
    generateId
};