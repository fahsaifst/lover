// src/components/FirstPage.js
import React from "react";
import { useNavigate } from 'react-router-dom';
import "./welcoming.css"; // Import the CSS file for styling



const Welcoming = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/sorry'); // Navigate to the next page
  };

  return (
    <div className="welcoming-page">
      <img
        src={`${process.env.PUBLIC_URL}/heart.png`}
        alt="To My Lover"
        className="heart-image"
      />
      <img
        src={`${process.env.PUBLIC_URL}/tomy.png`}
        alt="To My Lover"
        className="tomy-image"
      />
      <img
        src={`${process.env.PUBLIC_URL}/lover.png`}
        alt="To My Lover"
        className="lover-image"
      />
      <button className="next-button" onClick={handleClick}>
        tap here to continue
      </button>
    </div>
  );
};

export default Welcoming;
