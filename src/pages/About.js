import React from 'react';
import '../styles/About.css';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="about-container">
      <header className="about-header">
        <h2>{t('about_title')}</h2>
      </header>
      <div className="about-content">
        <p>{t('about_text')}</p>
      </div>
      <footer className="about-footer">
        <Link to="/contact" className="contact-btn">{t('about_contact_btn')}</Link>
      </footer>
    </section>
  );
};

export default About;
