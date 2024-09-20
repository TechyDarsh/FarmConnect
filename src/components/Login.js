import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'

const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async () => {
    try {
      // Check if the credentials are 'admin'
      if (identifier === 'admin' && password === 'admin') {
        alert("Admin login successful!");
        navigate('/role-selection'); // Redirect to RoleSelection page for Admin
        return;
      }

      
      const response = await axios.post('http://localhost:5000/api/login', {
        identifier,
        password,
      });

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        alert("Login successful!");
        navigate('/role-selection'); 
      } else {
        alert("Invalid credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <img 
  className="logo" 
  src={logo} 
  alt="Logo" 
/>

      <div className="login-form-container">
        <div className="login-form">
          <h2>LOGIN</h2>
          <input
            type="text"
            placeholder="Username or Phone Number"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button onClick={handleLogin} className="login-button">
            Login
          </button>
          <div className="register-link">
            <a href="/register">Don't have an account? Register here.</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
