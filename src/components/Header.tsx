// src/components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Restaurant', href: '/#' },
    { name: 'Hôtel', href: '/#' },
    { name: 'Salles de conférence', href: '/#' },
    { name: 'Piscine & Spa', href: '/#' },
    { name: 'Contact', href: '/#' },
  ];

  const styles = {
    header: {
      position: 'fixed' as const,
      width: '100%',
      zIndex: 50,
      transition: 'all 0.5s ease',
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      boxShadow: scrolled ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none',
    },
    nav: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '1rem 1.5rem',
    },
    navContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      textDecoration: 'none',
    },
    logoIcon: {
      width: '48px',
      height: '48px',
      background: 'linear-gradient(to bottom right, #ff00b3, #d393fd)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    },
    logoText: {
      fontSize: '24px',
      fontWeight: 600,
      transition: 'color 0.3s ease',
      color: scrolled ? '#1f2937' : 'white',
    },
    desktopMenu: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      gap: '2rem',
    },
    desktopLink: {
      fontSize: '16px',
      fontWeight: 500,
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      position: 'relative' as const,
      color: scrolled ? '#374151' : 'white',
      cursor: 'pointer',
    },
    desktopLinkUnderline: {
      position: 'absolute' as const,
      bottom: 0,
      left: 0,
      width: '0',
      height: '2px',
      backgroundColor: '#e40680',
      transition: 'width 0.3s ease',
    },
    desktopButton: {
      backgroundColor: '#e40680',
      color: 'white',
      padding: '0.5rem 1.5rem',
      border: 'none',
      borderRadius: '9999px',
      fontSize: '16px',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    },
    mobileButton: {
      display: isMobile ? 'block' : 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: scrolled ? '#1f2937' : 'white',
    },
    mobileMenu: {
      transition: 'all 0.5s ease-in-out',
      maxHeight: isOpen ? '384px' : '0',
      opacity: isOpen ? 1 : 0,
      overflow: 'hidden',
      marginTop: isOpen ? '1rem' : '0',
    },
    mobileMenuContent: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      padding: '1rem',
    },
    mobileLink: {
      display: 'block',
      padding: '0.75rem 1rem',
      color: '#374151',
      textDecoration: 'none',
      borderRadius: '0.75rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    mobileMenuButton: {
      width: '100%',
      marginTop: '0.5rem',
      backgroundColor: '#e40680',
      color: 'white',
      padding: '0.75rem 1rem',
      border: 'none',
      borderRadius: '0.75rem',
      fontSize: '16px',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <>
      <style>{`
        .desktop-link:hover {
          color: #f00ca4 !important;
        }

        .desktop-link:hover .desktop-link-underline {
          width: 100% !important;
        }

        .mobile-link:hover {
          background-color: #eff6ff !important;
          color:  #f00ca4 !important;
        }

        .desktop-button:hover {
          background-color: #f00ca4 !important;
          transform: scale(1.05) !important;
        }

        .mobile-menu-button:hover {
          background-color: #f00ca4 !important;
        }
      `}</style>

      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={styles.navContainer}>
            {/* Logo */}
            <Link href="/" style={styles.logo}>
              <div style={styles.logoIcon}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>JT</span>
              </div>
              <span style={styles.logoText}>
                Résidence Ste Cécilia
              </span>
            </Link>

            {/* Desktop Menu */}
            <div style={styles.desktopMenu}>
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="desktop-link"
                  style={styles.desktopLink}
                >
                  {item.name}
                  <span className="desktop-link-underline" style={styles.desktopLinkUnderline}></span>
                </Link>
              ))}
              <button className="desktop-button" style={styles.desktopButton}>
                Réserver
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={styles.mobileButton}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div style={styles.mobileMenu}>
            <div style={styles.mobileMenuContent}>
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="mobile-link"
                  style={styles.mobileLink}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="mobile-menu-button" style={styles.mobileMenuButton}>
                Réserver
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;