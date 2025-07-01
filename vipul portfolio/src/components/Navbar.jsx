import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Default: dark

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  // Apply class to <body> on theme change
  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="logo">VIPUL CHAUDHARY</div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a
            href="/vipul chaudhary.pdf"
            download="Vipul Chaudhary.pdf"
            className="resume-btn"
          >
            Resume
          </a>
        </li>
        <li>
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {darkMode ? "🌞 Light" : "🌙 Dark"}
          </button>
        </li>
      </ul>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
