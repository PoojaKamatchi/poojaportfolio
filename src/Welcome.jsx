import React from "react";
import "./App.css";

const Welcome = () => {
  return (
    <div id="home" className="welcome-section">
      <div className="welcome-text">
        <h1 className="animated-text">Welcome to My Portfolio</h1>
        <div className="highlighted-text">
          Hey, I am M. Pooja, Fullstack Developer 💻
        </div>
        <a href="mailto:your-email@example.com" className="hire-btn">Hire Me</a>
      </div>
    </div>
  );
};

export default Welcome;

