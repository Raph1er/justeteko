// src/components/Services.tsx
'use client';

import { motion } from 'framer-motion';
import { Utensils, Hotel, Users, Waves } from 'lucide-react';
import { Variants } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <Utensils size={40} />,
      title: 'Restaurant Gastronomique',
      description: 'Une cuisine raffinée qui éveille les sens, préparée par nos chefs étoilés avec des produits locaux et de saison.',
      color: 'from-primary-400 to-primary-600',
    },
    {
      icon: <Hotel size={40} />,
      title: 'Hôtel de Luxe',
      description: 'Des chambres et suites élégantes alliant confort moderne et charme intemporel pour un séjour inoubliable.',
      color: 'from-primary-500 to-primary-700',
    },
    {
      icon: <Users size={40} />,
      title: 'Salles de Conférence',
      description: 'Des espaces modulables et équipés des dernières technologies pour vos réunions et séminaires.',
      color: 'from-primary-400 to-primary-600',
    },
    {
      icon: <Waves size={40} />,
      title: 'Piscine & Spa',
      description: 'Un havre de paix avec piscine intérieure, sauna, hammam et soins bien-être pour une détente absolue.',
      color: 'from-primary-500 to-primary-700',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier valide
    },
  },
};

  return (
    <section className="py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-6">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Une Expérience <span className="text-primary-500">Unique</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez un lieu d'exception où chaque service est pensé pour votre bien-être et votre satisfaction
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-300 to-primary-600 mx-auto mt-8 rounded-full" />
        </motion.div>

        {/* Grille des services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-300 rounded-3xl transform rotate-1 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Icône */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  {service.icon}
                </div>

                {/* Contenu */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Lien */}
                <div className="mt-6">
                  <button className="text-primary-500 font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    En savoir plus
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Décoration */}
                <div className="absolute top-4 right-4 opacity-10">
                  <svg className="w-24 h-24 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '15+', label: 'Ans d\'expertise' },
            { value: '200+', label: 'Événements par an' },
            { value: '50+', label: 'Chambres de luxe' },
            { value: '1000+', label: 'Clients satisfaits' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;