// src/components/FirstPage.js
import React from "react";
import { useNavigate } from 'react-router-dom';
import "./firstpage.css"; // Import the CSS file for styling



const FirstPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/welcome'); // Navigate to the next page
  };
  const noClick = () => {
    navigate('/no'); // Navigate to the next page
  };

  return (
    <div className="welcoming-page">
      <img
        src={`${process.env.PUBLIC_URL}/rutonnam.png`}
        alt="To My Lover"
        className="rutonnam-image"
      />
      <button className="yes-button" onClick={handleClick}>
      <img
          src={`${process.env.PUBLIC_URL}/yes.png`}
          alt="Icon"
          className="yes-image"
        />
      </button>
      <button className="no-button" onClick={noClick}>
      <img
          src={`${process.env.PUBLIC_URL}/no.png`}
          alt="Icon"
          className="no-image"
        />
      </button>
    </div>
  );
};

export default FirstPage;
