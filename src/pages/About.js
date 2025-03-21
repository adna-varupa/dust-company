import React from 'react';
import '../styles/About.css';// Import the CSS file for styling

const About = () => {
  return (
    <section className="about-container">
      <header className="about-header">
        <h2>O nama</h2>
      </header>
      <div className="about-content">
        <p>
          Dust Company je preduzeće za pružanje usluga iz oblasti profesionalnog čišćenja industrijskih i komunalnih objekata.
          Primjenom savremenih uređaja, sredstava rada i tehnološki obučenom radnom snagom, u mogućnosti je da u svakom trenutku
          efikasno, kvalitetno i u skladu sa najvišim standardima zaštite životne okoline i sigurnosti na radu u potpunosti
          odgovori na sve izazove u cilju postizanja visokog nivoa čistoće vašeg pogona, kako bi osigurali optimalne uslove rada
          i maksimalnu produktivnost.
        </p>
      </div>
      <footer className="about-footer">
        <button className="contact-btn">Kontaktirajte nas</button>
      </footer>
    </section>
  );
};

export default About;
