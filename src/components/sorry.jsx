import React, { useState } from "react";
import "./sorry.css";
import { useNavigate } from "react-router-dom";

const SorryPage = () => {
  const imageSources = [
    `${process.env.PUBLIC_URL}/aplg1.png`,
    `${process.env.PUBLIC_URL}/aplg2.png`,
    `${process.env.PUBLIC_URL}/aplg3.png`, // Add more images as needed
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const acceptClick = () => {
    navigate("/yay"); // Navigate to the next page
  };

  const denyClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
  };

  return (
    <div className="sorry-page">
      <img
        src={`${process.env.PUBLIC_URL}/sorry.png`}
        alt="sorry"
        className="sorry-image"
      />
      <img
        src={imageSources[currentImageIndex]}
        alt="apolgize"
        className="apolgize-image"
      />
      <button className="accept-button" onClick={acceptClick}>
        <img
          src={`${process.env.PUBLIC_URL}/accept.png`}
          alt="Icon"
          className="accept-image"
        />
      </button>
      <button className="deny-button" onClick={denyClick}>
        <img
          src={`${process.env.PUBLIC_URL}/deny.png`}
          alt="Icon"
          className="deny-image"
        />
      </button>
    </div>
  );
};

export default SorryPage;
