import React from 'react';
import '../styles/Services.css';
import { useLanguage } from '../context/LanguageContext';
import { FaHardHat, FaBolt, FaTree, FaIndustry } from 'react-icons/fa';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <FaHardHat />,
      title: t('services_mining'),
      description: [t('services_mining_1'), t('services_mining_2'), t('services_mining_3')]
    },
    {
      icon: <FaBolt />,
      title: t('services_energy'),
      description: [t('services_energy_1'), t('services_energy_2')]
    },
    {
      icon: <FaTree />,
      title: t('services_wood'),
      description: [t('services_wood_1')]
    },
    {
      icon: <FaIndustry />,
      title: t('services_cement'),
      description: [t('services_cement_1'), t('services_cement_2')]
    }
  ];

  return (
    <div className="services-section">
      <div className="services-header">
        <h1 className="services-title">{t('services_title')}</h1>
        <p className="services-subtitle">{t('services_subtitle')}</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-card-icon">{service.icon}</div>
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
