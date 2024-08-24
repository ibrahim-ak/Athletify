const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 8000;
const Message = require('./models/message.model');
const Student = require('./models/student.model');
const Group = require('./models/group.model');

require('./config/mongoose.config'); // Ensure your Mongoose configuration is correct

// Configure CORS to allow external connections
app.use(cors({
     origin: ['http://192.168.28.165:3000', 'http://localhost:3000'],
     credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import and use routers
require('./routes/announcement.route')(app);
require('./routes/group.route')(app);
require('./routes/news.route')(app);
require('./routes/admin.route')(app);
require('./routes/academy.route')(app);
require('./routes/student.route')(app);
require('./router/contact-router')(app); // Ensure correct path and naming

// Serve the chat page or handle JSON response
app.get('/chat/:id', (req, res) => {
     const chatRoomId = req.params.id;
     res.json({ chatRoomId });
});

// Start the server and listen on all network interfaces (0.0.0.0) to allow external access
const server = app.listen(port, '0.0.0.0', () => {
     console.log(`The server is all fired up on port ${port}`);
});

// Set up Socket.io with proper CORS settings
const io = require('socket.io')(server, {
     cors: {
          origin: ['http://192.168.28.165:3000', 'http://localhost:3000'],
          credentials: true
     }
});

io.on('connection', socket => {
     console.log('New client connected');

     socket.on('join_chat', async data => {
          const { username, room } = data;
          console.log(`${username} joined room: ${room}`);

          socket.join(room);

          try {
               let roomFromDB = await Message.findOne({ group: room }).populate('messages.student', 'username');
               if (!roomFromDB) {
                    roomFromDB = await Message.create({ group: room, messages: [] });
                    console.log(`Room ${room} not found. Created a new room.`);
               }

               const previousMessages = roomFromDB.messages.map(msg => ({
                    username: msg.student.username,
                    message: msg.message
               }));

               socket.emit('previous_messages_from_server_' + room, previousMessages);

               io.to(room).emit('new_message_from_server_' + room, { username: 'Server', message: `${username} joined the chat` });

          } catch (err) {
               console.error(`Error finding or creating room: ${err}`);
          }
     });

     socket.on('new_message', async data => {
          const { username, room, message } = data;
          console.log(`${username} sent a message to room ${room}: ${message}`);

          io.to(room).emit('new_message_from_server_' + room, { username, message });

          try {
               const student = await Student.findOne({ username });
               if (!student) {
                    console.error(`Student with username ${username} not found`);
                    return;
               }

               const newMessage = { student: student._id, message };
               await Message.findOneAndUpdate(
                    { group: room },
                    { $push: { messages: newMessage } },
                    { new: true }
               );
               console.log('Message saved to DB');
          } catch (error) {
               console.error(`Error saving message to DB: ${error}`);
          }
     });

     socket.on('disconnect', () => {
          console.log('Client disconnected');
     });
});