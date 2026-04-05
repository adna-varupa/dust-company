import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Services from '../components/Services';

const Home = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.message) {
      setFormStatus({ submitted: false, error: true });
      return;
    }

    try {
      console.log('Form submitted:', formData);
      setFormData({
        fullName: '',
        email: '',
        message: ''
      });
      setFormStatus({ submitted: true, error: false });
    } catch (error) {
      console.error('Submission error:', error);
      setFormStatus({ submitted: false, error: true });
    }
  };

  return (
    <div className="app-container">
      <div className="home-container">
        <div className="content-wrapper">
          <h1>Industrijsko Čišćenje Bez Kompromisa</h1>
          <p>Preduzeće za pružanje usluga iz oblasti profesionalnog čišćenja prašine kod industrijskih i komunalnih objekata</p>
          <Link to="/onama" className="contact-btn">Saznaj više o nama</Link>
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
            <h2>Kontaktirajte Nas</h2>
            <p>Imate pitanja ili želite više informacija? Popunite formular i mi ćemo vam se javiti što je prije moguće.</p>
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
                <span>Adresa: Gornjozenička 42, Zenica, Bosna i Hercegovina</span>
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
              <label htmlFor="fullName">Puno Ime</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                placeholder="Unesite vaše puno ime"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Adresa</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Unesite vašu email adresu"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Poruka</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Unesite vašu poruku"
                rows="5"
              ></textarea>
            </div>
            
            {formStatus.error && (
              <div className="error-message">
                Molimo popunite sva polja ispravno.
              </div>
            )}
            
            {formStatus.submitted && (
              <div className="success-message">
                Vaša poruka je uspješno poslana. Javićemo vam se uskoro!
              </div>
            )}
            
            <button type="submit" className="submit-btn">
              Pošalji Poruku
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
