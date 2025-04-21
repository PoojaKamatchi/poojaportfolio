import React from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Cards from "./Cards";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Welcome />
      <Cards />
    </div>
  );
}

export default App;
