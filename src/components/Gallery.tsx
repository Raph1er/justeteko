// src/components/Gallery.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: '/images/gallery/restaurant.jpg',
      alt: 'Restaurant',
      category: 'Restaurant',
    },
    {
      src: '/images/gallery/hotel.jpg',
      alt: 'Chambre d\'hôtel',
      category: 'Hôtel',
    },
    {
      src: '/images/gallery/conference.jpg',
      alt: 'Salle de conférence',
      category: 'Conférence',
    },
    {
      src: '/images/gallery/piscine.jpg',
      alt: 'Piscine',
      category: 'Piscine',
    },
    {
      src: '/images/gallery/restaurant.jpg',
      alt: 'Plat signature',
      category: 'Restaurant',
    },
    {
      src: '/images/gallery/hotel.jpg',
      alt: 'Suite prestige',
      category: 'Hôtel',
    },
    {
      src: '/images/gallery/restaurant.jpg',
      alt: 'Spa',
      category: 'Bien-être',
    },
    {
      src: '/images/gallery/restaurant.jpg',
      alt: 'Terrasse',
      category: 'Extérieur',
    },
  ];

  const categories = ['Tous', ...new Set(images.map(img => img.category))];
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredImages = activeCategory === 'Tous' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Notre <span className="text-primary-500">Galerie</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Plongez dans l'atmosphère unique de notre établissement à travers ces images
          </p>
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-500 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grille d'images */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedImage(index)}
                className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-semibold text-lg">{image.alt}</h3>
                  <p className="text-white/80 text-sm">{image.category}</p>
                </div>
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
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-5xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-primary-500 transition-colors"
                >
                  <X size={32} />
                </button>
                <div className="relative h-full w-full aspect-video">
                  <Image
                    src={filteredImages[selectedImage].src}
                    alt={filteredImages[selectedImage].alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;