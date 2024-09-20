import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Register.css';

const Register = () => {
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        phone,
        username,
        password,
      });

      if (response.data.success) {
        alert(response.data.message);
        setStep(2);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/verify-otp', {
        phone,
        otp,
      });

      if (response.data.success) {
        alert(response.data.message);
        // Redirect to login page or handle successful registration
        window.location.href = '/login';
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      {step === 1 ? (
        <div className="register-form">
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="register-input"
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="register-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="register-input"
          />
          <button onClick={handleRegister} className="register-button">
            Register
          </button>
        </div>
      ) : (
        <div className="otp-form">
          <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="otp-input"
                 />
          <button onClick={handleVerifyOtp} className="otp-button">
            Verify OTP
          </button>
        </div>
      )}
    </div>
  );
};

export default Register;
