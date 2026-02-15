// src/components/Gallery.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('Tous');

  const images = [
    {
      src: '/images/gallery/restaurant.jpg',
      alt: 'Restaurant gastronomique',
      category: 'Restaurant',
      description: 'Une expérience culinaire exceptionnelle'
    },
        {
      src: '/images/gallery/rest2.jpg',
      alt: 'Restaurant gastronomique',
      category: 'Restaurant',
      description: 'Une expérience culinaire exceptionnelle'
    },
            {
      src: '/images/gallery/rest3.jpg',
      alt: 'Restaurant gastronomique',
      category: 'Restaurant',
      description: 'Une expérience culinaire exceptionnelle'
    },
            {
      src: '/images/gallery/rest4.jpg',
      alt: 'Restaurant gastronomique',
      category: 'Restaurant',
      description: 'Une expérience culinaire exceptionnelle'
    },
    {
      src: '/images/gallery/hotel.jpg',
      alt: 'Suite Royale',
      category: 'Hôtel',
      description: 'Luxe et confort absolu'
    },
        {
      src: '/images/gallery/hotel2.webp',
      alt: 'Suite Royale',
      category: 'Hôtel',
      description: 'Luxe et confort absolu'
    },
        {
      src: '/images/gallery/hotel3.webp',
      alt: 'Suite Royale',
      category: 'Hôtel',
      description: 'Luxe et confort absolu'
    },
        {
      src: '/images/gallery/hotel4.jpg',
      alt: 'Suite Royale',
      category: 'Hôtel',
      description: 'Luxe et confort absolu'
    },
    {
      src: '/images/gallery/conference.jpg',
      alt: 'Salle de conférence',
      category: 'Conférence',
      description: 'Espace moderne et équipé'
    },

        {
      src: '/images/gallery/conf2.webp',
      alt: 'Salle de conférence',
      category: 'Conférence',
      description: 'Espace moderne et équipé'
    },
            {
      src: '/images/gallery/conf3.webp',
      alt: 'Salle de conférence',
      category: 'Conférence',
      description: 'Espace moderne et équipé'
    },
    {
      src: '/images/gallery/piscine.jpg',
      alt: 'Piscine à débordement',
      category: 'Piscine',
      description: 'Vue panoramique sur la mer'
    },
        {
      src: '/images/gallery/pisc2.webp',
      alt: 'Piscine à débordement',
      category: 'Piscine',
      description: 'Vue panoramique sur la mer'
    },
        {
      src: '/images/gallery/pisc3.webp',
      alt: 'Piscine à débordement',
      category: 'Piscine',
      description: 'Vue panoramique sur la mer'
    },
    {
      src: '/images/gallery/hotel2.webp',
      alt: 'Spa & Bien-être',
      category: 'Bien-être',
      description: 'Espace de détente luxueux'
    },
    {
      src: '/images/gallery/pisc2.webp',
      alt: 'Terrasse panoramique',
      category: 'Extérieur',
      description: 'Vue imprenable sur le coucher de soleil'
    }
  ];

  const categories = ['Tous', ...new Set(images.map(img => img.category))];
  const filteredImages = activeCategory === 'Tous' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const handlePrevious = () => {
    setSelectedImage(prev => prev !== null ? 
      (prev === 0 ? filteredImages.length - 1 : prev - 1) : null);
  };

  const handleNext = () => {
    setSelectedImage(prev => prev !== null ? 
      (prev === filteredImages.length - 1 ? 0 : prev + 1) : null);
  };

  const styles = {
    section: {
      padding: '5rem 0',
      background: 'linear-gradient(135deg, #fff5f7 0%, #ffffff 100%)',
      minHeight: '100vh'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem'
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '3rem'
    },
    title: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: '300',
      color: '#2d2d2d',
      marginBottom: '1rem',
      letterSpacing: '-0.02em'
    },
    titleHighlight: {
      fontWeight: '600',
      background: 'linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: 'clamp(1rem, 2vw, 1.25rem)',
      color: '#666',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6',
      fontWeight: '300'
    },
    filters: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      justifyContent: 'center',
      gap: '0.75rem',
      marginBottom: '3rem'
    },
    filterButton: (isActive: boolean) => ({
      padding: '0.75rem 2rem',
      border: 'none',
      borderRadius: '50px',
      fontSize: '0.95rem',
      fontWeight: isActive ? '600' : '400',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      background: isActive 
        ? 'linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)'
        : '#ffffff',
      color: isActive ? '#ffffff' : '#666',
      boxShadow: isActive 
        ? '0 10px 20px rgba(255, 105, 180, 0.3)'
        : '0 4px 6px rgba(0, 0, 0, 0.05)',
      transform: isActive ? 'scale(1.05)' : 'scale(1)',
      letterSpacing: '0.02em',
      backdropFilter: 'blur(10px)'
    }),
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
      marginTop: '2rem'
    },
    card: {
      position: 'relative' as const,
      borderRadius: '20px',
      overflow: 'hidden',
      cursor: 'pointer',
      aspectRatio: '1',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease'
    },
    cardImage: {
      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      width: '100%',
      height: '100%',
      objectFit: 'cover' as const
    },
    cardOverlay: {
      position: 'absolute' as const,
      inset: 0,
      background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'flex-end',
      padding: '1.5rem',
      opacity: 0,
      transition: 'opacity 0.3s ease'
    },
    cardTitle: {
      color: 'white',
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '0.25rem',
      transform: 'translateY(20px)',
      transition: 'transform 0.3s ease'
    },
    cardCategory: {
      color: 'rgba(255,255,255,0.8)',
      fontSize: '0.9rem',
      fontWeight: '300',
      transform: 'translateY(20px)',
      transition: 'transform 0.3s ease 0.1s'
    },
    modal: {
      position: 'fixed' as const,
      inset: 0,
      background: 'rgba(0, 0, 0, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    modalContent: {
      position: 'relative' as const,
      width: '90vw',
      maxWidth: '1200px',
      maxHeight: '90vh'
    },
    modalImage: {
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
    },
    modalClose: {
      position: 'absolute' as const,
      top: '-3rem',
      right: '0',
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      padding: '0.5rem',
      transition: 'color 0.3s ease'
    },
    modalNav: {
      position: 'absolute' as const,
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255,255,255,0.1)',
      border: 'none',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'white',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(5px)'
    },
    modalCaption: {
      position: 'absolute' as const,
      bottom: '-3rem',
      left: '0',
      color: 'rgba(255,255,255,0.8)',
      fontSize: '1rem',
      fontWeight: '300'
    },
    '@media (max-width: 768px)': {
      grid: {
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem'
      },
      filters: {
        gap: '0.5rem'
      },
      filterButton: {
        padding: '0.6rem 1.5rem',
        fontSize: '0.9rem'
      }
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={styles.header}
        >
          <h2 style={styles.title}>
            Notre <span style={styles.titleHighlight}>Galerie</span>
          </h2>
          <p style={styles.subtitle}>
            Plongez dans l'atmosphère unique de notre établissement 
            à travers une sélection d'images soigneusement choisies
          </p>
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={styles.filters}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              style={styles.filterButton(activeCategory === category)}
              onMouseEnter={(e) => {
                if (activeCategory !== category) {
                  e.currentTarget.style.background = '#f8f9fa';
                  e.currentTarget.style.color = '#ff69b4';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category) {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#666';
                }
              }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grille d'images */}
        <motion.div
          layout
          style={styles.grid}
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                style={styles.card}
                onClick={() => setSelectedImage(index)}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 40px rgba(255, 105, 180, 0.3)'
                }}
              >
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  position: 'relative' 
                }}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={styles.cardImage}
                  />
                </div>
                
                <motion.div 
                  style={styles.cardOverlay}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.h3 
                    style={styles.cardTitle}
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    {image.alt}
                  </motion.h3>
                  <motion.p 
                    style={styles.cardCategory}
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    {image.category}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal plein écran */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              style={styles.modal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  style={styles.modalClose}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ff69b4'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                >
                  <X size={32} />
                </button>

                <button
                  onClick={handlePrevious}
                  style={{ ...styles.modalNav, left: '-70px' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,105,180,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <ChevronLeft size={30} />
                </button>

                <button
                  onClick={handleNext}
                  style={{ ...styles.modalNav, right: '-70px' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,105,180,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <ChevronRight size={30} />
                </button>

                <div style={styles.modalImage}>
                  <div style={{ 
                    position: 'relative', 
                    width: '100%', 
                    aspectRatio: '16/9' 
                  }}>
                    <Image
                      src={filteredImages[selectedImage].src}
                      alt={filteredImages[selectedImage].alt}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>

                <div style={styles.modalCaption}>
                  <p style={{ fontSize: '1.1rem', fontWeight: '500', marginBottom: '0.25rem' }}>
                    {filteredImages[selectedImage].alt}
                  </p>
                  <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                    {filteredImages[selectedImage].description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          ${Object.entries(styles['@media (max-width: 768px)']).map(([key, value]) => {
            if (typeof value === 'object') {
              return Object.entries(value).map(([subKey, subValue]) => 
                `.${key} { ${subKey}: ${subValue}; }`
              ).join(' ');
            }
            return '';
          }).join(' ')}
        }
      `}</style>
    </section>
  );
};

export default Gallery;