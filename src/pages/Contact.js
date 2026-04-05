import React, { useState } from 'react';
import '../styles/Contact.css';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h2>{t('contact_title')}</h2>
          <p>{t('contact_subtitle')}</p>
          <div className="contact-details">
            <div className="contact-detail">
              <i className="fas fa-phone"></i>
              <span>+387 (0)61 47 88 63</span>
            </div>
            <div className="contact-detail">
              <i className="fas fa-envelope"></i>
              <span>info@dustcompany.ba</span>
            </div>
            <div className="contact-detail">
              <i className="fas fa-map-marker-alt"></i>
              <span>Gornjozenička 42, Zenica, Bosna i Hercegovina</span>
            </div>
            <div className="contact-detail">
              <i className="fab fa-facebook"></i>
              <a href="https://www.facebook.com/dust.company" target="_blank" rel="noopener noreferrer">
                Dust Company
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">{t('contact_success')}</div>
            )}
            <label>{t('contact_name')}</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />

            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>{t('contact_message')}</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required />

            <button type="submit">{t('contact_submit')}</button>
          </form>
        </div>
      </div>
    </div>
  );
}
