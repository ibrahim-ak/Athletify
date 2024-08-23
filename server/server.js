const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 8000;
const Message = require('./models/message.model');
const Student = require('./models/student.model');
const Group = require('./models/group.model'); // Ensure the correct models are imported

require('./config/mongoose.config');

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
require('./router/contact-router')(app);

const server = app.listen(port, () =>
     console.log(`The server is all fired up on port ${port}`)
);

const io = require("socket.io")(server, {
     cors: {
          origin: "*",
          credentials: true
     }
});

io.on("connection", socket => {
     console.log("New client connected");

     socket.on("join_chat", async data => {
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

               socket.emit("previous_messages_from_server_" + room, previousMessages);

               io.to(room).emit("new_message_from_server_" + room, { username: 'Server', message: `${username} joined the chat` });

          } catch (err) {
               console.error(`Error finding or creating room: ${err}`);
          }
     });

     socket.on("new_message", async data => {
          const { username, room, message } = data;
          console.log(`${username} sent a message to room ${room}: ${message}`);

          io.to(room).emit("new_message_from_server_" + room, { username, message });

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
               console.log(`Message saved to DB`);
          } catch (error) {
               console.error(`Error saving message to DB: ${error}`);
          }
     });

     socket.on("disconnect", () => {
          console.log("Client disconnected");
     });
});
