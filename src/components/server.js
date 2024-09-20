const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const otpGenerator = require('otp-generator');

const app = express();
const PORT = 5000;
const SECRET_KEY = 'your_secret_key'; 

app.use(cors());
app.use(bodyParser.json());

const users = [];
const otpStorage = {};

// Register Route
app.post('/api/register', (req, res) => {
  const { phone, username, password } = req.body;

  
  if (users.find((u) => u.username === username || u.phone === phone)) {
    return res.status(400).json({ success: false, message: 'Username or phone number already exists' });
  }

 
  const otp = otpGenerator.generate(6, { digits: true});
  otpStorage[phone] = { otp, username, password };

  console.log(`Generated OTP for ${phone}: ${otp}`); 

  

  res.json({ success: true, message: 'OTP sent to phone number' });
});


app.post('/api/verify-otp', (req, res) => {
  const { phone, otp } = req.body;

  if (otpStorage[phone] && otpStorage[phone].otp === otp) {
    const { username, password } = otpStorage[phone];
    users.push({
      username,
      phone,
      password: bcrypt.hashSync(password, 8),
    });
    delete otpStorage[phone];
    res.json({ success: true, message: 'Registration successful' });
  } else {
    res.status(400).json({ success: false, message: 'Invalid OTP' });
  }
});


app.post('/api/login', (req, res) => {
  const { identifier, password } = req.body;

  const user = users.find((u) => u.username === identifier || u.phone === identifier);

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ id: user.username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
