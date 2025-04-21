import React from "react";
import "./App.css";

const data = [
  {
    id: "projects",
    title: "Projects",
    content: [
      "📌 Price Recommendation System - Suggests optimal pricing based on trends.",
      "📌 Money Matters App - Tracks income, expenses, and savings.",
      "📌 Event Website - Showcases schedules and registrations.",
      "📌 Portfolio Website - Displays skills and projects.",
    ],
  },
  {
    id: "skills",
    title: "Skills",
    content: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "HTML & CSS", level: 95 },
    ],
  },
  {
    id: "education",
    title: "Education",
    content: [
      "📌 2022–26: B.E, Angel College of Engineering and Technology",
      "📌 2018–22: Higher Secondary, V. Kallipalayam",
    ],
  },
  {
    id: "activities",
    title: "Activities",
    content: [
      "📌 Workshop at Kongu Engineering College – Cloud Computing",
      "📌 Paper Presentation – Big Data Technologies & Tools",
    ],
  },
];

const Cards = () => {
  return (
    <>
      {data.map((card) => (
        <div
          key={card.id}
          id={card.id}
          className="card-container reveal"
        >
          <div className="card-glass">
            <h2 className="unique-title">{card.title}</h2>
            <div className="card-content">
              {card.id === "skills" ? (
                card.content.map((skill, idx) => (
                  <div key={idx} className="skill-bar">
                    <p className="skill-name">{skill.name}</p>
                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))
              ) : (
                card.content.map((item, idx) => (
                  <div key={idx} className="content-item">
                    <p>{item}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      ))}
      <footer className="footer">
        <div className="social-icons">
          <a href="https://www.instagram.com/poojamurali33" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/PoojaKamatchi" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:poojamuralipooja@248@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://neocities.org/site/murali-902590" target="_blank" rel="noreferrer">
            <i className="fas fa-globe"></i>
          </a>
        </div>
        <p>&copy; 2025 Pooja. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Cards;
