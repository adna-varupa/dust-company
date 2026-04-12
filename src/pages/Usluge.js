import React, { useEffect } from 'react';
import '../styles/Usluge.css';
import { useLanguage } from '../context/LanguageContext';
import { FaHardHat, FaBolt, FaTree, FaIndustry, FaBuilding, FaFlask, FaFire, FaWater } from 'react-icons/fa';

function MiningServices() {
  const { t } = useLanguage();

  useEffect(() => {
    const navbar = document.querySelector('nav');
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
      icon: <FaHardHat />,
      title: t('usluge_mining'),
      services: [t('usluge_mining_1'), t('usluge_mining_2'), t('usluge_mining_3')]
    },
    {
      icon: <FaBolt />,
      title: t('usluge_energy'),
      services: [t('usluge_energy_1'), t('usluge_energy_2')]
    },
    {
      icon: <FaTree />,
      title: t('usluge_wood'),
      services: [t('usluge_wood_1')]
    },
    {
      icon: <FaIndustry />,
      title: t('usluge_cement'),
      services: [t('usluge_cement_1'), t('usluge_cement_2')]
    },
    {
      icon: <FaBuilding />,
      title: t('usluge_construction'),
      services: [t('usluge_construction_1'), t('usluge_construction_2')]
    },
    {
      icon: <FaFlask />,
      title: t('usluge_chemical'),
      services: [t('usluge_chemical_1'), t('usluge_chemical_2')]
    },
    {
      icon: <FaFire />,
      title: t('usluge_steel'),
      services: [t('usluge_steel_1'), t('usluge_steel_2')]
    },
    {
      icon: <FaWater />,
      title: t('usluge_water'),
      services: [t('usluge_water_1'), t('usluge_water_2')]
    }
  ];

  return (
    <div className="usluge-page">
      <div className="usluge-header">
        <h1>{t('usluge_title')}</h1>
        <p>{t('usluge_subtitle')}</p>
      </div>

      <div className="usluge-grid">
        {industries.map((industry, index) => (
          <div className="usluge-card" key={index}>
            <div className="usluge-card-icon">{industry.icon}</div>
            <h2 className="usluge-card-title">{industry.title}</h2>
            <ul className="usluge-card-list">
              {industry.services.map((service, i) => (
                <li key={i}>
                  <span className="usluge-bullet">—</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MiningServices;
