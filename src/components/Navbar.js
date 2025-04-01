import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo6.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Prevent scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Clean up the effect
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav>
      <div className="logo-container">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div 
        className={`hamburger ${isOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`nav-links-container ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Početna</Link></li>
          <li><Link to="/about" onClick={closeMenu}>O nama</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Usluge</Link></li>
          <li><Link to="/specifications" onClick={closeMenu}>Tehnička specifikacija opreme</Link></li>
          <li><Link to="/gallery" onClick={closeMenu}>Galerija</Link></li>
          <li><Link to="/references" onClick={closeMenu}>Reference</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Kontakt</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;