import React, { useState } from "react";
import Contact from "./Contact";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu after navigation
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">Portfolio</div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>

      <div className={`nav-right ${menuOpen ? "open" : ""}`}>
        <button onClick={() => handleScroll("projects")}>Projects</button>
        <button onClick={() => handleScroll("skills")}>Skills</button>
        <button onClick={() => handleScroll("education")}>Education</button>
       <button onClick={() => handleScroll("activities")}>Activities</button>
         <button onClick={() => handleScroll("contact")}>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
