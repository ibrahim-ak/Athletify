import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { Grid, Box, TextField, Button, List, ListItem, Typography, Paper } from '@mui/material';
// import StaticNavBar from './StaticNavBar';
import UpdateIcon from '@mui/icons-material/Update'; // Import the Update icon
import IconButton from '@mui/icons-material/Update'; // Import the Update icon
import TrainingTimeForm from './TrainingTimeForm'; // Import the TrainingTimeForm component
import axios from 'axios';

function AcademyChat() {
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [studentsList, setStudentsList] = useState([]);
  const { id } = useParams(); // Extract the room ID from the URL
  const messagesEndRef = useRef(null);

  // State to handle the TrainingTimeForm dialog visibility
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [trainingTimes, setTrainingTimes] = useState([]); // State for the current training times
  const [trainingTimess, setTrainingTimess] = useState([]); // State for the current training times

  // Function to open the dialog
  const handleOpenDialog = () => {
    // Fetch current training times if needed here
    setIsDialogOpen(true);
  };

  // Function to close the dialog
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  useEffect(() => {
    getTime();
  }, [trainingTimes]);

  const getTime = () => {
    axios.get('http://localhost:8000/api/group/' + id)
      .then(res => {
        setTrainingTimess(res.data.group.trainingTimes);
      });
  };

  useEffect(() => {
    getStudents();
  },[] );

  const getStudents = () => {
    axios.get('http://localhost:8000/api/student/group/' + id)
      .then(res => {
        setStudentsList(res.data.student);
        console.log(res.data.student);
      });
  };
  
 

  

  useEffect(() => {
    // Initialize the socket connection
    const socketIo = io('http://:8000');
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
      {/* <StaticNavBar /> */}
      <Grid container spacing={8} sx={{ padding: 2, height: '90vh', width: '200vh', marginTop:'-30px'}}>
        {/* Left Column - User Input and Students List */}
        <Grid item xs={3} sx={{ height: '100%', }}>
          <Paper elevation={3} sx={{ padding: 2, height: '100%', display: 'flex', flexDirection: 'column', marginLeft: '60px' }}>
            {/* <TextField
              fullWidth
              variant="outlined"
              label="Your Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ marginBottom: 2 }}
            /> */}
            <Typography variant="h6">Students List</Typography>
            <List sx={{ flexGrow: 1, overflowY: 'auto' }}>
              {studentsList.map((student) => (
                <ListItem key={student._id}>{student.username}</ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Middle Column - Group Name and Chat Box */}
        <Grid item xs={6} sx={{ height: '100%' }}>
          <Paper elevation={3} sx={{ padding: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>

           

              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Group Name

              </Typography>

              

        

            <Box sx={{ flexGrow: 1, overflowY: 'auto', padding: 1, borderRadius: 2, border: '1px solid #ccc' }}>
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

        {/* Right Column - Time Schedule */}
        <Grid item xs={3} sx={{ height: '100%' }}>
          <Paper elevation={3} sx={{ padding: 4, height: '100%', display: 'flex', flexDirection: 'column'}}>
            <Box sx={{ marginBottom:4 }}>

            <Typography variant="h6">Time Schedule<IconButton sx={{ color: 'rgb(250, 132, 25)', marginLeft:'35px', cursor:'pointer'}} onClick={handleOpenDialog}>
                <UpdateIcon />
              </IconButton>
              </Typography>
            </Box>
            
            <Typography variant="body1" sx={{ marginTop: 2, overflowY: 'auto', flexGrow: 1 }}>
  {trainingTimess.map((time, index) => (
    <span key={index}>
      <strong>{time.day}</strong> {/* Bold the day for emphasis */}
      <div>{`${time.start} - ${time.end}`}</div> {/* Place the time range on a new line */}
      <br />
    </span>
  ))}
</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Add TrainingTimeForm Component */}
      <TrainingTimeForm
        open={isDialogOpen}
        onClose={handleCloseDialog}
        thisid={id}
        setTimes={setTrainingTimes}
        timess={trainingTimess}
      />
    </>
  );
}

export default AcademyChat;