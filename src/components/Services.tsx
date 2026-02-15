// src/components/Services.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Utensils, Hotel, Users, Waves, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      id: 1,
      icon: Utensils,
      title: 'Restaurant Gastronomique',
      description: 'Une cuisine raffinée qui éveille les sens, préparée par nos chefs étoilés avec des produits locaux et de saison.',
      gradient: 'linear-gradient(145deg, #fdf2f8 0%, #fce7f3 100%)',
      iconColor: '#ec4899',
      delay: 0.1
    },
    {
      id: 2,
      icon: Hotel,
      title: "Hôtel de Luxe",
      description: 'Des chambres et suites élégantes alliant confort moderne et charme intemporel pour un séjour inoubliable.',
      gradient: 'linear-gradient(145deg, #fce7f3 0%, #fbcfe8 100%)',
      iconColor: '#db2777',
      delay: 0.2
    },
    {
      id: 3,
      icon: Users,
      title: 'Salles de Conférence',
      description: 'Des espaces modulables et équipés des dernières technologies pour vos réunions et séminaires.',
      gradient: 'linear-gradient(145deg, #fbcfe8 0%, #f9a8d4 100%)',
      iconColor: '#be185d',
      delay: 0.3
    },
    {
      id: 4,
      icon: Waves,
      title: 'Piscine & Spa',
      description: 'Un havre de paix avec piscine intérieure, sauna, hammam et soins bien-être pour une détente absolue.',
      gradient: 'linear-gradient(145deg, #f9a8d4 0%, #ec4899 100%)',
      iconColor: '#9d174d',
      delay: 0.4
    }
  ];


  // Valeurs cibles pour l'animation
  const stats = [
    { value: 15, label: "Ans d'expertise", suffix: '+' },
    { value: 200, label: 'Événements par an', suffix: '+' },
    { value: 50, label: 'Chambres de luxe', suffix: '+' },
    { value: 1000, label: 'Clients satisfaits', suffix: '+' },
  ];

  // Animation compteur
  const [counts, setCounts] = useState(stats.map(() => 0));
  useEffect(() => {
    if (!isInView) return;
    const durations = [3000, 2500, 3000, 2500]; // ms
    const starts = stats.map(() => 0);
    const ends = stats.map(s => s.value);
    const startTime = Date.now();
    let frame: number;
    function animate() {
      const now = Date.now();
      const elapsed = now - startTime;
      setCounts(
        ends.map((end, i) => {
          const duration = durations[i];
          if (elapsed >= duration) return end;
          return Math.floor((end * elapsed) / duration);
        })
      );
      if (elapsed < Math.max(...durations)) {
        frame = requestAnimationFrame(animate);
      }
    }
    animate();
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line
  }, [isInView]);

  return (
    <section ref={ref} className="services-root">
      <style jsx>{`
        .services-root {
          position: relative;
          padding: clamp(4rem, 10vw, 8rem) 0;
          background: #ffffff;
          overflow: hidden;
        }

        /* Background pattern sophistiqué */
        .services-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 0% 0%, rgba(236, 72, 153, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(236, 72, 153, 0.03) 0%, transparent 50%),
            repeating-linear-gradient(45deg, rgba(236, 72, 153, 0.02) 0px, rgba(236, 72, 153, 0.02) 2px, transparent 2px, transparent 8px);
          pointer-events: none;
        }

        .services-container {
          max-width: min(90%, 1280px);
          margin: 0 auto;
          position: relative;
          z-index: 2;
          padding: 0 clamp(1rem, 5vw, 2rem);
        }

        /* Header section */
        .services-header {
        text-color: #db2777;
          text-align: center;
          margin-bottom: clamp(3rem, 8vw, 5rem);
        }
          text-align: center;
          margin-bottom: clamp(3rem, 8vw, 5rem);
        }

        .services-tag {
        text-color: #db2777;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: inline-block;
          font-size: clamp(0.875rem, 2vw, 1rem);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          background: linear-gradient(135deg, #ec4899, #db2777);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .services-title {
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: 700;
          line-height: 1.2;
          color: #111827;
          margin-bottom: 1.5rem;
        }

        .services-title span {
          background: linear-gradient(135deg, #ec4899, #be185d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .services-description {
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          color: #4b5563;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Grille des services */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: clamp(1.5rem, 3vw, 2rem);
          margin-bottom: clamp(4rem, 8vw, 6rem);
        }

        @media (min-width: 640px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* Carte de service */
        .service-card {
          position: relative;
          height: 100%;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .service-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .service-card.visible:nth-child(1) { transition-delay: 0.1s; }
        .service-card.visible:nth-child(2) { transition-delay: 0.2s; }
        .service-card.visible:nth-child(3) { transition-delay: 0.3s; }
        .service-card.visible:nth-child(4) { transition-delay: 0.4s; }

        .service-card-inner {
          position: relative;
          height: 100%;
          padding: clamp(1.5rem, 4vw, 2rem);
          background: white;
          border-radius: 32px;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(236, 72, 153, 0.1);
          display: flex;
          flex-direction: column;
        }

        .service-card-inner:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px -15px rgba(236, 72, 153, 0.25);
          border-color: rgba(236, 72, 153, 0.2);
        }

        /* Icône */
        .service-icon-wrapper {
          width: clamp(3.5rem, 8vw, 4.5rem);
          height: clamp(3.5rem, 8vw, 4.5rem);
          border-radius: 18px;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: clamp(1.5rem, 3vw, 2rem);
          box-shadow: 0 10px 25px -5px rgba(236, 72, 153, 0.2);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .service-icon-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #ec4899, #db2777);
          opacity: 0.1;
          transition: opacity 0.3s ease;
        }

        .service-card-inner:hover .service-icon-wrapper {
          transform: scale(1.05) rotate(5deg);
          box-shadow: 0 15px 30px -5px rgba(236, 72, 153, 0.3);
        }

        .service-icon-wrapper :global(svg) {
          width: clamp(1.5rem, 4vw, 2rem);
          height: clamp(1.5rem, 4vw, 2rem);
          color: #ec4899;
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
        }

        .service-card-inner:hover .service-icon-wrapper :global(svg) {
          transform: scale(1.1);
          color: #db2777;
        }

        /* Titre */
        .service-title {
          font-size: clamp(1.25rem, 3vw, 1.5rem);
          font-weight: 700;
          color: #111827;
          margin-bottom: 0.75rem;
          line-height: 1.3;
          transition: color 0.3s ease;
        }

        .service-card-inner:hover .service-title {
          color: #ec4899;
        }

        /* Description */
        .service-description {
          font-size: clamp(0.875rem, 2vw, 1rem);
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        /* Lien */
        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #ec4899;
          font-weight: 600;
          font-size: clamp(0.875rem, 2vw, 1rem);
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          margin-top: auto;
        }

        .service-link span {
          transition: transform 0.3s ease;
        }

        .service-card-inner:hover .service-link span {
          transform: translateX(5px);
        }

        .service-link :global(svg) {
          width: 1.25rem;
          height: 1.25rem;
          transition: transform 0.3s ease;
        }

        .service-card-inner:hover .service-link :global(svg) {
          transform: translateX(5px);
        }

        /* Statistiques */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(1.5rem, 4vw, 3rem);
          padding: clamp(2rem, 5vw, 3rem);
          background: linear-gradient(145deg, #fdf2f8, #fce7f3);
          border-radius: 40px;
          position: relative;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .stats-grid::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 30%, rgba(236, 72, 153, 0.1) 0%, transparent 70%);
        }

        .stat-item {
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .stat-value {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          background: linear-gradient(135deg, #ec4899, #be185d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        .stat-label {
          font-size: clamp(0.875rem, 2vw, 1rem);
          color: #4b5563;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        /* Décoration */
        .stats-decoration {
          position: absolute;
          top: -50px;
          right: -50px;
          width: 200px;
          height: 200px;
          background: rgba(236, 72, 153, 0.05);
          border-radius: 50%;
          pointer-events: none;
        }

        .stats-decoration-2 {
          position: absolute;
          bottom: -50px;
          left: -50px;
          width: 200px;
          height: 200px;
          background: rgba(236, 72, 153, 0.05);
          border-radius: 50%;
          pointer-events: none;
        }

        /* Focus states pour accessibilité */
        .service-link:focus-visible {
          outline: 2px solid #ec4899;
          outline-offset: 2px;
          border-radius: 4px;
        }

        .service-card-inner:focus-within {
          outline: 2px solid #ec4899;
          outline-offset: 2px;
        }
      `}</style>

      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <motion.span
           style={{ color: "#1900ff" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="services-tag"
          >
            ✦ Nos Services ✦
          </motion.span>
          
          <motion.h2
           style={{ color: "#db2777" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="services-title"
          >
            Une Expérience <span>Unique</span>
          </motion.h2>
          
          <motion.p
           style={{ color: "#db2777" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="services-description"
          >
            Découvrez un lieu d'exception où chaque service est pensé pour votre bien-être
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`service-card ${isInView ? 'visible' : ''}`}
              >
                <article className="service-card-inner">
                  <div className="service-icon-wrapper">
                    <Icon />
                  </div>
                  
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <button className="service-link">
                    <span>En savoir plus</span>
                    <ArrowRight />
                  </button>
                </article>
              </div>
            );
          })}
        </div>

{/* Stats */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="relative flex flex-row justify-center items-center gap-10 flex-wrap"
>
  <div className="stats-decoration" />
  <div className="stats-decoration-2" />

  {stats.map((stat, index) => (
    <div key={index} className="stat-item text-center">
      <div className="stat-value">
        {counts[index]}{stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  ))}
</motion.div>
      </div>
    </section>
  );
};

export default Services;