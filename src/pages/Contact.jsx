import React, { useState } from "react";
import { Navbar } from "../components/Navbar/index";
import { Footer } from "../components/Footer";
import {AnimatedCircuitBackground} from "../components/AnimatedCircuitBackground/index"
import {GradientCircuitBoardBackground} from "../components/GradientCircuitBoardBackground/index"
import "../styles/contactuspage.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send data to a server
    alert("Message sent! Thank you for contacting us.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
    <AnimatedCircuitBackground/>
    <div className="contact-us-page">
      <Navbar />
      <h2 className="contact-heading">Contact Us</h2>
      <form className="form-to-contact" onSubmit={handleSubmit}>
        <div className="namepad">
          <div className="for-name">
            <label className="tag-class-contact">Name : </label>
            <input
              className="contact-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="for-name">
            <label className="tag-class-contact">Email : </label>
            <input
              className="contact-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="for-name">
            <label className="tag-class-contact">Message :</label>
            <textarea
              className="contact-input"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            
          </div>
          <div className="for-button">
            <button className="send-to-contact" type="submit">
              Send
            </button>
            </div>
        </div>
      </form>
      <Footer />
    </div>
    </>
  );
};

export default Contact;
