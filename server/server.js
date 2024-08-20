const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();
const port = process.env.PORT;
require('./config/mongoose.config'); // This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./routes/announcement.route')(app);
require('./routes/group.route')(app);
require('./routes/news.route')(app);
require('./routes/admin.route')(app);
require('./routes/academy.route')(app);
require('./routes/student.route')(app);
app.listen(port, () => console.log(`Listening on port: ${port}`));