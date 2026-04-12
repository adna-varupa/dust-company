import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/Oprema.css';
import { useLanguage } from '../context/LanguageContext';

export default function EquipmentGallery() {
  const [equipmentItems, setEquipmentItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(2);
  const [origin, setOrigin] = useState('50% 50%');
  const wrapperRef = useRef(null);
  const lastTouchDist = useRef(null);
  const itemsRef = useRef([]);
  const { t } = useLanguage();

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 900px)').matches;
    if (!isMobile) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pop-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    itemsRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [equipmentItems]);

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

  // Non-passive wheel zoom
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

  // Non-passive touchmove for pinch zoom
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || !selectedImage) return;
    const onTouchMove = (e) => {
      if (e.touches.length !== 2) return;
      e.preventDefault();
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      if (lastTouchDist.current) {
        const delta = dist / lastTouchDist.current;
        setZoom(prev => Math.min(Math.max(prev * delta, 1), 6));
      }
      lastTouchDist.current = dist;
    };
    wrapper.addEventListener('touchmove', onTouchMove, { passive: false });
    return () => wrapper.removeEventListener('touchmove', onTouchMove);
  }, [selectedImage]);

  // Back button closes modal
  useEffect(() => {
    if (!selectedImage) return;
    const onPopState = () => {
      setSelectedImage(null);
      setZoom(1);
      setOrigin('50% 50%');
      document.body.style.overflow = 'auto';
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [selectedImage]);

  const openModal = (specImage) => {
    setSelectedImage(specImage);
    setZoom(1);
    setOrigin('50% 50%');
    document.body.style.overflow = 'hidden';
    window.history.pushState({ modal: true }, '');
  };

  const zatvoriModal = () => {
    window.history.back(); // triggers popstate → closes modal
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

  const handleTouchStart = useCallback((e) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      lastTouchDist.current = Math.hypot(dx, dy);
      if (wrapperRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();
        const mx = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        const my = (e.touches[0].clientY + e.touches[1].clientY) / 2;
        setOrigin(`${((mx - rect.left) / rect.width) * 100}% ${((my - rect.top) / rect.height) * 100}%`);
      }
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    lastTouchDist.current = null;
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
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <div className="image-wrapper">
              <img src={item.image} alt={item.name} loading="lazy" />
            </div>
            <div className="equipment-name">
              <span>{item.name}</span>
              <button className="view-specs-button" onClick={() => openModal(item.specImage)}>
                {t('oprema_view_specs')}
              </button>
            </div>
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
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
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
