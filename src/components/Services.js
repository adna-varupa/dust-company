import React from 'react';

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
    <div style={{backgroundColor: '#000', color: '#fff', padding: '50px', minHeight: '100vh'}}>
      {/* Header Section */}
      <div style={{textAlign: 'center', marginBottom: '60px'}}>
        <h1 style={{fontSize: '48px', fontWeight: 'bold', color: '#c60000', marginBottom: '20px'}}>Naše usluge</h1>
        <p style={{fontSize: '18px', color: '#fff', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6'}}>
          Nudimo širok spektar profesionalnih industrijskih usluga čišćenja prilagođenih vašim specifičnim potrebama.
        </p>
      </div>

      {/* Services Cards */}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px', maxWidth: '1200px', margin: '0 auto'}}>
        {services.map((service, index) => (
          <div 
            key={index} 
            style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '10px',
              border: '1px solid rgba(198, 0, 0, 0.2)',
              padding: '25px',
              height: '250px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: '0 6px 15px rgba(198, 0, 0, 0.2)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-10px)';
              e.target.style.boxShadow = '0 10px 20px rgba(198, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 6px 15px rgba(198, 0, 0, 0.2)';
            }}
          >
            <h3 style={{color: '#c60000', marginBottom: '15px', fontSize: '20px', fontWeight: 'bold'}}>
              {service.title}
            </h3>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              {service.description.map((desc, descIndex) => (
                <li 
                  key={descIndex} 
                  style={{color: '#fff', fontSize: '14px', lineHeight: '1.6', marginBottom: '8px', opacity: 0.9}}
                >
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