// src/components/Hero.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/restaurant.jpg',
      title: 'Une Expérience Culinaire Exceptionnelle',
      subtitle: 'Découvrez notre restaurant gastronomique',
      buttonText: 'Voir le menu',
    },
    {
      image: '/images/hotel.jpg',
      title: 'Séjournez dans un Écrin de Luxe',
      subtitle: 'Chambres et suites d\'exception',
      buttonText: 'Découvrir l\'hôtel',
    },
    {
      image: '/images/conference.jpg',
      title: 'Des Espaces de Conférence Prestigieux',
      subtitle: 'Pour vos événements professionnels',
      buttonText: 'Nos salles',
    },
    {
      image: '/images/piscine.jpg',
      title: 'Détente et Bien-être',
      subtitle: 'Piscine intérieure et spa',
      buttonText: 'Explorer',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };


  return (
    <div className="relative h-screen overflow-hidden bg-primary-100">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Image de fond avec overlay */}
          <div className="relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-200/80 via-primary-50/60 to-transparent z-10" />
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>

          {/* Contenu */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-6 animate-slide-up">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up animation-delay-200">
                  {slide.subtitle}
                </p>
                <button className="bg-primary-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 shadow-2xl animate-slide-up animation-delay-400">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Boutons de navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicateurs */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-primary-500'
                : 'w-2 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;