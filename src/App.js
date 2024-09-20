import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import RoleSelection from './components/RoleSelection';
import Farmer from './components/Farmer';
import TransactionPage from './components/TransactionPage';
import Track from './components/Track';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/farmer" element={<Farmer />} />
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="/delivery" element={<Track />} />
      </Routes>
    </Router>
  );
}

export default App;
