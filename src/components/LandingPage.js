import React from 'react';
import { Link } from 'react-router-dom';
import './Landingpage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Plant Me</h1>
      <p>Welcome to PlantMe, your one-stop destination for the finest houseplants to bring a touch of nature into your home. At PlantMe, we believe that plants not only beautify your space but also enhance your well-being. Our carefully curated collection features a diverse range of houseplants, from easy-to-care-for succulents to lush, tropical foliage.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
