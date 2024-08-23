import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';

function Chat() {
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { id } = useParams();

  // Establish socket connection
  useEffect(() => {
    const socketIo = io('http://localhost:8000');
    setSocket(socketIo);
    
    return () => {
      if (socketIo) {
        socketIo.disconnect();
      }
    };
  }, []);

  // Handle room joining when socket, username, or room changes
  useEffect(() => {
    if (socket && username && room) {
      socket.emit('join_chat', { username, room });
      setMessages([]); // Clear messages on joining a new room

      // Set up event listeners
      socket.on('previous_messages_from_server_' + room, (msgs) => {
        setMessages(msgs);
      });

      socket.on('new_message_from_server_' + room, (data) => {
        setMessages(prevMessages => [...prevMessages, data]);
      });

      socket.on('welcome_new_message_from_server_' + room, (msg) => {
        setMessages(prevMessages => [msg, ...prevMessages]);
      });
    }

    // Cleanup event listeners when component unmounts or room changes
    return () => {
      if (socket) {
        socket.off('previous_messages_from_server_' + room);
        socket.off('new_message_from_server_' + room);
        socket.off('welcome_new_message_from_server_' + room);
      }
    };
  }, [socket, username, room]);

  // Update room whenever id changes
  useEffect(() => {
    setRoom(id);
  }, [id]);

  const handleSendMessage = () => {
    if (socket && username && room && message.trim()) {
      socket.emit('new_message', { username, room, message });
      setMessage(''); // Clear the input field
    }
  };

  return (
    <div className="Chat">
      <h1>Socket Chat</h1>
      <div>
        <input
          type="text"
          placeholder="Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send Message</button>
      </div>
      <div>
        <h2>Chat Messages:</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}><strong>{msg.username}:</strong> {msg.message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Chat;