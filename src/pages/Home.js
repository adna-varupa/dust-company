import React, { useState } from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

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

  const services = [
    {
      title: 'RUDARSTVO',
      description: [
        'Izvlačenje vacupress tehnikom ostataka ugljena, ugljene prašine, ugljenih muljeva',
        'Čišćenje silosa, transportera, vagona, svodova, kolosijeka i dr.',
        'Čišćenja u energetskim postrojenjima i kompresorskim stanicama'
      ]
    },
    {
      title: 'ENERGANE I TOPLANE',
      description: [
        'Usisavanje pepela, ugljena, koksa, ulja, zauljenih muljeva, trafo-ulja, gipsa, izolacionih materijala od turbina i cjevovoda',
        'Čišćenje grijaćih površina, dimnih kanala, silosa, elektrofiltera, rashladnih tornjeva i šahtova'
      ]
    },
    {
      title: 'DRVNA INDUSTRIJA',
      description: [
        'Izvlačenje sječke, piljevine i drugih ostataka'
      ]
    },
    {
      title: 'CEMENTARE',
      description: [
        'Čišćenje silosa',
        'Izvlačenje klinkera, cementa fine prašine i ugljene prašine'
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.fullName || !formData.email || !formData.message) {
      setFormStatus({ submitted: false, error: true });
      return;
    }

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just simulate a successful submission
      console.log('Form submitted:', formData);
      
      // Reset form and show success message
      setFormData({
        fullName: '',
        email: '',
        message: ''
      });
      setFormStatus({ submitted: true, error: false });

      // Optional: You might want to use a more robust method to send emails
      // For example, using a service like EmailJS or your own backend endpoint
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
          <Link to="/about" className="contact-btn">Saznaj više o nama</Link>
        </div>
      </div>
      
      <div className="info-container">
        <div className="text-section">
          <h2>Naše usluge</h2>
          <p>Nudimo širok spektar profesionalnih industrijskih usluga čišćenja prilagođenih vašim specifičnim potrebama.</p>
        </div>
        <div className="cards-section">
          {services.map((service, index) => (
            <div key={index} className="card">
              <div className="card-content">
                <h3>{service.title}</h3>
                <ul>
                  {service.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="sponsors-strip">
        <div className="sponsors-marquee">
          <img src="klijenti/mital.png" alt="Sponsor 1" />
          <img src="klijenti/bolnica.png" alt="Sponsor 2" />
          <img src="klijenti/carmeuse.png" alt="Sponsor 3" />
          <img src="klijenti/cimos.png" alt="Sponsor 4" />
          <img src="klijenti/elektro.png" alt="Sponsor 4" />
          <img src="klijenti/natron.png" alt="Sponsor 4" />
          <img src="klijenti/sisecam.png" alt="Sponsor 4" />
          <img src="klijenti/treasure.png" alt="Sponsor 4" />
          <img src="klijenti/termomatik.png" alt="Sponsor 4" />

          {/* Duplicate the images for continuous scrolling */}
          <img src="klijenti/mital.png" alt="Sponsor 1" />
          <img src="klijenti/bolnica.png" alt="Sponsor 2" />
          <img src="klijenti/carmeuse.png" alt="Sponsor 3" />
          <img src="klijenti/cimos.png" alt="Sponsor 4" />
          <img src="klijenti/elektro.png" alt="Sponsor 4" />
          <img src="klijenti/natron.png" alt="Sponsor 4" />
          <img src="klijenti/sisecam.png" alt="Sponsor 4" />
          <img src="klijenti/treasure.png" alt="Sponsor 4" />
          <img src="klijenti/termomatik.png" alt="Sponsor 4" />
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