require('./config/mongoose.config');

const express = require("express");
const cors = require('cors');
const Message = require('./models/message.model');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(8000, () =>
  console.log("The server is all fired up on port 8000")
);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    credentials: true
  }
});

io.on("connection", socket => {
  console.log("New client connected");

  // Handle new messages
  socket.on("new_message", async data => {
    const { username, room, message } = data;
    console.log(`${username} sent a message to room ${room}: ${message}`);

    // Notify other users in the room
    socket.broadcast.emit("new_message_from_server_" + room, { username, message });

    try {
      // Store the new message in the database
      const newData = { username: username, message: message };
      await Message.findOneAndUpdate(
        { room: room },
        { $push: { messages: newData } },
        { new: true } // Option to return the updated document
      );
      console.log(`Message saved to DB`);
    } catch (error) {
      console.error(`Error saving message to DB: ${error}`);
    }
  });

  // Handle user joining a chat room
  socket.on("join_chat", async data => {
    const { username, room } = data;
    console.log(`${username} joined room: ${room}`);

    try {
      // Find the room in the database and retrieve previous messages
      let roomFromDB = await Message.findOne({ room: room });
      if (!roomFromDB) {
        // Create a new room if it doesn't exist
        roomFromDB = await Message.create({ room: room, messages: [] });
        console.log(`Room ${room} not found. Created a new room.`);
        // Send a welcome message
        socket.emit("welcome_new_message_from_server_" + room, [{ message: "Welcome to the chat!" }]);
      } else {
        // Retrieve previous messages from the room
        const messages = roomFromDB.messages;
        console.log(`Sending previous messages to ${username} in room ${room}.`);

        // Send the chat history to the user who just joined
        socket.emit("previous_messages_from_server_" + room, messages);
      }

      // Send a notification that the user has joined
      socket.broadcast.emit("new_message_from_server_" + room, { username: 'Server', message: `${username} Joined the chat` });
    } catch (err) {
      console.error(`Error finding or creating room: ${err}`);
    }
  });

  // Handle client disconnection
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
