const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Student = require('../models/student.model');
const Admin = require('../models/admin.model');
const Academy = require('../models/academy.model');


module.exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Attempt to find the user across all models
        const userTypes = [
            { model: Student, role: 'student' },
            { model: Admin, role: 'admin' },
            { model: Academy, role: 'academy' }
        ];

        let user = null;
        let userType = null;

        // Iterate through user types and try to find the user
        for (const userTypeObject of userTypes) {
            user = await userTypeObject.model.findOne({ username });
            if (user) {
                userType = userTypeObject.role;
                break;
            }
        }

        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id, role: userType }, 'your_jwt_secret_key', { expiresIn: '10h' });

        console.log(`Login successful for ${username} with role: ${userType}`);

        res.json({
            message: 'Login successful',
            token: token,
            role: userType,
            userId: user._id,
            userusername: user.username,
            
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
