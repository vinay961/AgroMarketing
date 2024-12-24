import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>AgroMarket</h3>
          <p>
            Connecting farmers and buyers with ease. Explore markets, track demand, and embrace e-farming with AgroMarket.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#marketplaces">Marketplaces</a></li>
            <li><a href="#supply-demand">Supply & Demand</a></li>
            <li><a href="#e-farming">E-Farming</a></li>
            <li><a href="#sales">Manage Sales</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: vinayrai@agro_market.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Location: Green Park, Gurugram</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="icon facebook">F</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="icon twitter">T</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="icon instagram">I</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="icon linkedin">L</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 AgroMarket. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
