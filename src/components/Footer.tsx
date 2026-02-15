// src/components/Footer.tsx
'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1e 100%);
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(255, 105, 180, 0.5) 50%, 
            transparent 100%
          );
        }

        .footer-wave {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }

        .footer-wave svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 80px;
        }

        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 24px 32px;
          position: relative;
          z-index: 1;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 48px;
          margin-bottom: 48px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .footer-logo {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 24px;
          color: white;
          box-shadow: 0 8px 32px rgba(255, 105, 180, 0.3);
        }

        .footer-brand-name {
          font-weight: 600;
          font-size: 24px;
          background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-description {
          color: #a0a0b8;
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .footer-socials {
          display: flex;
          gap: 12px;
        }

        .footer-social-link {
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 105, 180, 0.1);
        }

        .footer-social-link:hover {
          background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(255, 105, 180, 0.4);
          border-color: transparent;
        }

        .footer-section-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 24px;
          background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-link-item {
          margin-bottom: 12px;
        }

        .footer-link {
          color: #a0a0b8;
          text-decoration: none;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          position: relative;
          padding-left: 0;
        }

        .footer-link::before {
          content: '';
          position: absolute;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ff69b4, #ff1493);
          transition: width 0.3s ease;
        }

        .footer-link:hover {
          color: #ff69b4;
          padding-left: 20px;
        }

        .footer-link:hover::before {
          width: 12px;
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #a0a0b8;
          margin-bottom: 16px;
          line-height: 1.6;
        }

        .footer-contact-icon {
          color: #ff69b4;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .footer-contact-link {
          color: #a0a0b8;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-contact-link:hover {
          color: #ff69b4;
        }

        .footer-newsletter-text {
          color: #a0a0b8;
          margin-bottom: 16px;
          line-height: 1.6;
        }

        .footer-newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-newsletter-input {
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 105, 180, 0.2);
          border-radius: 12px;
          color: white;
          font-size: 15px;
          transition: all 0.3s ease;
        }

        .footer-newsletter-input::placeholder {
          color: #6b6b7e;
        }

        .footer-newsletter-input:focus {
          outline: none;
          border-color: #ff69b4;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 3px rgba(255, 105, 180, 0.1);
        }

        .footer-newsletter-button {
          padding: 14px 24px;
          background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 16px rgba(255, 105, 180, 0.3);
        }

        .footer-newsletter-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 105, 180, 0.4);
        }

        .footer-newsletter-button:active {
          transform: translateY(0);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 32px;
          margin-top: 48px;
          text-align: center;
        }

        .footer-copyright {
          color: #a0a0b8;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .footer-container {
            padding: 60px 20px 24px;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-wave">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="rgba(255, 105, 180, 0.05)"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </svg>
        </div>

        <div className="footer-container">
          <div className="footer-grid">
            {/* À propos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="footer-brand">
                <div className="footer-logo">JT</div>
                <span className="footer-brand-name">
                  Résidence Ste Cécilia
                </span>
              </div>
              <p className="footer-description">
                Découvrez un lieu d'exception où luxe, confort et gastronomie se rencontrent pour des moments inoubliables.
              </p>
              <div className="footer-socials">
                {[Facebook, Instagram, Twitter].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="footer-social-link"
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
              <h3 className="footer-section-title">Liens rapides</h3>
              <ul className="footer-links">
                {['Accueil', 'Restaurant', 'Hôtel', 'Conférence', 'Piscine & Spa', 'Contact'].map((item, index) => (
                  <li key={index} className="footer-link-item">
                    <Link
                      href={`/${item.toLowerCase().replace(' & ', '-')}`}
                      className="footer-link"
                    >
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
              <h3 className="footer-section-title">Contact</h3>
              <div>
                <div className="footer-contact-item">
                  <MapPin size={20} className="footer-contact-icon" />
                  <span>{process.env.NEXT_PUBLIC_ADDRESS}</span>
                </div>
                <div className="footer-contact-item">
                  <Phone size={20} className="footer-contact-icon" />
                  <a href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`} className="footer-contact-link">
                    {process.env.NEXT_PUBLIC_CONTACT_PHONE}
                  </a>
                </div>
                <div className="footer-contact-item">
                  <Mail size={20} className="footer-contact-icon" />
                  <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="footer-contact-link">
                    {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="footer-section-title">Newsletter</h3>
              <p className="footer-newsletter-text">
                Inscrivez-vous pour recevoir nos offres spéciales et actualités
              </p>
              <form className="footer-newsletter-form">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="footer-newsletter-input"
                />
                <button type="submit" className="footer-newsletter-button">
                  S'inscrire
                </button>
              </form>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="footer-bottom"
          >
            <p className="footer-copyright">
              © {currentYear} Résidence Ste Cécilia. Tous droits réservés.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;