import React, { useState } from 'react';
import '../styles/Contact.css'; // Import your CSS file for styling

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Simulate form submission
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Kontaktirajte Nas</h2>
          <p>Imate pitanja ili želite više informacija? Javite nam se!</p>
          
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
              <a 
                href="https://www.facebook.com/yourpage" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Facebook stranica
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                Vaša poruka je poslana! Odgovorit ćemo uskoro.
              </div>
            )}
            <label>Ime i Prezime</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required 
            />

            <label>Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
            />

            <label>Poruka</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required 
            />

            <button type="submit">Pošalji Poruku</button>
          </form>
        </div>
      </div>
    </div>
  );
}
