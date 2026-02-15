// src/components/Testimonials.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sophie Martin',
      role: 'Cliente restaurant',
      image: '/images/restaurant.jpg',
      content: 'Une expérience culinaire exceptionnelle ! Les plats sont raffinés et le service est impeccable. Le cadre est magnifique, je recommande vivement.',
      rating: 5,
    },
    {
      name: 'Thomas Dubois',
      role: 'Client hôtel',
      image: '/images/hotel.jpg',
      content: 'Un séjour merveilleux dans cet hôtel. Les chambres sont luxueuses et le personnel aux petits soins. La piscine est un vrai plus pour se détendre.',
      rating: 5,
    },
    {
      name: 'Marie Laurent',
      role: 'Organisatrice de conférence',
      image: '/images/conference.jpg',
      content: 'Les salles de conférence sont parfaitement équipées. L\'équipe a été très professionnelle pour l\'organisation de notre séminaire. Merci !',
      rating: 5,
    },
    {
      name: 'Pierre Moreau',
      role: 'Client spa',
      image: '/images/piscine.jpg',
      content: 'Le spa est un véritable havre de paix. Les soins sont de grande qualité et l\'ambiance est apaisante. Je reviendrai sans hésiter.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Ce que disent nos <span className="text-primary-500">clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les expériences vécues dans notre établissement
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Photo */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary-500 shadow-xl">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Contenu */}
                <div className="flex-1 text-center md:text-left">
                  {/* Étoiles */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Citation */}
                  <p className="text-xl text-gray-700 italic mb-6">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Informations client */}
                  <h3 className="text-2xl font-bold text-gray-800">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-primary-500 font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Boutons de navigation */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-primary-500 text-gray-800 hover:text-white p-3 rounded-full shadow-xl transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-primary-500 text-gray-800 hover:text-white p-3 rounded-full shadow-xl transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicateurs */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-primary-500'
                    : 'w-2 bg-gray-300 hover:bg-primary-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;