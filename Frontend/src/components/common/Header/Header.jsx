import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Marketplace from '../../pages/MarketPlace/MarketPlace.jsx';

import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMarketNavigation = (path) => {
    setIsMenuOpen(false); 
    navigate(path);
  };

  const handleHomeNavigation = (path) => {
    setIsMenuOpen(false);
    navigate(path)
  }

  const handleContactNavigation = (path) => {
    setIsMenuOpen(false)
    navigate(path)
  }

  const handleEfarmingNavigation = (path) =>{
    setIsMenuOpen(false)
    navigate(path)
  }

  return (
    <>
      <header className="header-container">
        <div className="logo">
          <h1>AgroMarket</h1>
        </div>
        <nav className={`nav-bar ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li onClick={() => handleHomeNavigation('/')}>Home</li>
            <li onClick={() => handleMarketNavigation('/marketplace')}>Marketplaces</li>
            <li onClick={() => handleEfarmingNavigation('/efarming')}>E-Farming</li>
            <li onClick={()=> handleContactNavigation('/contactus')} >Contact Us</li>
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </header>
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Header;
