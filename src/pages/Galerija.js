import React, { useState, useEffect } from 'react';
import '../styles/Galerija.css';
import { useLanguage } from '../context/LanguageContext';

export default function Galerija() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const { t } = useLanguage();

  useEffect(() => {
    const publicImages = Array.from({ length: 44 }, (_, index) => {
      const number = index + 1;
      return {
        src: `/images/Galerija_(${number}).png`,
        alt: `Gallery image ${number}`,
        id: `Galerija_(${number}).png`,
      };
    });
    setImages(publicImages);
  }, []);

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

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const prevImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  const nextImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal')) closeModal();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      switch (e.key) {
        case 'ArrowLeft': prevImage(); break;
        case 'ArrowRight': nextImage(); break;
        case 'Escape': closeModal(); break;
        default: break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, images]);

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>{t('galerija_title')}</h1>
        <p className="gallery-subtitle">{t('galerija_subtitle')}</p>
      </div>

      <div className="gallery-container fade-in">
        {images.map((image, index) => (
          <div
            className="gallery-item"
            key={image.id}
            onClick={() => openModal(image)}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="image-wrapper">
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="image-overlay">
                <span className="zoom-icon">+</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={handleModalClick}>
          <button className="nav-button prev-button" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            &#10094;
          </button>
          <div className="modal-content-wrapper">
            <span className="close-button" onClick={closeModal}>×</span>
            <img className="modal-content" src={selectedImage.src} alt={selectedImage.alt} />
            <div className="image-counter">
              {images.findIndex(img => img.id === selectedImage.id) + 1} / {images.length}
            </div>
          </div>
          <button className="nav-button next-button" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}
