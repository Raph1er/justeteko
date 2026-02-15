// src/components/Testimonials.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Image from 'next/image';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
const timerRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [

    {
      name: 'Etablissement le Reveil',
      role: 'Conférence organisée',
      image: '/images/restaurant.jpg',
      content: 'Nous avons organisé une conférence dans les salles de l\'hôtel et tout s\'est déroulé à merveille. L\'équipe a été très professionnelle et les équipements étaient de haute qualité.',
      rating: 5,
      date: 'Janvier 2026',
    },
    {
      name: 'Mr Noé Gentil',
      role: 'Client au restaurant',
      image: '/images/gallery/Noé Gentil.jpeg',
      content: 'Une expérience culinaire exceptionnelle ! Les plats sont raffinés et le service est impeccable. Le cadre est magnifique, je recommande vivement.',
      rating: 5,
      date: 'Janvier 2026',
    },
    {
      name: 'Judicaël',
      role: 'Client à hôtel',
      image: '/images/Judicaël.jpeg',
      content: 'Un séjour merveilleux dans cet hôtel. Les chambres sont luxueuses et le personnel aux petits soins. La piscine est un vrai plus pour se détendre.',
      rating: 5,
      date: 'Janvier 2026',
    },
    {
      name: 'DJ Ginette',
      role: 'Organisatrice de conférence',
      image: '/images/Ginette.jpeg',
      content: 'Les salles de conférence sont parfaitement équipées. L\'équipe a été très professionnelle pour l\'organisation de notre séminaire. Merci !',
      rating: 5,
      date: 'Janvier 2026',
    },
    {
      name: 'Mirabelle',
      role: 'Cliente spa',
      image: '/images/Mirabelle.jpeg',
      content: 'Le spa est un véritable havre de paix. Les soins sont de grande qualité et l\'ambiance est apaisante. Je reviendrai sans hésiter.',
      rating: 5,
      date: 'Février 2026',
    },
    {
      name: 'Mr Mikaël',
      role: 'Client au restaurant',
      image: '/images/Miko.jpeg',
      content: 'Le dîner aux chandelles était parfait ! Une cuisine créative et délicate, un service attentionné sans être envahissant. Une adresse à garder précieusement.',
      rating: 5,
      date: 'Février 2026',
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -1000 : 1000,
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  }),
};
  return (
    <>
      <style jsx>{`
        .testimonials-section {
          padding: clamp(4rem, 8vw, 6rem) 0;
          background: linear-gradient(145deg, #fff5fa, #ffffff);
          position: relative;
          overflow: hidden;
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
        }

        /* Décoration de fond sophistiquée */
        .testimonials-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 0% 0%, rgba(236, 72, 153, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(236, 72, 153, 0.05) 0%, transparent 50%),
            repeating-linear-gradient(45deg, 
              rgba(236, 72, 153, 0.02) 0px, 
              rgba(236, 72, 153, 0.02) 2px,
              transparent 2px, 
              transparent 8px);
          pointer-events: none;
        }

        /* Formes floues décoratives */
        .testimonials-section::after {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }

        .container {
          max-width: min(1280px, 100% - 3rem);
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* En-tête de section */
        .section-header {
          text-align: center;
          margin-bottom: clamp(2.5rem, 5vw, 4rem);
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          color: #1f2937;
          margin-bottom: 1rem;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .title-highlight {
          background: linear-gradient(145deg, #ec4899, #be185d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          display: inline-block;
        }

        .title-highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 8px;
          background: rgba(236, 72, 153, 0.1);
          border-radius: 4px;
          z-index: -1;
        }

        .section-subtitle {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: #4b5563;
          line-height: 1.7;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Badge flottant */
        .floating-badge {
          position: absolute;
          top: 2rem;
          right: 2rem;
          background: rgba(236, 72, 153, 0.1);
          backdrop-filter: blur(10px);
          padding: 0.75rem 1.5rem;
          border-radius: 100px;
          border: 1px solid rgba(236, 72, 153, 0.2);
          color: #ec4899;
          font-weight: 600;
          font-size: 0.875rem;
          box-shadow: 0 10px 25px -5px rgba(236, 72, 153, 0.2);
        }

        /* Conteneur principal du carrousel */
        .carousel-container {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          padding: 0 1rem;
        }

        /* Carte de témoignage */
        .testimonial-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 2.5rem;
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(236, 72, 153, 0.1),
            inset 0 1px 2px rgba(255, 255, 255, 0.8);
          padding: clamp(2rem, 4vw, 3rem);
          position: relative;
          overflow: hidden;
        }

        /* Effet de lueur sur le bord */
        .testimonial-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 2.5rem;
          padding: 2px;
          background: linear-gradient(145deg, #f9a8d4, #ec4899, #db2777);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.3;
        }

        /* Guillemets décoratifs */
        .quote-decoration {
          position: absolute;
          top: 2rem;
          right: 2rem;
          opacity: 0.1;
          transform: rotate(180deg);
        }

        .quote-decoration svg {
          width: 6rem;
          height: 6rem;
          color: #ec4899;
        }

        /* Disposition du contenu */
        .testimonial-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          position: relative;
          z-index: 2;
        }

        @media (min-width: 768px) {
          .testimonial-content {
            flex-direction: row;
            gap: 3rem;
          }
        }

        /* Photo du client */
        .client-image-wrapper {
          position: relative;
          flex-shrink: 0;
        }

        .client-image-container {
          width: clamp(120px, 20vw, 160px);
          height: clamp(120px, 20vw, 160px);
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid white;
          box-shadow: 
            0 20px 30px -10px rgba(236, 72, 153, 0.3),
            0 0 0 2px rgba(236, 72, 153, 0.2);
          position: relative;
          transition: transform 0.3s ease;
        }

        .testimonial-card:hover .client-image-container {
          transform: scale(1.05) rotate(5deg);
        }

        .client-image {
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .testimonial-card:hover .client-image {
          transform: scale(1.1);
        }

        /* Anneau de progression autour de l'image */
        .progress-ring {
          position: absolute;
          top: -8px;
          left: -8px;
          right: -8px;
          bottom: -8px;
          border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: #ec4899;
          border-right-color: #f9a8d4;
          animation: rotate 6s linear infinite;
          opacity: 0.5;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Informations client */
        .client-info {
          flex: 1;
          text-align: center;
        }

        @media (min-width: 768px) {
          .client-info {
            text-align: left;
          }
        }

        /* Étoiles */
        .rating {
          display: flex;
          gap: 0.25rem;
          justify-content: center;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .rating {
            justify-content: flex-start;
          }
        }

        .star {
          color: #fbbf24;
          filter: drop-shadow(0 2px 4px rgba(251, 191, 36, 0.2));
          animation: starPulse 1s ease-in-out;
        }

        @keyframes starPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        /* Citation */
        .quote-text {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: #1f2937;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-style: italic;
          position: relative;
        }

        .quote-text::before {
          content: '"';
          font-size: 4rem;
          color: #ec4899;
          opacity: 0.2;
          position: absolute;
          left: -1.5rem;
          top: -1rem;
          font-family: serif;
        }

        /* Nom et rôle */
        .client-name {
          font-size: clamp(1.25rem, 2vw, 1.5rem);
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 0.25rem;
        }

        .client-role {
          color: #ec4899;
          font-weight: 500;
          margin-bottom: 0.25rem;
          font-size: 0.95rem;
        }

        .client-date {
          color: #9ca3af;
          font-size: 0.875rem;
        }

        /* Boutons de navigation */
        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: white;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 10px 25px -5px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(236, 72, 153, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 10;
          color: #4b5563;
        }

        .nav-button:hover {
          background: #ec4899;
          color: white;
          box-shadow: 
            0 20px 30px -10px rgba(236, 72, 153, 0.4),
            0 0 0 2px rgba(236, 72, 153, 0.3);
          transform: translateY(-50%) scale(1.1);
        }

        .nav-button:active {
          transform: translateY(-50%) scale(0.95);
        }

        .nav-button.prev {
          left: -20px;
        }

        .nav-button.next {
          right: -20px;
        }

        @media (max-width: 768px) {
          .nav-button {
            width: 40px;
            height: 40px;
          }
          
          .nav-button.prev {
            left: 0;
          }
          
          .nav-button.next {
            right: 0;
          }
        }

        /* Indicateurs */
        .indicators {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 2.5rem;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #d1d5db;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .indicator::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: rgba(236, 72, 153, 0.2);
          transform: scale(0);
          transition: transform 0.3s ease;
        }

        .indicator:hover {
          background: #ec4899;
          transform: scale(1.2);
        }

        .indicator.active {
          background: #ec4899;
          width: 32px;
          border-radius: 20px;
          transform: scale(1);
        }

        .indicator.active::before {
          transform: scale(1);
        }

        /* Pause/play sur hover */
        .carousel-container:hover .nav-button {
          opacity: 1;
        }

        /* Accessibilité */
        @media (prefers-reduced-motion: reduce) {
          .testimonial-card,
          .client-image-container,
          .nav-button,
          .indicator {
            transition: none;
          }
          
          .progress-ring {
            animation: none;
          }
        }

        .nav-button:focus-visible,
        .indicator:focus-visible {
          outline: 2px solid #ec4899;
          outline-offset: 2px;
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="testimonials-section"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">
              Ce que disent nos <span className="title-highlight">clients</span>
            </h2>
            <p className="section-subtitle">
              Découvrez les expériences vécues dans notre établissement à travers les yeux de nos visiteurs
            </p>
          </motion.div>

          {/* Badge de confiance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="floating-badge"
          >
            ⭐ 4.9/5 - 500+ avis vérifiés
          </motion.div>

          {/* Carrousel */}
          <div className="carousel-container">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="testimonial-card"
              >
                {/* Guillemets décoratifs */}
                <div className="quote-decoration">
                  <Quote size={96} />
                </div>

                <div className="testimonial-content">
                  {/* Photo avec anneau animé */}
                  <div className="client-image-wrapper">
                    <div className="client-image-container">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="client-image"
                        sizes="(max-width: 768px) 120px, 160px"
                      />
                    </div>
                    <div className="progress-ring" />
                  </div>

                  {/* Informations */}
                  <div className="client-info">
                    {/* Étoiles */}
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star
                            size={20}
                            className="star"
                            fill={i < testimonials[currentIndex].rating ? "#fbbf24" : "none"}
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Citation */}
                    <p className="quote-text">
                      {testimonials[currentIndex].content}
                    </p>

                    {/* Client */}
                    <h3 className="client-name">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="client-role">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="client-date">
                      {testimonials[currentIndex].date}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Boutons de navigation */}
            <button
              onClick={handlePrev}
              className="nav-button prev"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="nav-button next"
              aria-label="Témoignage suivant"
            >
              <ChevronRight size={24} />
            </button>

            {/* Indicateurs */}
            <div className="indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  aria-label={`Voir témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;