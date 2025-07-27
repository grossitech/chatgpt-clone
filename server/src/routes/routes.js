const express = require('express');
const promptController = require('../controllers/prompt-controller'); // Importa o controlador de prompts
const routes = express.Router(); // Cria uma instância do roteador do Express

routes.post('/api/prompt', promptController.sendText); // Define a rota POST para '/api/prompt' que chama o método sendText do controlador

module.exports = routes; // Exporta as rotas para serem usadas no servidor principal

