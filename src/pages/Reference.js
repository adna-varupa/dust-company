import React, { useEffect } from 'react';
import '../styles/Reference.css';

export default function Reference() {
  useEffect(() => {
    const navbar = document.querySelector('nav') || document.querySelector('.navbar') || document.querySelector('header');
    if (navbar) {
      const originalBgColor = navbar.style.backgroundColor;
      const originalBoxShadow = navbar.style.boxShadow;
      const navLinks = navbar.querySelectorAll('a');
      const originalLinkColors = [];

      navbar.style.backgroundColor = '#000000';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';

      navLinks.forEach((link, index) => {
        originalLinkColors[index] = link.style.color;
        link.style.color = 'white';
        link.addEventListener('mouseenter', () => link.style.color = '#ff3333');
        link.addEventListener('mouseleave', () => link.style.color = 'white');
      });

      return () => {
        navbar.style.backgroundColor = originalBgColor;
        navbar.style.boxShadow = originalBoxShadow;
        navLinks.forEach((link, index) => {
          link.style.color = originalLinkColors[index];
        });
      };
    }
  }, []);

  return (
    <div className="reference-container">
      <div className="reference-content">
        <h1>Naše reference</h1>
        <p>Ponosni smo na dugogodišnju saradnju sa vodećim kompanijama u industriji.</p>
        <div className="reference-image-container">
          <img 
            src="/images/reference.jpg" 
            alt="Logos naših partnera i klijenata" 
            className="reference-image"
          />
        </div>
      </div>
    </div>
  );
}
