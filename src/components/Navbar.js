import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { useLanguage } from '../context/LanguageContext';
import { FaHome, FaInfoCircle, FaCogs, FaWrench, FaImages, FaStar, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav>
      <div className="logo-container">
        <Link to="/" onClick={closeMenu}>
          <img src="/assets/logoo.png" alt="Logo" className="logo" />
        </Link>
      </div>
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`nav-links-container ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <img src="/assets/logoo.png" alt="Logo" className="mobile-menu-logo" />
          <div className="mobile-menu-divider" />
        </div>
        <ul>
          <li><Link to="/" onClick={closeMenu}><FaHome className="nav-icon" />{t('nav_home')}</Link></li>
          <li><Link to="/onama" onClick={closeMenu}><FaInfoCircle className="nav-icon" />{t('nav_about')}</Link></li>
          <li><Link to="/usluge" onClick={closeMenu}><FaCogs className="nav-icon" />{t('nav_services')}</Link></li>
          <li><Link to="/oprema" onClick={closeMenu}><FaWrench className="nav-icon" />{t('nav_equipment')}</Link></li>
          <li><Link to="/galerija" onClick={closeMenu}><FaImages className="nav-icon" />{t('nav_gallery')}</Link></li>
          <li><Link to="/reference" onClick={closeMenu}><FaStar className="nav-icon" />{t('nav_references')}</Link></li>
          <li><Link to="/contact" onClick={closeMenu}><FaEnvelope className="nav-icon" />{t('nav_contact')}</Link></li>
          <li>
            <div className="lang-toggle">
              <span className={language === 'en' ? 'lang-active' : 'lang-inactive'} onClick={() => { if (language !== 'en') { toggleLanguage(); closeMenu(); } }}>EN</span>
              <span className="lang-divider">|</span>
              <span className={language === 'bs' ? 'lang-active' : 'lang-inactive'} onClick={() => { if (language !== 'bs') { toggleLanguage(); closeMenu(); } }}>BS</span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
