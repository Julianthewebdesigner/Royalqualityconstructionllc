
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

type NavLink = { name: string; href: string; type: 'scroll' | 'route' };

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false); // Close mobile menu when hiding
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks: NavLink[] = [
    { name: 'Home', href: '#home', type: 'scroll' },
    { name: 'About', href: '#about', type: 'scroll' },
    { name: 'Services', href: '#services', type: 'scroll' },
    { name: 'Projects', href: '/projects', type: 'route' },
    { name: 'Contact', href: '#contact', type: 'scroll' },
  ];

  const handleNavClick = (link: NavLink) => {
    setIsMenuOpen(false);

    if (link.type === 'route') {
      navigate(link.href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(link.href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(link.href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 bg-charcoal shadow-lg ${
      isScrolled ? 'py-3' : 'py-6'
    } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/images/transparentlogo.png"
            alt="Royal Quality Construction Logo"
            className="h-12 w-auto group-hover:scale-105 transition-transform"
          />
          <span className="font-heading font-extrabold text-lg tracking-tight text-white">
            ROYAL QUALITY <span className="text-accent">CONSTRUCTION</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link)}
              className={`font-medium text-sm transition-colors cursor-pointer ${
                location.pathname === link.href
                  ? 'text-accent'
                  : 'text-white/90 hover:text-accent'
              }`}
            >
              {link.name}
            </button>
          ))}
          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent/90 hover:scale-105 transition-all hover:shadow-lg hover:shadow-accent/30"
          >
            <Phone size={16} />
            {BUSINESS_INFO.phone}
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`absolute top-full left-0 w-full bg-charcoal shadow-xl transition-all duration-300 overflow-hidden border-t border-white/10 ${
        isMenuOpen ? 'max-h-96' : 'max-h-0'
      }`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link)}
              className={`text-lg font-semibold text-left transition-colors ${
                location.pathname === link.href ? 'text-accent' : 'text-white hover:text-accent'
              }`}
            >
              {link.name}
            </button>
          ))}
          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="flex items-center justify-center gap-2 bg-accent text-white py-4 rounded-xl font-bold hover:bg-accent/90 transition-all"
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
