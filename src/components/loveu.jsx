// src/components/FirstPage.js
import React from "react";
import { useNavigate } from 'react-router-dom';
import "./loveu.css"; // Import the CSS file for styling

const LovePage = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/lover'); // Navigate to the next page
      };
  return (
    <div className="love-page">
        <img
        src={`${process.env.PUBLIC_URL}/rak.png`}
        alt="rak"
        className="rak-image"
      />
      <button className="pic-button" onClick={handleClick}>
      <img
        src={`${process.env.PUBLIC_URL}/us.png`}
        alt="love"
        className="us-image"
      />
      </button>
      
      <img
        src={`${process.env.PUBLIC_URL}/heart.png`}
        alt="heart"
        className="heart-image"
      />
      <p className="text">ตั้งใจอ่านหนังสือนะ เราเป็นกำลังใจให้</p>
      <p className="text2">กดที่รูปสิ</p>
    </div>
  );
};

export default LovePage;
