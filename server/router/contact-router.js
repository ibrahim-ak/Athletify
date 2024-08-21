// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/contact-model');

// POST route to handle contact form submissions
router.post('/contact', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        const newContact = new Contact({ name, email, phone, message });
        await newContact.save();
        res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error sending message', error });
    }
});

// GET route to fetch all contact messages
router.get('/contacts', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching messages', error });
    }
});

module.exports = (app) => {
    app.use('/api', router); // Prefix routes with '/api'
};
