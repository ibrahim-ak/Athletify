const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const Contact = require('./models/contact-model'); // Ensure this path is correct

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Route to handle GET and POST requests on /contact
app.route('/contact')
  // GET request: Fetch all contact messages
  .get(async (req, res) => {
    try {
      const contacts = await Contact.find(); // Retrieve all contact messages
      res.status(200).json({ success: true, contacts });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error fetching messages', error });
    }
  })
  // POST request: Handle contact form submissions
  .post(async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
      if (!name || !email || !phone || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
      }
      const newContact = new Contact({ name, email, phone, message });
      await newContact.save();
      res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error sending message', error });
    }
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
