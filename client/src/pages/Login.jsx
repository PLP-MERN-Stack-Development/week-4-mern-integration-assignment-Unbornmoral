import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async e => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:5000/api/auth/login', formData);

    // ✅ Step 1 Debug: Log the server response
    console.log('Login response:', res.data);  // ← This line helps us inspect the token structure

    localStorage.setItem('token', res.data.token); // 💾 Save token!
    alert('Logged in!');
  } catch (err) {
    console.error(err);
    alert('Login failed');
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
      <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" />
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
