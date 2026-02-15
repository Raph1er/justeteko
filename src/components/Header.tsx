// src/components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Restaurant', href: '/restaurant' },
    { name: 'Hôtel', href: '/hotel' },
    { name: 'Salles de conférence', href: '/conference' },
    { name: 'Piscine & Spa', href: '/spa' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-300 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">JT</span>
            </div>
            <span className={`font-semibold text-2xl transition-colors duration-300 ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}>
              Résidence Ste Cécilia
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-300 hover:text-primary-500 relative group ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <button className="bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Réserver
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors duration-300 ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white rounded-2xl shadow-xl p-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 px-4 text-gray-700 hover:bg-primary-50 hover:text-primary-500 rounded-xl transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full mt-2 bg-primary-500 text-white px-6 py-3 rounded-xl hover:bg-primary-600 transition-all duration-300">
              Réserver
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;