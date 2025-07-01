import React, { useState } from "react";
import "../styles/Contact.css";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

import { BiBorderRadius } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!" + JSON.stringify(form));
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Feel free to reach out</p>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>vipul.uplana51@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>(+91) 9904629068</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Ahmedabad, India</span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <input id="name" onChange={handleChange} value={form.name} placeholder="Your Name" required />
            <input id="email" type="email" onChange={handleChange} value={form.email} placeholder="Your Email" required />
            <textarea id="message" onChange={handleChange} value={form.message} placeholder="Your Message" required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
         <div className="social-icons">
              <a href="#"><i><FaGithub/></i></a>
              <a href="#"> <i><IoLogoLinkedin style={BiBorderRadius} /></i></a>
              <a href="#"><i><FaTwitter /></i></a>
              <a href="#"><i ><FaInstagram/></i></a>
          </div>
      </div>
    </section>
  );
};

export default Contact;
