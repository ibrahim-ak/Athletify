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
require('./routes/new.route')(app);
// require('./routes/user.route')(app);
app.listen(port, () => console.log(`Listening on port: ${port}`));