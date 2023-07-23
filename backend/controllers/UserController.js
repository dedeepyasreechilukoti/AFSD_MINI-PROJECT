const connection = require('../db');

exports.registerUser = (req, res) => {
  const { name, email, password } = req.body;


  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  const values = [name, email, password];

  connection.query(sql, values, (error, result) => {
    if (error) {
      console.error('Error registering user:', error);
      return res.status(500).json({ error: 'Registration failed. Please try again later.' });
    }

    return res.status(201).json({ message: 'User registration successful.' });
  });
};
