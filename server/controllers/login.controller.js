const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Student = require('../models/student.model');
const Admin = require('../models/admin.model');
const Academy = require('../models/academy.model'); // Assuming you have this model

// Define a map to easily access models based on user type
const userModels = {
    student: Student,
    admin: Admin,
    academy: Academy
};

module.exports.login = async (req, res) => {
    try {
        const { username, password, role } = req.body;

        if (!userModels[role]) {
            return res.status(400).json({ message: 'Invalid user type' });
        }

        // Find the user by username in the specified schema
        const UserModel = userModels[role];
        const user = await UserModel.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, 'your_jwt_secret_key', { expiresIn: '10h' });

        console.log(`Login successful for ${username} with role: ${user.role}`);

        res.json({
            message: 'Login successful',
            token: token,
            role: user.role
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
