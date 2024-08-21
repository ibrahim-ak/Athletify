// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/contact-model');

// Route to handle contact form submissions
router.post('/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error sending message', error });
    }
});

module.exports = router;
