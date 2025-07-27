// Arquivo: prompt-controller.js (Versão corrigida e moderna)

/*
 * 1. IMPORTAÇÃO CORRETA:
 * Nós importamos o NOSSO serviço, que já tem a chave da API e sabe como 
 * chamar a OpenAI. O nome do arquivo pode ser 'openai.js' ou 'openaiService.js',
 * e ele deve estar na pasta 'models' ou 'services'.
 *
 * NOTE: Vi que no seu código antigo você usava '../config/openai'. 
 * Aponte para o arquivo de serviço que corrigimos, onde quer que ele esteja.
 * O caminho mais comum seria '../models/openai.js'.
 */
const InputPrompt = require('../models/input-prompt'); // Importa a classe InputPrompt do modelo
const openaiService = require('../config/openai.js');

// Exportamos o objeto com a função 'sendText'
module.exports = {
  // A função é 'async' para podermos usar 'await' e esperar a resposta da API
  async sendText(req, res) {
    try {
      // 2. PEGAR O PROMPT:
      // O prompt enviado pelo frontend vem no corpo (body) da requisição.
      const { prompt } = req.body;

      // 3. CHAMAR O SERVIÇO:
      // Chamamos a função 'generateText' do nosso serviço, passando o prompt.
      // Toda a complexidade da API está escondida dentro desta função.
      // Usamos 'await' para esperar a resposta.
      const responseData = await openaiService.generateText({ prompt });

      // 4. ENVIAR RESPOSTA DE SUCESSO:
      // Se a linha acima funcionou, enviamos a resposta de volta para o frontend.
      // O status 200 significa que deu tudo certo.
      // (Corrigi o erro de digitação de "sucess" para "success").
      return res.status(200).json({
        success: true,
        data: responseData,
      });

    } catch (error) {
      // 5. LIDAR COM ERROS:
      // Se qualquer coisa no bloco 'try' der errado, o código pula para cá.
      console.error('Erro no controller:', error); // Mostra o erro no terminal do servidor.

      // Enviamos uma mensagem de erro genérica para o frontend.
      // O status 500 indica um erro no servidor.
      return res.status(500).json({
        success: false,
        error: 'Houve uma falha ao processar a requisição.',
      });
    }
  },
};