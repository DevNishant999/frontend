// components/Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="logo-loader-wrapper">
      <div className="logo-glow-wrapper">
        <img
          src="https://qhtwebsite.s3.eu-north-1.amazonaws.com/testimonials/1754486667161_qht-logo-final.png"
          alt="Logo"
          className="logo-img invert"
        />
        <div className="shine"></div>
      </div>
    </div>
  );
};

export default Loader;
