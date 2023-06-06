import React, { useState } from 'react';
import axios from 'axios';

const IA = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [userMessage, setUserMessage] = useState('');

  const handleUserMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    try {
      const response = await axios.post('http://localhost:3000/chat', { messages: [{ content: userMessage }] });
      console.log(response)

      const botMessage = response.data.choices[0].message.content;
      setMessages(botMessage);
      setUserMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className='flex bg-rojo justify-center'>
      <input type="text" value={userMessage} onChange={handleUserMessageChange} />
      <button onClick={handleSendMessage}>Send</button>
      </div>
      <div className='flex bg-primaryGreen justify-center items-center'>
          <div>{messages}</div>
      </div>
    </div>
  );
};

export default IA;
