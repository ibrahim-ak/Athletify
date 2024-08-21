const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT;

// Import mongoose configuration once
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
require('./router/contact-router')(app); // Link the contact router here

app.listen(port, () => console.log(`Listening on port: ${port}`));
