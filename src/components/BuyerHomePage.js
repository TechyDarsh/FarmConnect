import React from 'react';
import '../styles/BuyerHomePage.css';
import riceseeds from '../assets/riceseed.jpg';
import sweetcorn from '../assets/sweetcorn.jpg';
import lime from '../assets/lime.jpg';
import mango from '../assets/mango.jpg'
 

const BuyerHomePage = () => {
  return (
    <div className="buyer-homepage">
      {/* Top section */}
      <div className="top-section">
        <div className="greeting">
          <h2>Hi Wilson! 👋</h2>
          <p>Enjoy our services!</p>
        </div>
        <div className="notifications">
          {/* Notification icon */}
          <i className="fa fa-bell"></i>
        </div>
      </div>

      {/* Search bar */}
      <div className="search-container">
        <input type="text" placeholder="Search here..." />
        <i className="fa fa-sliders"></i> {/* For the filter icon */}
      </div>

      {/* Free consultation banner */}
      <div className="consultation-banner">
        <p className="consultation-text">Free Consultation</p>
        <p>Get free support from our customer service</p>
        <button className="call-now-btn">Call Now</button>
      </div>

      {/* Featured products */}
      <div className="featured-section">
        <h3>Featured Products</h3>
        <a href="www.contractfarming.netlify.app">See All</a>
      </div>

      <div className="product-grid">
        {/* Product card example */}
        <div className="product-card">
          <img src={riceseeds} alt="Rice Seeds" />
          <p>Rice Seeds</p>
          <p>$15/kg</p>
          <button className="add-btn">+</button>
        </div>

        <div className="product-card">
          <img src={lime} alt="Lime" />
          <p>Lime</p>
          <p>$5/pcs</p>
          <button className="add-btn">+</button>
        </div>

        <div className="product-card">
          <img src={sweetcorn} alt="Rice Seeds" />
          <p>Sweet Corn</p>
          <p>$15/kg</p>
          <button className="add-btn">+</button>
        </div>

        <div className="product-card">
          <img src={mango} alt="Rice Seeds" />
          <p>Mango</p>
          <p>$15/kg</p>
          <button className="add-btn">+</button>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="bottom-nav">
        <button className="nav-btn">Home</button>
        <button className="nav-btn">Services</button>
        <button className="nav-btn">Cart</button>
        <button className="nav-btn">Profile</button>
      </div>
    </div>
  );
};

export default BuyerHomePage;
