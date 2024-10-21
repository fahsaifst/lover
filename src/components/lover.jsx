// src/components/FirstPage.js
import React from "react";
import "./lover.css"; // Import the CSS file for styling

const Lover = () => {
  return (
    <div className="lover-page">
      <img
        src={`${process.env.PUBLIC_URL}/heart-bg.png`}
        alt="bg"
        className="bg-image"
      />
       <img
        src={`${process.env.PUBLIC_URL}/lyrics.png`}
        alt="lyrics"
        className="lyrics-image"
      />
      <img
        src={`${process.env.PUBLIC_URL}/tonnam.png`}
        alt="tonnam"
        className="tonnam-image"
      />
      <img
        src={`${process.env.PUBLIC_URL}/lover.png`}
        alt="lover"
        className="lover"
      />
      <img
        src={`${process.env.PUBLIC_URL}/my.png`}
        alt="my"
        className="my-image"
      />
    </div>
  );
};

export default Lover;
