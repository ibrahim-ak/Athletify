import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { Grid, Box, TextField, Button, List, ListItem, Typography, Paper } from '@mui/material';
import StaticNavBar from './StaticNavBar';

function Chat() {
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { id } = useParams(); // Extract the room ID from the URL
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Initialize the socket connection
    const socketIo = io('http://192.168.28.165:8000'); 
    setSocket(socketIo);

    // Cleanup the socket connection on component unmount
    return () => {
      if (socketIo) {
        socketIo.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (socket && username && room) {
      socket.emit('join_chat', { username, room });
      setMessages([]);

      // Listen for previous messages when joining a room
      socket.on('previous_messages_from_server_' + room, (msgs) => {
        setMessages(msgs);
        scrollToBottom();
      });

      // Listen for new messages from the server
      socket.on('new_message_from_server_' + room, (data) => {
        setMessages((prevMessages) => [...prevMessages, data]);
        scrollToBottom();
      });

      // Listen for welcome message when a new user joins
      socket.on('welcome_new_message_from_server_' + room, (msg) => {
        setMessages((prevMessages) => [msg, ...prevMessages]);
        scrollToBottom();
      });
    }

    // Cleanup event listeners when dependencies change
    return () => {
      if (socket) {
        socket.off('previous_messages_from_server_' + room);
        socket.off('new_message_from_server_' + room);
        socket.off('welcome_new_message_from_server_' + room);
      }
    };
  }, [socket, username, room]);

  useEffect(() => {
    // Set the room based on the URL parameter
    setRoom(id);
  }, [id]);

  const handleSendMessage = () => {
    if (socket && username && room && message.trim()) {
      socket.emit('new_message', { username, room, message });
      setMessage(''); // Clear the message input field after sending
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <StaticNavBar />
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {/* Left Column - User Input and List */}
        <Grid item xs={3}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <TextField
              fullWidth
              variant="outlined"
              label="Your Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Box sx={{ marginTop: 2 }}>
              <Typography variant="h6">Students List</Typography>
              <List>
                {['student1', 'student2', 'student3', 'student4', 'student5', 'student6', 'student7'].map((student, index) => (
                  <ListItem key={index}>{student}</ListItem>
                ))}
              </List>
            </Box>
          </Paper>
        </Grid>

        {/* Right Column - Chat Box */}
        <Grid item xs={9}>
          <Paper elevation={3} sx={{ padding: 2, height: '500px', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6">Group Name</Typography>
            <Box sx={{ flexGrow: 1, overflowY: 'auto', padding: 1, borderRadius: 2 }}>
              <List>
                {messages.map((msg, index) => (
                  <ListItem
                    key={index}
                    sx={{ display: 'flex', justifyContent: msg.username === username ? 'flex-end' : 'flex-start' }}
                  >
                    <Paper
                      elevation={2}
                      sx={{
                        padding: '10px 20px',
                        backgroundColor: msg.username === username ? '#1976d2' : '#e0e0e0',
                        color: msg.username === username ? '#fff' : '#000',
                        borderRadius: 3,
                        maxWidth: '60%',
                      }}
                    >
                      <Typography variant="body2">
                        <strong>{msg.username}:</strong> {msg.message}
                      </Typography>
                    </Paper>
                  </ListItem>
                ))}
                <div ref={messagesEndRef} />
              </List>
            </Box>
            <Box sx={{ display: 'flex', marginTop: 2 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Type a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{ borderRadius: 2 }}
              />
              <Button
                variant="contained"
                onClick={handleSendMessage}
                sx={{ marginLeft: 1, borderRadius: 2, backgroundColor: '#1976d2', color: '#fff' }}
              >
                Send
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Chat;