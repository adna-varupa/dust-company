import React from 'react';
import '../styles/Footer.css';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/assets/logoo.png" alt="Dust Company" />
      </div>
      <div className="footer-divider" />

      <div className="footer-content">
        <div className="footer-section">
          <h3>{t('footer_address')}</h3>
          <p>Gornjozenička 42</p>
          <p>72000 Zenica</p>
          <p>Bosna i Hercegovina</p>
        </div>

        <div className="footer-section">
          <h3>{t('footer_contact')}</h3>
          <p>+387 (0)61 47 88 63</p>
          <p>info@dustcompany.ba</p>
        </div>

        <div className="footer-section">
          <h3>{t('footer_follow')}</h3>
          <div className="footer-social">
            <a href="https://www.facebook.com/dust.company" target="_blank" rel="noopener noreferrer" className="facebook-btn">
              <i className="fab fa-facebook"></i> {t('footer_facebook')}
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© {new Date().getFullYear()} Dust Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
