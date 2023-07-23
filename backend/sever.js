const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3000; // Replace with your desired port number

// Connect to MySQL
const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'Dedeepya', 
  password: 'npci@123', 
  database: 'npci' 
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL:', error);
  } else {
    console.log('Connected to MySQL');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
});
