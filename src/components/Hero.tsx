// src/components/Hero.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // 🔹 Numéro WhatsApp (format international sans + ni espace)
  const whatsappNumber = "2290147666585";



  const slides = [
    {
      image: '/images/restaurant.jpg',
      title: 'Bienvenue à la Résidence Ste Cécilia',
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
    }, 9000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };


  // Animation effet d'écriture PRO : chaque lettre s'affiche dans l'ordre, sans mélange
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  useEffect(() => {
    let isUnmounted = false;
    setDisplayedTitle('');
    setDisplayedSubtitle('');
    const title = slides[currentSlide].title;
    const subtitle = slides[currentSlide].subtitle;
    let titleIndex = 0;
    let subtitleIndex = 0;
    function typeTitleSync() {
      if (isUnmounted) return;
      setDisplayedTitle(title.slice(0, titleIndex + 1));
      if (titleIndex < title.length) {
        titleIndex++;
        setTimeout(typeTitleSync, 120);
      } else {
        typeSubtitleSync();
      }
    }
    function typeSubtitleSync() {
      if (isUnmounted) return;
      setDisplayedSubtitle(subtitle.slice(0, subtitleIndex + 1));
      if (subtitleIndex < subtitle.length) {
        subtitleIndex++;
        setTimeout(typeSubtitleSync, 18);
      }
    }
    typeTitleSync();
    return () => {
      isUnmounted = true;
    };
  }, [currentSlide]);

  return (
    <div className="relative h-screen overflow-hidden bg-primary-100">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          {/* Image de fond avec overlay */}
          <div className="relative h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay sombre */}
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-200/80 via-primary-50/60 to-transparent z-20" />
          </div>

          {/* Contenu */}
          <div className="absolute inset-0 z-30 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-6 animate-slide-up whitespace-pre-line">
                  {displayedTitle}
                  <span className="border-r-2 border-white animate-pulse ml-1" />
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up animation-delay-200 whitespace-pre-line">
                  {displayedSubtitle}
                  <span className="border-r border-white animate-pulse ml-1" />
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
{/* 🔹 Wrapper centré */}
<div className="absolute inset-x-0 bottom-20 md:bottom-24 z-40 flex justify-center px-4">
  
  {/* 🔹 Bouton WhatsApp */}
  <a
    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      "Bonjour, je souhaite avoir des informations sur votre Hôtel et sur la restauration."
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-btn 
               bg-green-500 hover:bg-green-600 
               text-white 
               px-6 md:px-8 
               py-3 md:py-4 
               rounded-full 
               flex items-center gap-2 md:gap-3 
               text-sm md:text-lg 
               font-bold 
               shadow-2xl 
               max-w-xs md:max-w-md 
               justify-center"
  >
    <MessageCircle size={22} />
    <span className="whitespace-nowrap">
      Nous contacter maintenant
    </span>
  </a>

  <style>
    {`
      .whatsapp-btn {
        animation: whatsappStrongPulse 1.2s ease-in-out infinite;
      }

      @keyframes whatsappStrongPulse {
        0% {
          transform: scale(1);
          box-shadow: 0 0 15px rgba(37, 211, 102, 0.6);
        }
        50% {
          transform: scale(1.12);
          box-shadow: 0 0 45px rgba(37, 211, 102, 1);
        }
        100% {
          transform: scale(1);
          box-shadow: 0 0 15px rgba(37, 211, 102, 0.6);
        }
      }
    `}
  </style>
</div>


      {/* Indicateurs */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
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