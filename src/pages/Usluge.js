import '../styles/Usluge.css';
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

function MiningServices() {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useLanguage();

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const navbar = document.querySelector('nav') || document.querySelector('.navbar') || document.querySelector('header');
    if (navbar) {
      const originalBgColor = navbar.style.backgroundColor;
      const originalBoxShadow = navbar.style.boxShadow;
      navbar.style.backgroundColor = '#000000';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';

      return () => {
        navbar.style.backgroundColor = originalBgColor;
        navbar.style.boxShadow = originalBoxShadow;
      };
    }
  }, []);

  const industries = [
    {
      title: t('usluge_mining'),
      services: [t('usluge_mining_1'), t('usluge_mining_2'), t('usluge_mining_3')]
    },
    {
      title: t('usluge_energy'),
      services: [t('usluge_energy_1'), t('usluge_energy_2')]
    },
    {
      title: t('usluge_wood'),
      services: [t('usluge_wood_1')]
    },
    {
      title: t('usluge_cement'),
      services: [t('usluge_cement_1'), t('usluge_cement_2')]
    },
    {
      title: t('usluge_construction'),
      services: [t('usluge_construction_1'), t('usluge_construction_2')]
    },
    {
      title: t('usluge_chemical'),
      services: [t('usluge_chemical_1'), t('usluge_chemical_2')]
    },
    {
      title: t('usluge_steel'),
      services: [t('usluge_steel_1'), t('usluge_steel_2')]
    },
    {
      title: t('usluge_water'),
      services: [t('usluge_water_1'), t('usluge_water_2')]
    }
  ];

  return (
    <div className="main-container">
      <div className="content-wrapper">
        <header className="page-header">
          <h1 className="main-title">{t('usluge_title')}</h1>
          <p className="subtitle">{t('usluge_subtitle')}</p>
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
          <p>{t('usluge_footer')}</p>
        </footer>
      </div>
    </div>
  );
}

export default MiningServices;
