const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 8000;
const Message = require('./models/message.model');
const Student = require('./models/student.model');
const Group = require('./models/group.model'); // Ensure the correct models are imported

require('./config/mongoose.config'); // Ensure your Mongoose configuration is correct

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import and use routers
require('./routes/announcement.route')(app);
require('./routes/group.route')(app);
require('./routes/news.route')(app);
require('./routes/admin.route')(app);
require('./routes/academy.route')(app);
require('./routes/student.route')(app);
require('./router/contact-router')(app); // Fixed the route file name

// Serve the chat page (or send JSON data if using a SPA like React)
app.get('/chat/:id', (req, res) => {
     const chatRoomId = req.params.id;
     // If serving an HTML file, use:
     // res.sendFile(path.join(__dirname, 'path_to_your_chat_page.html'));

     // If using React or another frontend framework, you might send the ID to the frontend:
     res.json({ chatRoomId });
});

const server = app.listen(port, '0.0.0.0', () =>
     console.log(`The server is all fired up on port ${port}`)
);

const io = require('socket.io')(server, {
     cors: {
          origin: ['http://192.168.28.165:3000', 'http://localhost:3000'],
          credentials: true
     }
});

io.on('connection', socket => {
     console.log('New client connected');

     // Handle joining a chat room
     socket.on('join_chat', async data => {
          const { username, room } = data;
          console.log(`${username} joined room: ${room}`);

          socket.join(room); // User joins the specified room

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

               // Send previous messages to the user
               socket.emit('previous_messages_from_server_' + room, previousMessages);

               // Notify others in the room that a new user joined
               io.to(room).emit('new_message_from_server_' + room, { username: 'Server', message: `${username} joined the chat` });

          } catch (err) {
               console.error(`Error finding or creating room: ${err}`);
          }
     });

     // Handle new messages
     socket.on('new_message', async data => {
          const { username, room, message } = data;
          console.log(`${username} sent a message to room ${room}: ${message}`);

          // Broadcast the message to everyone in the room
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

     // Handle disconnection
     socket.on('disconnect', () => {
          console.log('Client disconnected');
     });
});