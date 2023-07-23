import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    balance: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.balance) {
      alert("Please fill in all required fields.");
      return;
    }

    axios.post('/register', formData)
      .then(response => {
        alert("Registration successful!");
      })
      .catch(error => {
        alert("Registration failed. Please try again later.");
        console.error("Error:", error);
      });
  };

  return (
    <div class="container">
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      <br /><br></br>

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      <br /><br></br>

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
      <br /><br></br>

      <label htmlFor="balance">e₹ balance:</label>
      <input type="balance" id="balance" name="balance" value={formData.balance} onChange={handleChange} required />
      <br /><br></br>
      
      <button type="submit">Register</button>
    </form>
    </div>
  );
};

export default RegistrationForm;
