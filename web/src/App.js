import { useState } from 'react';

import './styles/App.css';
import './styles/reset.css';

import { makeRequest } from './api/api';
import { SideMenu } from './components/SideMenu/SideMenu';
import { ChatMessage } from './components/ChatMessage/ChatMessage';



function App() {
  const [input, setInput ] = useState("");
  const [chatlog, setChatLog ] = useState([{
    user: "gpt",
    message: "Olá, eu sou o ChatGPT. Como posso ajudar você hoje?"
  }]);

  async function handleSubmit(e) {
    e.preventDefault();

    // Chama a API
    const response = await makeRequest({ prompt: input });

    // Mensagem a ser exibida no chat
    let gptMessage;

    // VERIFICAÇÃO ADICIONADA AQUI!
    // Checa se a resposta e o campo 'data' existem antes de usar o .split()
    if (response && response.data) {
      gptMessage = response.data.split('\n').map((line, index) => <p key={index}>{line}</p>);
    } else {
      // Se não houver dados, cria uma mensagem de erro amigável.
      gptMessage = "Desculpe, não consegui obter uma resposta. Verifique o console do servidor.";
    }

    // Atualiza o chatlog com a mensagem (seja a resposta ou o erro)
    setChatLog([...chatlog, {
      user: 'me',
      message: `${input}`
    },
    {
      user: 'gpt',
      message: gptMessage
    }]);

    setInput("");
  }


  return (
    <div className="App">
      <SideMenu></SideMenu>
      <section className="chatbox">
        <div className ="chat-log">
          {chatlog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}

        </div>
        <div className='chat-input-holder'>
          <form onSubmit={handleSubmit}>
            <input
              rows = "1"
              className='chat-input-textarea'
              value = {input}   
              onChange={(e) => setInput(e.target.value)} 
            />
          </form>
        </div>

      </section>
    </div>
  );
}

export default App;
