
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/assets/images/transparentlogo.png"
            alt="Royal Quality Construction Logo"
            className="h-12 w-auto group-hover:scale-105 transition-transform"
          />
          <span className="font-heading font-extrabold text-lg tracking-tight text-charcoal">
            ROYAL QUALITY <span className="text-accent">CONSTRUCTION</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-medium text-sm text-charcoal/80 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="flex items-center gap-2 bg-charcoal text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            <Phone size={16} />
            {BUSINESS_INFO.phone}
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-charcoal"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`absolute top-full left-0 w-full bg-cream shadow-xl transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-96' : 'max-h-0'
      }`}>
        <div className="flex flex-col p-6 gap-4 border-t border-charcoal/5">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-semibold text-charcoal"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="flex items-center justify-center gap-2 bg-accent text-white py-4 rounded-xl font-bold"
          >
            <Phone size={20} />
            {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
