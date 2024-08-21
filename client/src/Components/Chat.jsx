import { useState, useEffect } from 'react';
import io from 'socket.io-client';

function Chat() {
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Initialize the socket connection
    const socketIo = io('http://localhost:8000'); // Replace with your server URL if different
    setSocket(socketIo);

    // Handle receiving previous messages
    socketIo.on('previous_messages_from_server_' + room, (msgs) => {
      setMessages(msgs);
    });

    // Handle receiving new messages
    socketIo.on('new_message_from_server_' + room, (data) => {
      setMessages(prevMessages => [...prevMessages, data]);
    });

    // Cleanup on component unmount
    return () => {
      socketIo.disconnect();
    };
  }, [room]);

  const handleJoinChat = () => {
    if (socket && username && room) {
      socket.emit('join_chat', { username, room });
      setMessages([]); // Clear messages when joining a new room
    }
  };

  const handleSendMessage = () => {
    if (socket && username && room && message) {
      socket.emit('new_message', { username, room, message });
      setMessage(''); // Clear input field
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
        <input
          type="text"
          placeholder="Room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <button onClick={handleJoinChat}>Join Chat</button>
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
