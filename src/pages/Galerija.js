import { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/Galerija.css';
import { useLanguage } from '../context/LanguageContext';

export default function Galerija() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(2);
  const [origin, setOrigin] = useState('50% 50%');
  const wrapperRef = useRef(null);
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
      navbar.style.backgroundColor = '#000000';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';

      return () => {
        navbar.style.backgroundColor = originalBgColor;
        navbar.style.boxShadow = originalBoxShadow;
      };
    }
  }, []);

  // Non-passive wheel listener for zoom-to-cursor
  useEffect(() => {
    const modal = document.querySelector('.gallery-modal');
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

  const openModal = (image) => {
    setSelectedImage(image);
    setZoom(2);
    setOrigin('50% 50%');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    setZoom(2);
    setOrigin('50% 50%');
    document.body.style.overflow = 'auto';
  }, []);

  const resetZoom = useCallback(() => {
    setZoom(2);
    setOrigin('50% 50%');
  }, []);

  const prevImage = useCallback(() => {
    setSelectedImage(prev => {
      const currentIndex = images.findIndex(img => img.id === prev.id);
      return images[(currentIndex - 1 + images.length) % images.length];
    });
    resetZoom();
  }, [images, resetZoom]);

  const nextImage = useCallback(() => {
    setSelectedImage(prev => {
      const currentIndex = images.findIndex(img => img.id === prev.id);
      return images[(currentIndex + 1) % images.length];
    });
    resetZoom();
  }, [images, resetZoom]);

  const handleModalClick = (e) => {
    if (e.target.classList.contains('gallery-modal')) closeModal();
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
  }, [selectedImage, prevImage, nextImage, closeModal]);

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
        <div className="gallery-modal" onClick={handleModalClick}>
          <button className="nav-button prev-button" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            &#10094;
          </button>

          <div className="modal-content-wrapper">
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
              <img className="modal-content" src={selectedImage.src} alt={selectedImage.alt} />
              <button className="zatvori" onClick={(e) => { e.stopPropagation(); closeModal(); }}>×</button>
            </div>
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
