import React, { useEffect } from 'react';
import '../styles/Reference.css';
import { useLanguage } from '../context/LanguageContext';

export default function Reference() {
  const { t } = useLanguage();

  useEffect(() => {
    const navbar = document.querySelector('nav') || document.querySelector('.navbar') || document.querySelector('header');
    if (navbar) {
      const originalBgColor = navbar.style.backgroundColor;
      const originalBoxShadow = navbar.style.boxShadow;
      navbar.style.backgroundColor = '#000000';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';

      return () => {
        navbar.style.backgroundColor = originalBgColor;
        navbar.style.boxShadow = originalBoxShadow;
      };
    }
  }, []);

  return (
    <div className="reference-container">
      <div className="reference-content">
        <h1>{t('reference_title')}</h1>
        <p>{t('reference_subtitle')}</p>
        <div className="reference-image-container">
          <img
            src="/images/reference.jpg"
            alt={t('reference_img_alt')}
            className="reference-image"
          />
        </div>
      </div>
    </div>
  );
}
