// src/components/Footer.tsx
'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-700 text-white relative overflow-hidden">
      {/* Vague décorative */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="relative block w-full h-16"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="0.1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* À propos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-300 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">JT</span>
              </div>
                <span className="font-semibold text-2xl text-white">
                  Résidence Ste Cécilia
                </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Découvrez un lieu d'exception où luxe, confort et gastronomie se rencontrent pour des moments inoubliables.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-primary-500">Liens rapides</h3>
            <ul className="space-y-3">
              {['Accueil', 'Restaurant', 'Hôtel', 'Conférence', 'Piscine & Spa', 'Contact'].map((item, index) => (
                <li key={index}>
                  <Link
                    href={`/${item.toLowerCase().replace(' & ', '-')}`}
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-primary-500">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={20} className="text-primary-500 flex-shrink-0 mt-1" />
                <span>{process.env.NEXT_PUBLIC_ADDRESS}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={20} className="text-primary-500 flex-shrink-0" />
                <a href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`} className="hover:text-primary-500 transition-colors">
                  {process.env.NEXT_PUBLIC_CONTACT_PHONE}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={20} className="text-primary-500 flex-shrink-0" />
                <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="hover:text-primary-500 transition-colors">
                  {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-primary-500">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Inscrivez-vous pour recevoir nos offres spéciales et actualités
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-3 bg-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              />
              <button className="bg-primary-500 text-white px-6 py-3 rounded-xl hover:bg-primary-600 transition-all duration-300 transform hover:scale-105">
                S'inscrire
              </button>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-8 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} Résidence Ste Cécilia. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;