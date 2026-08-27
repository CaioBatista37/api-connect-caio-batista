# API Connect

API REST simples para gerenciamento de usuarios, criada com Node.js e Express. O projeto simula uma base de dados em memoria usando um array local, permitindo praticar operacoes CRUD e padronizacao de respostas JSON.

## Objetivo

A API Connect tem como objetivo disponibilizar endpoints para cadastrar, listar, buscar, atualizar e remover usuarios. Ela tambem demonstra validacao de entrada em rotas que recebem dados do cliente, evitando o cadastro de usuarios sem informacoes obrigatorias como 'nome' e 'email'.

## Tecnologias utilizadas

- Node.js
- Express
- Nodemon
- JSON

## Como executar localmente

1. Acesse a pasta do projeto:


cd C:\Users\caio.sa\api-connect


2. Instale as dependencias:


npm install


3. Execute a API em modo de desenvolvimento:


npm run dev


Ou execute em modo normal:


npm start


4. Acesse a API em:

text
http://localhost:3000


Ao acessar a rota inicial, a API deve retornar:

json
{
  "mensagem": "API Connect funcionando com sucesso!"
}


## Observacao sobre persistencia

Os dados da API sao armazenados em um array em memoria. Por isso, alteracoes feitas durante a execucao, como cadastros, atualizacoes e exclusoes, sao perdidas quando o servidor e reiniciado.

## Endpoints

### GET /usuarios

Lista todos os usuarios cadastrados.

**Exemplo de requisicao:**

http
GET http://localhost:3000/usuarios


**Resposta de sucesso - 200 OK:**

json
[
  {
    "id": 1,
    "nome": "Joao Silva",
    "email": "joao@email.com"
  },
  {
    "id": 2,
    "nome": "Maria Souza",
    "email": "maria@email.com"
  }
]


### GET /usuarios/:id

Busca um usuario especifico pelo ID.

**Exemplo de requisicao:**

http
GET http://localhost:3000/usuarios/1


**Resposta de sucesso - 200 OK:**

json
{
  "id": 1,
  "nome": "Joao Silva",
  "email": "joao@email.com"
}


**Resposta de erro - 404 Not Found:**

json
{
  "mensagem": "Usuario nao encontrado"
}


### POST /usuarios

Cadastra um novo usuario. Os campos 'nome' e 'email' sao obrigatorios.

**Exemplo de requisicao:**

http
POST http://localhost:3000/usuarios
Content-Type: application/json


**Corpo da requisicao:**

json
{
  "nome": "Ana Lima",
  "email": "ana@email.com"
}


**Resposta de sucesso - 201 Created:**

json
{
  "data": {
    "id": 3,
    "nome": "Ana Lima",
    "email": "ana@email.com"
  }
}


**Resposta de erro - 400 Bad Request:**

json
{
  "error": "Os campos nome e email sao obrigatorios."
}


### PUT /usuarios/:id

Atualiza os dados de um usuario existente.

**Exemplo de requisicao:**

http
PUT http://localhost:3000/usuarios/1
Content-Type: application/json


**Corpo da requisicao:**

json
{
  "nome": "Joao Atualizado",
  "email": "joao.atualizado@email.com"
}


**Resposta de sucesso - 200 OK:**

json
{
  "id": 1,
  "nome": "Joao Atualizado",
  "email": "joao.atualizado@email.com"
}


**Resposta de erro - 404 Not Found:**

json
{
  "mensagem": "Usuario nao encontrado"
}


> Observacao: a validacao de campos obrigatorios deve seguir a mesma regra usada no cadastro, retornando '400 Bad Request' quando 'nome' ou 'email' nao forem enviados.

### DELETE /usuarios/:id

Remove um usuario existente pelo ID.

**Exemplo de requisicao:**

http
DELETE http://localhost:3000/usuarios/1


**Resposta de sucesso - 204 No Content:**

A requisicao e concluida sem corpo de resposta.

**Resposta de erro - 404 Not Found:**

json
{
  "mensagem": "Usuario nao encontrado"
}


## Principais status HTTP

| Status | Significado | Quando ocorre |
| --- | --- | --- |
| 200 OK | Requisicao concluida com sucesso | Listagem, busca ou atualizacao de usuarios |
| 201 Created | Recurso criado com sucesso | Cadastro de novo usuario |
| 204 No Content | Recurso removido com sucesso | Exclusao de usuario |
| 400 Bad Request | Dados invalidos na requisicao | Falta de campos obrigatorios como 'nome' ou 'email' |
| 404 Not Found | Recurso nao encontrado | Usuario inexistente para busca, atualizacao ou exclusao |
