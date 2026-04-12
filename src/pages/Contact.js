import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';
import { useLanguage } from '../context/LanguageContext';

const EMAILJS_SERVICE_ID  = 'service_ss9teza';
const EMAILJS_TEMPLATE_ID = 'template_1pui9bi';
const EMAILJS_PUBLIC_KEY  = 'CgXzlUq-tR_eLSGOf';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitted: false, error: false, loading: false });
  const { t } = useLanguage();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitted: false, error: false, loading: true });

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'adffnavarupa03@gmail.com',
      },
      EMAILJS_PUBLIC_KEY
    ).then(() => {
      setFormData({ name: '', email: '', message: '' });
      setStatus({ submitted: true, error: false, loading: false });
    }).catch(() => {
      setStatus({ submitted: false, error: true, loading: false });
    });
  };

  return (
    <div className="contact-page">
<div className="contact-layout">
        <div className="contact-container">
          <div className="contact-info">
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
              {status.submitted && (
                <div className="success-message">{t('contact_success')}</div>
              )}
              {status.error && (
                <div className="error-message">Slanje nije uspjelo. Pokušajte ponovo.</div>
              )}

              <label>{t('contact_name')}</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />

              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />

              <label>{t('contact_message')}</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required />

              <button type="submit" disabled={status.loading}>
                {status.loading ? '...' : t('contact_submit')}
              </button>
            </form>
          </div>
        </div>

        <div className="contact-map">
          <div className="contact-map-header">
            <i className="fas fa-map-marker-alt"></i>
            <span>Pronađite nas na adresi:</span>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2859.7421868969777!2d17.901643699999997!3d44.212376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ee20cca623c95%3A0x668d3cd52a59134e!2sDust%20Company%20Zenica!5e0!3m2!1sen!2sba!4v1775396273799!5m2!1sen!2sba"
            title="Dust Company Zenica"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
