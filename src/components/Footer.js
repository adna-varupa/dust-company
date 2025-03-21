import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Adresa</h3>
          <p>Gornjozenička 42</p>
          <p>72000 Zenica</p>
          <p>Bosna i Hercegovina</p>
        </div>

        <div className="footer-section">
          <h3>KONTAKT</h3>
          <p>+387 (0)61 47 88 63</p>
          <p>info@dustcompany.ba</p>
        </div>

        <div className="footer-section">
          <h3>Pratite nas</h3>
          <div className="footer-social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="facebook-btn">
              <i className="fab fa-facebook"></i> Označi sa sviđa mi se
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Dust Cleaning Company. All Rights Reserved.</p>
        <p className="footer-link">
          <a href="/privacy-policy" className="footer-link-text">Privacy Policy</a> | <a href="/terms-of-service" className="footer-link-text">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;