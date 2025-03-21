import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo6.png';

const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="nav-links-container">
        <ul>
          <li><Link to="/">Početna</Link></li>
          <li><Link to="/about">O nama</Link></li>
          <li><Link to="/services">Usluge</Link></li>
          <li><Link to="/contact">Tehnička specifikacija opreme</Link></li>
          <li><Link to="/contact">Galerija</Link></li>
          <li><Link to="/contact">Reference</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;