require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const app = require('./app'); // Importa a instância do Express configurada em app.js
const port = process.env.PORT || 3000; // Define a porta do servidor, usando a variável de ambiente PORT ou 3000 como padrão

app.listen(port, () => {
    console.log(`Server listening on port ${port}`); // Inicia o servidor e exibe uma mensagem no console
})