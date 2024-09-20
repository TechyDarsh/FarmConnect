import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use React Router for navigation
import '../styles/Farmer.css'; 
import homeIcon from '../assets/home-icon.webp';
import transactionIcon from '../assets/credit-card-icon.webp';
import chatIcon from '../assets/chat.webp';
import deliveryIcon from '../assets/delivery-truck-icon.webp';
import cropIcon from '../assets/crop.jpg';

const Farmer = () => {
  const [cropName, setCropName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [fertilizersUsed, setFertilizersUsed] = useState(false);
  const [priceRange, setPriceRange] = useState(10);

  const navigate = useNavigate(); // React Router navigation hook

  // Event handlers for button clicks
  const handleHomeClick = () => {
    navigate('/home'); // Navigate to Home route
  };

  const handleTransactionClick = () => {
    navigate('/transaction'); // Navigate to Transaction/Inventory route
  };

  const handleChatClick = () => {
    navigate('/chat'); 
  };

  const handleDeliveryClick = () => {
    navigate('/delivery'); // Navigate to Delivery route
  };

  return (
    <div className="farmer-container">
      <header className="farmer-header">
        <h1>FarmConnect</h1>
        <div className="profile-icon">
          <img src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" alt="Profile Icon" />
        </div>
      </header>

      <div className="crop-info-container">
        <h2 className="crop-info-title">Crop Information</h2>
        <div className="crop-image-container">
          <img src={cropIcon} alt="Crop Icon" className="crop-image" />
        </div>
        <div className="crop-info">
          <p><strong>Crop Name:</strong> {cropName || "N/A"}</p>
          <p><strong>Availability:</strong> {quantity ? `${quantity} kg` : "Not specified"}</p>
        </div>
      </div>

      <div className="crop-details">
        <h2>Enter Crop Details</h2>
        <input
          type="text"
          placeholder="Crop Name"
          value={cropName}
          onChange={(e) => setCropName(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Quantity (kg)"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="input-field"
        />

        <label className="fertilizer-checkbox">
          <input
            type="checkbox"
            checked={fertilizersUsed}
            onChange={(e) => setFertilizersUsed(e.target.checked)}
          />
          Fertilizers Used
        </label>

        <h3>Price Range (per kg)</h3>
        <input
          type="range"
          min="0"
          max="200"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="price-slider"
        />
        <p>{priceRange} Rupees</p>
      </div>

      <footer className="farmer-footer">
        <button className="footer-button" onClick={handleHomeClick}>
          <img src={homeIcon} alt="Home" className="footer-icon" />
        </button>
        <button className="footer-button" onClick={handleTransactionClick}>
          <img src={transactionIcon} alt="Inventory" className="footer-icon" />
        </button>
        <button className="footer-button" onClick={handleChatClick}>
          <img src={chatIcon} alt="Chat" className="footer-icon" />
        </button>
        <button className="footer-button" onClick={handleDeliveryClick}>
          <img src={deliveryIcon} alt="Delivery" className="footer-icon" />
        </button>
      </footer>
    </div>
  );
};

export default Farmer;
