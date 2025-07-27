const express = require('express'); // Importa o framework Express
const cors = require('cors'); // Importa o middleware CORS
const routes = require('./routes/routes'); // Importa as rotas definidas no arquivo routes.js

const app = express(); // Cria uma instância do Express

app.use(express.json()); // permite receber JSON no body das requisições
app.use(cors()); // sem trava de acesso do CORS
app.use(routes); // usa as rotas definidas no arquivo routes.js

module.exports = app; // Exporta a instância do Express para ser usada em outros arquivos
// O app é configurado para aceitar JSON e CORS, e está pronto para ser usado em outras partes da aplicação.
// O uso do dotenv permite que variáveis de ambiente sejam carregadas, facilitando a configuração
// de credenciais e outras configurações sensíveis sem expor diretamente no código.
// O app pode ser usado para definir rotas, middlewares adicionais e outras configurações necessárias
// para a aplicação Express.
