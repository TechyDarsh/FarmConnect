import React from 'react';
import '../styles/RoleSelection.css'; 
import { useNavigate } from 'react-router-dom';

// Import images
import farmerIcon from '../assets/farm-tractor-icon.webp';
import industryIcon from '../assets/factory-pollution-icon.webp';
import customerIcon from '../assets/group-icon.webp';
import wholesalerIcon from '../assets/company-enterprise-icon.webp';

const RoleSelection = () => {
  const navigate = useNavigate();
  
  const handleRoleSelection = (role) => {
    if (role === 'farmer') {
      navigate('/farmer'); 
    }
    else if (role === 'industry'){
      navigate('/industry')
    }
    
  };

  return (
    <div className="role-selection-container">
      <header>
        <h1>FarmConnect</h1>
      </header>
      
      <div className="role-selection">
        <h2>Select Your Role</h2>
        <p>Please choose your role to continue:</p>

        <div className="roles">
          <button 
            className="role-button farmer" 
            onClick={() => handleRoleSelection('farmer')}
          >
            <img src={farmerIcon} alt="Farmer Icon" />
            Farmer (Cultivator)
          </button>

          <button 
            className="role-button industry"
            onClick={() => handleRoleSelection('industry')}
          >
            <img src={industryIcon} alt="Industry Icon" />
            Industry
          </button>

          <button 
            className="role-button customer"
            onClick={() => handleRoleSelection('customer')}
          >
            <img src={customerIcon} alt="Customer Icon" />
            Bulk Orders
          </button>

          <button 
            className="role-button wholesaler"
            onClick={() => handleRoleSelection('wholesaler')}
          >
            <img src={wholesalerIcon} alt="Wholesaler Icon" />
            Wholesaler
          </button>
        </div>
        
        <button className="continue-button">Continue</button>
      </div>
    </div>
  );
};

export default RoleSelection;
