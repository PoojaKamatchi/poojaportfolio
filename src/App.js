import React, { useEffect, useState } from "react";
import "./App.css";


function App() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      id: "projects",
      title: "My Projects",
      content: [
        "🔹 Building the Price Recommendation for Online Sellers - A system that suggests optimal pricing based on market trends.",
        "🔹 Money Matters: A Personal Finance Management App - Tracks income, expenses, and savings with analytics.",
        "🔹 Event Website - A dynamic site showcasing events, schedules, and registrations.",
        "🔹 Portfolio Website - My personal portfolio displaying skills and projects.",
      ],
    },
    {
      id: "skills",
      title: "My Skills",
      content: [
        { name: "React", level: 90, image: "/react.png" },
        { name: "JavaScript", level: 85, image: "/javascript.png" },
        { name: "Python", level: 80, image: "/python.png" },
        { name: "Java", level: 75, image: "/java.png" },
        { name: "HTML & CSS", level: 95, image: "/htmlcss.png" },
      ],
    },
    {
      id: "education",
      title: "My Education",
      content: [
        "🔹 V. Kallipalayam Higher Secondary School",
        "🔹 BE at Angel College of Engineering and Technology",
      ],
    },
    {
      id: "internship",
      title: "My Internship",
      content: [
        "🔹 Workshop at Kongu Engineering College - Cloud Computing",
        "🔹 Paper Presentation at Hindusthan Engineering College - Big Data Technologies & Tools",
      ],
    },
  ];

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    setTimeout(() => setPageLoaded(true), 500);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById("slider").scrollIntoView({ behavior: "smooth" });
    const index = cards.findIndex((card) => card.id === id);
    if (index !== -1) setCurrentCard(index);
  };

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className={`App ${pageLoaded ? "fade-in" : ""}`}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">Portfolio</div>
        <div className="nav-right">
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("education")}>Education</button>
          <button onClick={() => scrollToSection("internship")}>Internship</button>
        </div>
      </nav>

      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-text">
          <h1 className="animated-text">Welcome to My Portfolio</h1>
          <h2 className="slide-in-text">Hey, I am M. Pooja</h2>
          <h3 className="slide-out-text">I am a Fullstack Developer 💻</h3>
        </div>
        <div className="welcome-image">
          <img src="/Pooja3.jpg" alt="Pooja" className="rotating-image" />
        </div>
      </div>

      {/* Cards Slider Section */}
      <div id="slider" className="slider-container">
        <button className="arrow left" onClick={prevCard}>◀</button>
        <div className="card-container">
          <div className="card">
            <h2 className="unique-title">{cards[currentCard].title}</h2>
            {cards[currentCard].id === "skills" ? (
              cards[currentCard].content.map((skill, index) => (
                <div key={index} className="skill-bar">
                  <img src={skill.image} alt={skill.name} className="skill-image" />
                  <div className="skill-info">
                    <p>{skill.name}</p>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              cards[currentCard].content.map((item, index) => <p key={index}>{item}</p>)
            )}
          </div>
        </div>
        <button className="arrow right" onClick={nextCard}>▶</button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-icons">
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a href="https://neocities.org/site/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/neocities.png" alt="Neocities" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
        <p className="email-text">📧 Email: your-email@example.com</p>
      </footer>
    </div>
  );
}

export default App;
