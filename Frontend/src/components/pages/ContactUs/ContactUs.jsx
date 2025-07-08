import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    alert('Thank you! Your message has been sent.');
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1 className="hero-title">We’d Love to Hear From You!</h1>
        <p className="hero-subtitle">
          Whether you have a question, feedback, or a business inquiry, our team is here to help.
        </p>
      </section>

      {/* Contact Information */}
      <section className="contact-info">
        <div className="info-item">
          <FaPhoneAlt className="info-icon" />
          <h3>Call Us</h3>
          <p>+1 234 567 890</p>
        </div>
        <div className="info-item">
          <FaEnvelope className="info-icon" />
          <h3>Email Us</h3>
          <p>vinayrai@agromarket.com</p>
        </div>
        <div className="info-item">
          <FaMapMarkerAlt className="info-icon" />
          <h3>Visit Us</h3>
          <p>123 Main Street, Gurgaon, India</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form">
        <h2 className="form-heading">Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              className="form-textarea"
              rows="5"
              placeholder="Write your message"
              required
            />
          </div>
          <button type="submit" className="form-button">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
