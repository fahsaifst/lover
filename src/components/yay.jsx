import React from "react";
import "./yay.css";
import { useNavigate } from 'react-router-dom';

const Yay = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/love'); // Navigate to the next page
    };
  return (
    <div className="yay-page">
       <img
        src={`${process.env.PUBLIC_URL}/yay.png`}
        alt="To My Lover"
        className="yay-image"
      />
      <button className="button" onClick={handleClick}>
        มีไรจะบอกอีก กดสิ
      </button>
    </div>
  );
};

export default Yay;
