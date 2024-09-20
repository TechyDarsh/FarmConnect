import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../styles/TransactionPage.css';
import tomato from '../assets/tomato.jpg';
import corn from '../assets/corn.jpg';
import spinach from '../assets/spinach.jpg';
import straw from '../assets/straw.jpg';
import lettuce from '../assets/lettuce.webp';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TransactionPage = () => {
  const [selectedCrop, setSelectedCrop] = useState('Lettuce'); // Default selected crop
  const [csvData, setCsvData] = useState([]);

  // Simulate the CSV data for the year 2023 with prices
  const generateMockData = () => {
    return [
      ['January', '45'],
      ['February', '48'],
      ['March', '50'],
      ['April', '47'],
      ['May', '46'],
      ['June', '50'],
      ['July', '49'],
      ['August', '50'],
      ['September', '48'],
      ['October', '47'],
      ['November', '50'],
      ['December', '49'],
    ];
  };

  // Load mock data on component mount
  useEffect(() => {
    const data = generateMockData();
    setCsvData(data);
  }, []);

 
  const chartData = {
    labels: csvData.map(row => row[0]), // Months
    datasets: [
      {
        label: `Price of ${selectedCrop} (₹)`,
        data: csvData.map(row => parseFloat(row[1])), 
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const handleCropChange = (e) => {
    setSelectedCrop(e.target.value);
  };

  return (
    <div className="transaction-container">
      
      <div className="transaction-status">
        <h2>Transaction Status</h2>
        <div className="crop-status">
          <img src={lettuce} alt="Lettuce" className="crop-image" />
          <div>Lettuce - <span className="status completed">Completed - </span> 50KG (2000₹) - <sold style={{ fontWeight: 'bold', color: 'black' }}>
              sold to @McDonalds
            </sold></div>
        </div>
        <div className="crop-status">
          <img src={tomato} alt="Tomatoes" className="crop-image" />
          <div>Tomatoes - <span className="status pending">Pending - </span> 200KG (4000₹)- <sold style={{ fontWeight: 'bold', color: 'black' }}>
              sold to @kissanindia
            </sold></div>
        </div>
        <div className="crop-status">
          <img src={corn} alt="Corn" className="crop-image" />
          <div>Corn - <span className="status due">Due Tomorrow - </span>  200KG (2000₹) - <sold style={{ fontWeight: 'bold', color: 'black' }}>
              sold to @ActivePopcorn
            </sold></div>
        </div>
        <div className="crop-status">
          <img src={spinach} alt="Spinach" className="crop-image" />
          <div>Spinach - <span className="status due-monday">Due Monday - </span> 50KG (2500₹) - <sold style={{ fontWeight: 'bold', color: 'black' }}>
              sold to @NaturalForm
            </sold></div>
        </div>
        <div className="crop-status">
          <img src={straw} alt="Strawberries" className="crop-image" />
          <div>Strawberries - <span className="status pending">Pending -   </span>25KG (5000₹) - <sold style={{ fontWeight: 'bold', color: 'black' }}>
                 sold to @JuiceWorld
            </sold></div>
        </div>
      </div>
          
   
      <div className="crop-selection">
        <h2>Select Crop</h2>
        <select value={selectedCrop} onChange={handleCropChange}>
          <option value="Lettuce">Lettuce</option>
          <option value="Tomatoes">Tomatoes</option>
          <option value="Corn">Corn</option>
          <option value="Spinach">Spinach</option>
          <option value="Strawberries">Strawberries</option>
        </select>
      </div>

      
      <div className="price-trends">
        <h2>Price Trends for {selectedCrop} (2023)</h2>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default TransactionPage;
