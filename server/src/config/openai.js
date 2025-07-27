// openai.js - Versão Corrigida

// 1. A importação mudou. Importamos apenas a classe principal 'OpenAI'.
const OpenAI = require('openai');

// 2. Criamos uma instância do cliente OpenAI diretamente.
//    Ele automaticamente buscará a chave da variável de ambiente 'OPENAI_API_KEY'.
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Classe exportada com um método estático para gerar o texto
module.exports = class openaiService {
    
    // 3. A função agora é 'async' para poder usar 'await' e realmente chamar a API.
    static async generateText({ prompt }) {
        try {
            const response = await openai.chat.completions.create({
                model: 'gpt-4.1-nano',
                // 4. 'messages' agora é um array de objetos, como a API V4 exige.
                messages: [
                    { role: 'user', content: prompt }
                ],
                max_tokens: 3500, // max_tokens pode ser ajustado conforme a necessidade
                temperature: 0.7,
            });

            // 5. Retornamos o conteúdo da resposta da IA.
            return response.choices[0].message.content;

        } catch (error) {
            console.error("Erro ao chamar a API da OpenAI:", error);
            // Retornamos null ou lançamos o erro para ser tratado no controller
            return null; 
        }
    }
}