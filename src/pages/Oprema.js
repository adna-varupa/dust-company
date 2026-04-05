import React, { useState, useEffect } from 'react';
import '../styles/Oprema.css';

export default function EquipmentGallery() {
  const [equipmentItems, setEquipmentItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  
  useEffect(() => {
    const equipmentData = [
      {
        id: 1,
        image: '/oprema/oprema11.png',
        name: 'Saugbagger Dino 3',
        specImage: '/oprema/oprema1.png' // Add specification image path
      },
      {
        id: 2,
        image: '/oprema/oprema22.png',
        name: 'DISAB Centurion 175t',
        specImage: '/oprema/oprema2.png'// Add specification image path
      },
      {
        id: 3,
        image: '/oprema/oprema33.png',
        name: 'Kombinovano vozilo CanalMaster',
        specImage: '/oprema/oprema3.png' // Add specification image path
      },
      {
        id: 4,
        image: '/oprema/oprema44.png',
        name: 'Industrijski usisivač Vacturion',
        specImage: '/oprema/oprema4.png'// Add specification image path
      },
      {
        id: 5,
        image: '/oprema/oprema55.png',
        name: 'Industrijski usisivač MV 918',
        specImage: '/oprema/oprema5.png' // Add specification image path
      },
      {
        id: 6,
        image: '/oprema/oprema66.png',
        name: 'Industrijski usisivač MAX-VAC',
        specImage: '/oprema/oprema6.png'// Add specification image path
      },
      {
        id: 7,
        image: '/oprema/oprema77.png',
        name: 'Industrijski usisivač Wieland',
        specImage: '/oprema/oprema7.png'// Add specification image path
      },
      {
        id: 8,
        image: '/oprema/oprema88.png',
        name: 'Industrijski usisivač VacPro',
        specImage: '/oprema/oprema7.png' // Add specification image path
      },
      {
        id: 9,
        image: '/oprema/oprema99.png',
        name: 'Metilica RCM Boxer',
        specImage: '/oprema/oprema9.png'// Add specification image path
      },
      // Add more equipment items as needed
    ];
    
    setEquipmentItems(equipmentData);
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
  
  const openModal = (specImage) => {
    setSelectedImage(specImage);
    document.body.style.overflow = 'hidden';
  };
  
  const zatvoriModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal')) {
      zatvoriModal();
    }
  };

  return (
    <div className="equipment-page">
      <div className="equipment-header">
        <h1>Specifikacija Opreme</h1>
        <p className="equipment-subtitle">Pregled naše industrijske opreme</p>
      </div>
      
      <div className="equipment-container fade-in">
        {equipmentItems.map((item, index) => (
          <div 
            className="equipment-item" 
            key={item.id}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="image-wrapper">
              <img 
                src={item.image} 
                alt={item.name} 
                loading="lazy"
              />
              <div className="image-overlay">
                <button 
                  className="view-specs-button"
                  onClick={() => openModal(item.specImage)}
                >
                  Pogledaj Specifikacije
                </button>
              </div>
            </div>
            <div className="equipment-name">{item.name}</div>
          </div>
        ))}
      </div>
      
      {/* Fullscreen Specification Image Modal */}
     {/* Fullscreen Specification Image Modal */}
{/* Fullscreen Specification Image Modal */}
{selectedImage && (
  <div className="modal" onClick={handleModalClick}>
    <div className="fullscreen-image-container">
      <img 
        src={selectedImage} 
        alt="Equipment Specifications" 
        className="fullscreen-image"
      />
      <span className="zatvori" onClick={(e) => {
        e.stopPropagation();
        zatvoriModal();
      }}>×</span>
    </div>
  </div>
)}
    </div>
  );
}