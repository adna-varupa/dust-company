import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../styles/Home.css';
import Services from '../components/Services';
import { useLanguage } from '../context/LanguageContext';

const EMAILJS_SERVICE_ID  = 'service_ss9teza';
const EMAILJS_TEMPLATE_ID = 'template_1pui9bi';
const EMAILJS_PUBLIC_KEY  = 'CgXzlUq-tR_eLSGOf';

const Home = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, error: false });
  const { t } = useLanguage();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      setFormStatus({ submitted: false, error: true, loading: false });
      return;
    }
    setFormStatus({ submitted: false, error: false, loading: true });

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.fullName,
        from_email: formData.email,
        message: formData.message,
        to_email: 'adffnavarupa03@gmail.com',
      },
      EMAILJS_PUBLIC_KEY
    ).then(() => {
      setFormData({ fullName: '', email: '', message: '' });
      setFormStatus({ submitted: true, error: false, loading: false });
    }).catch(() => {
      setFormStatus({ submitted: false, error: true, loading: false });
    });
  };

  return (
    <div className="app-container">
      <div className="home-container">
        <div className="content-wrapper">
          <h1>{t('home_hero_title')}</h1>
          <p>{t('home_hero_subtitle')}</p>
          <Link to="/onama" className="contact-btn">{t('home_hero_btn')}</Link>
        </div>
      </div>

      <Services />

      <div className="sponsors-strip">
        <div className="sponsors-marquee">
          <img src="assets/klijenti/mital.png" alt="Sponsor 1" />
          <img src="assets/klijenti/bolnica.png" alt="Sponsor 2" />
          <img src="assets/klijenti/carmeuse.png" alt="Sponsor 3" />
          <img src="assets/klijenti/cimos.png" alt="Sponsor 4" />
          <img src="assets/klijenti/elektro.png" alt="Sponsor 5" />
          <img src="assets/klijenti/natron.png" alt="Sponsor 6" />
          <img src="assets/klijenti/sisecam.png" alt="Sponsor 7" />
          <img src="assets/klijenti/treasure.png" alt="Sponsor 8" />
          <img src="assets/klijenti/termomatik.png" alt="Sponsor 9" />
          <img src="assets/klijenti/mital.png" alt="Sponsor 1" />
          <img src="assets/klijenti/bolnica.png" alt="Sponsor 2" />
          <img src="assets/klijenti/carmeuse.png" alt="Sponsor 3" />
          <img src="assets/klijenti/cimos.png" alt="Sponsor 4" />
          <img src="assets/klijenti/elektro.png" alt="Sponsor 5" />
          <img src="assets/klijenti/natron.png" alt="Sponsor 6" />
          <img src="assets/klijenti/sisecam.png" alt="Sponsor 7" />
          <img src="assets/klijenti/treasure.png" alt="Sponsor 8" />
          <img src="assets/klijenti/termomatik.png" alt="Sponsor 9" />
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>{t('home_contact_title')}</h2>
            <p>{t('home_contact_subtitle')}</p>
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
                <span>{t('home_contact_address')}</span>
              </div>
              <div className="contact-detail">
                <a href="https://www.facebook.com/dustcompany" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:underline">
                  <i className="fab fa-facebook-square text-xl"></i>
                  <span>Dust Company</span>
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="fullName">{t('home_form_name')}</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                placeholder={t('home_form_name_placeholder')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('home_form_email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder={t('home_form_email_placeholder')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t('home_form_message')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder={t('home_form_message_placeholder')}
                rows="5"
              ></textarea>
            </div>

            {formStatus.error && (
              <div className="error-message">{t('home_form_error')}</div>
            )}

            {formStatus.submitted && (
              <div className="success-message">{t('home_form_success')}</div>
            )}

            <button type="submit" className="submit-btn" disabled={formStatus.loading}>
              {formStatus.loading ? '...' : t('home_form_submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
