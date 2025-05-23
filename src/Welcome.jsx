import React from "react";
import "./App.css";

const Welcome = () => {
  return (
    <div id="home" className="welcome-section">
      <div className="welcome-text">
        <h1 className="animated-text">Welcome to My Portfolio</h1>
        <div className="highlighted-text">
           I am M. Pooja, Student,Frontend Developer 💻
        </div>
        <a 
          href="mailto:your-email@example.com?subject=Hiring%20Inquiry&body=Hello%20Pooja,%20I%20would%20like%20to%20hire%20you%20for%20a%20project."
          className="hire-btn"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default Welcome;
