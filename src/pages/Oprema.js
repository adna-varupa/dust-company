import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/Oprema.css';
import { useLanguage } from '../context/LanguageContext';

export default function EquipmentGallery() {
  const [equipmentItems, setEquipmentItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(2);
  const [origin, setOrigin] = useState('50% 50%');
  const wrapperRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const equipmentData = [
      { id: 1, image: '/oprema/oprema11.png', name: 'Saugbagger Dino 3', specImage: '/oprema/oprema1.png' },
      { id: 2, image: '/oprema/oprema22.png', name: 'DISAB Centurion 175t', specImage: '/oprema/oprema2.png' },
      { id: 3, image: '/oprema/oprema33.png', name: t('oprema_kombinovano'), specImage: '/oprema/oprema3.png' },
      { id: 4, image: '/oprema/oprema44.png', name: 'Industrijski usisivač Vacturion', specImage: '/oprema/oprema4.png' },
      { id: 5, image: '/oprema/oprema55.png', name: 'Industrijski usisivač MV 918', specImage: '/oprema/oprema5.png' },
      { id: 6, image: '/oprema/oprema66.png', name: 'Industrijski usisivač MAX-VAC', specImage: '/oprema/oprema6.png' },
      { id: 7, image: '/oprema/oprema77.png', name: 'Industrijski usisivač Wieland', specImage: '/oprema/oprema7.png' },
      { id: 8, image: '/oprema/oprema88.png', name: 'Industrijski usisivač VacPro', specImage: '/oprema/oprema7.png' },
      { id: 9, image: '/oprema/oprema99.png', name: t('oprema_metilica'), specImage: '/oprema/oprema9.png' },
    ];
    setEquipmentItems(equipmentData);
  }, [t]);

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

  // Attach wheel listener as non-passive so preventDefault works
  useEffect(() => {
    const modal = document.querySelector('.modal');
    if (!modal) return;
    const onWheel = (e) => {
      e.preventDefault();
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setOrigin(`${x}% ${y}%`);
      setZoom(prev => Math.min(Math.max(prev - e.deltaY * 0.003, 1), 6));
    };
    modal.addEventListener('wheel', onWheel, { passive: false });
    return () => modal.removeEventListener('wheel', onWheel);
  }, [selectedImage]);

  const openModal = (specImage) => {
    setSelectedImage(specImage);
    setZoom(2);
    setOrigin('50% 50%');
    document.body.style.overflow = 'hidden';
  };

  const zatvoriModal = () => {
    setSelectedImage(null);
    setZoom(2);
    setOrigin('50% 50%');
    document.body.style.overflow = 'auto';
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal')) zatvoriModal();
  };

  const handleImageClick = useCallback((e) => {
    e.stopPropagation();
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
    setZoom(prev => prev >= 5 ? 2 : prev + 1);
  }, []);

  const handleRightClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
    setZoom(prev => Math.max(prev - 1, 1));
  }, []);

  return (
    <div className="equipment-page">
      <div className="equipment-header">
        <h1>{t('oprema_title')}</h1>
        <p className="equipment-subtitle">{t('oprema_subtitle')}</p>
      </div>

      <div className="equipment-container fade-in">
        {equipmentItems.map((item, index) => (
          <div
            className="equipment-item"
            key={item.id}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="image-wrapper">
              <img src={item.image} alt={item.name} loading="lazy" />
              <div className="image-overlay">
                <button className="view-specs-button" onClick={() => openModal(item.specImage)}>
                  {t('oprema_view_specs')}
                </button>
              </div>
            </div>
            <div className="equipment-name">{item.name}</div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={handleModalClick}>
          <div className="fullscreen-image-container">
            <div
              ref={wrapperRef}
              className="image-zoom-wrapper"
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: origin,
                cursor: zoom >= 6 ? 'zoom-out' : 'zoom-in',
              }}
              onClick={handleImageClick}
              onContextMenu={handleRightClick}
            >
              <img src={selectedImage} alt="Equipment Specifications" className="fullscreen-image" />
              <button className="zatvori" onClick={(e) => { e.stopPropagation(); zatvoriModal(); }}>×</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
