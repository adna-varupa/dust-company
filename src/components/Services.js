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
  );
};

export default Services;