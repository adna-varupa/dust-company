import '../styles/Usluge.css';
import React, { useEffect, useState } from 'react';

function MiningServices() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

  const industries = [
    {
      title: "RUDARSTVO",
      services: [
        "Izvlačenje vacupress tehnikom ostataka ugljena, ugljene prašine, ugljenih muljeva",
        "Čišćenje silosa, transportera, vagona, svodova, kolosijeka i dr.",
        "Čišćenja u energetskim postrojenjima i kompresorskim stanicama"
      ]
    },
    {
      title: "ENERGANE I TOPLANE",
      services: [
        "Usisavanje pepela, ugljena, koksa, ulja, zauljenih muljeva, trafo-ulja, gipsa...",
        "Čišćenje grijaćih površina, dimnih kanala, silosa..."
      ]
    },
    {
      title: "DRVNA INDUSTRIJA",
      services: [
        "Izvlačenje sječke, piljevine i drugih ostataka"
      ]
    },
    {
      title: "CEMENTARE",
      services: [
        "Čišćenje silosa",
        "Izvlačenje klinkera, cementa fine prašine i ugljene prašine"
      ]
    },
    {
      title: "GRAĐEVINARSTVO I KOMUNALNE USLUGE",
      services: [
        "Skidanje šljunka, pijeska i substrata sa ravnih krovova...",
        "Čišćenje separatora zauljenih voda, betonskih površina, fekalnih jama..."
      ]
    },
    {
      title: "HEMIJSKA INDUSTRIJA I RAFINERIJE",
      services: [
        "Čišćenje različitih spremnika, kolona i izmjenjivača topline...",
        "Vanjsko i unutarnje čišćenje auto i vagon cisterni"
      ]
    },
    {
      title: "ČELIČANE, LJEVAONICE, KOKSARE",
      services: [
        "Čišćenja kolosijeka, transportera, skladišta, taložnica...",
        "Izvlačenje koksa, vapna, vatrostalnog materijala..."
      ]
    },
    {
      title: "POSTROJENJA ZA PROČIŠĆAVANJE KOMUNALNIH OTPADNIH VODA",
      services: [
        "Izmjena šljunka, pijeska i drugih filter materijala",
        "Čišćenje/odmuljivanje filtera, bistrilišta, separatora, tankova..."
      ]
    }
  ];

  return (
    <div className="main-container">
      <div className="content-wrapper">
        <header className="page-header">
          <h1 className="main-title">INDUSTRIJSKE USLUGE</h1>
          <p className="subtitle">Specijalizirane usluge za različite industrijske sektore</p>
        </header>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className={`industry-card ${openIndex === index ? 'active' : ''}`}
              style={{ height: openIndex === index ? 'auto' : '100px', minHeight: '100px' }}
            >
              <div 
                className="card-header" 
                onClick={() => toggleSection(index)} 
                style={{ cursor: 'pointer' }}
              >
                <h2 className="industry-title">{industry.title}</h2>
              </div>
              <div 
                className="card-content" 
                style={{ 
                  display: openIndex === index ? 'block' : 'none',
                  opacity: openIndex === index ? 1 : 0,
                  transition: 'opacity 0.3s ease'
                }}
              >
                <ul className="services-list">
                  {industry.services.map((service, i) => (
                    <li key={i} className="service-item">
                      <span className="service-marker">–</span>
                      <span className="service-text">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <footer className="page-footer">
          <p>© 2025 Industrijske Usluge | Sva prava pridržana</p>
        </footer>
      </div>
    </div>
  );
}

export default MiningServices;