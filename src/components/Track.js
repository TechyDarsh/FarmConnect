import React, { useState } from 'react';
import '../styles/Track.css'; 
import tomato from '../assets/tomato.jpg';
import corn from '../assets/corn.jpg';
import spinach from '../assets/spinach.jpg';
import straw from '../assets/straw.jpg';
import lettuce from '../assets/lettuce.webp';

const Track = () => {
  const [selectedCrop, setSelectedCrop] = useState('Lettuce');

  // Define the status for each crop
  const statuses = {
    Lettuce: 'Order Given to Delivery Partner',
    Tomatoes: 'Payment Received',
    Corn: 'Reached Warehouse',
    Spinach: 'Dispatched',
    Strawberries: 'Out for Delivery',
  };

  // Define the status options
  const statusOptions = [
    'Order Given to Delivery Partner',
    'Payment Received',
    'Reached Warehouse',
    'Dispatched',
    'Out for Delivery',
    'Delivered',
  ];

  // Define colors for status
  const statusColors = {
    'Order Given to Delivery Partner': '#FFD700', // Gold
    'Payment Received': '#32CD32', // Lime Green
    'Reached Warehouse': '#1E90FF', // Dodger Blue
    'Dispatched': '#FFA500', // Orange
    'Out for Delivery': '#FF6347', // Tomato
    'Delivered': '#4CAF50', // Green
  };

  // Define crop images
  const cropImages = {
    Lettuce: lettuce,
    Tomatoes: tomato,
    Corn: corn,
    Spinach: spinach,
    Strawberries: straw,
  };
  

  const handleCropChange = (e) => {
    setSelectedCrop(e.target.value);
  };

  // Determine which statuses are completed or active
  const getStatusClass = (status, index) => {
    const currentStatusIndex = statusOptions.indexOf(statuses[selectedCrop]);
    return index <= currentStatusIndex ? 'status-text active' : 'status-text';
  };

  // Determine the color for the connecting line
  const getStatusLineColor = (status, index) => {
    const currentStatusIndex = statusOptions.indexOf(statuses[selectedCrop]);
    return index < currentStatusIndex ? statusColors[status] : '#ddd';
  };

  return (
    <div className="track-container">
      <h2>Track Your Crop</h2>

      <div className="dropdown-container">
        <select value={selectedCrop} onChange={handleCropChange}>
          <option value="Lettuce">Lettuce</option>
          <option value="Tomatoes">Tomatoes</option>
          <option value="Corn">Corn</option>
          <option value="Spinach">Spinach</option>
          <option value="Strawberries">Strawberries</option>
        </select>
      </div>

      <div className="status-container">
        <h3>Tracking Status for {selectedCrop}</h3>
        <div className="status-progress">
          {statusOptions.map((option, index) => (
            <div key={option} className="status-item">
              <img
                src={cropImages[selectedCrop]}
                alt={selectedCrop}
                className="status-image"
              />
              <div
                className="status-indicator"
                style={{ backgroundColor: statusColors[option] }}
              />
              <span className={getStatusClass(option, index)}>
                {option}
              </span>
              {index < statusOptions.length - 1 && (
                <div
                  className="status-line"
                  style={{ backgroundColor: getStatusLineColor(option, index) }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Track;
