import React from 'react';
import '../styles/Services.css';

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

const Services = () => {
  return (
    <div className="services-section">
      <div className="services-header">
        <h1 className="services-title">Naše usluge</h1>
        <p className="services-subtitle">
          Nudimo širok spektar profesionalnih industrijskih usluga čišćenja prilagođenih vašim specifičnim potrebama.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-card-accent" />
            <h3 className="service-card-title">{service.title}</h3>
            <ul className="service-card-list">
              {service.description.map((desc, descIndex) => (
                <li key={descIndex} className="service-card-item">
                  <span className="service-card-bullet">—</span>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
