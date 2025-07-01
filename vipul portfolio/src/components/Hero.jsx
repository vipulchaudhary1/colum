import React from "react";
import "../styles/Hero.css";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

import { BiBorderRadius } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";


const Hero = () => {
  return (
    <div className="video-background">
      
       
      <div className="hero-content">
        <h1>Hi, I'm VIPUL CHAUDHARY</h1>
        <h2>Frontend Developer</h2>
        <p>I build exceptional digital experiences</p>

        <div className="social-icons">
          <a href="#"><i><FaGithub/></i></a>
          <a href="#"> <i><IoLogoLinkedin style={BiBorderRadius} /></i></a>
          <a href="#"><i><FaTwitter /></i></a>
          <a href="#"><i ><FaInstagram/></i></a>
        </div>
      </div>
    </div>
  );
};

export default Hero;