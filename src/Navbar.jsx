import React, { useState, useEffect } from "react";


const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">Portfolio</div>
      <div className="nav-right">
        <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
          Projects
        </button>
        <button onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}>
          Skills
        </button>
        <button onClick={() => document.getElementById("education")?.scrollIntoView({ behavior: "smooth" })}>
          Education
        </button>
        <button onClick={() => document.getElementById("activities")?.scrollIntoView({ behavior: "smooth" })}>
          Activities
        </button>
        <button onClick={toggleTheme}>
          {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
