import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      {/* 🔹 Fullscreen Background Video */}
      <video autoPlay muted loop className="bg-video">
        <source src="public/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Main Content on top of video */}
      <div className="content-overlay">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
