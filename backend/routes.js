const express = require('express');
const router = express.Router();
const UserController = require('./controllers/UserController');

// Route for user registration
router.post('/register', UserController.registerUser);

// Add more routes as needed

module.exports = router;
