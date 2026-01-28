import React, { useState, useEffect } from 'react';
import { Phone, Facebook, Instagram } from 'lucide-react';

const FloatingContactBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show when scrolling up, hide when scrolling down
      // Only show if user has scrolled past 200px
      if (currentScrollY > 200) {
        if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-[90] transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-2 bg-charcoal/95 backdrop-blur-sm border-2 border-accent/30 rounded-full px-3 py-2 shadow-2xl">
        {/* Social Media Icons */}
        <a
          href="https://www.facebook.com/RoyalQualityConstruction"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-charcoal border border-accent/30 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110"
          aria-label="Follow us on Facebook"
        >
          <Facebook size={18} className="text-white" />
        </a>

        <a
          href="https://www.instagram.com/royalqualityconstructionllc/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-charcoal border border-accent/30 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110"
          aria-label="Follow us on Instagram"
        >
          <Instagram size={18} className="text-white" />
        </a>

        {/* Divider */}
        <div className="w-px h-8 bg-accent/30 mx-1"></div>

        {/* Call Button */}
        <a
          href="tel:2068561486"
          className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white rounded-full px-4 py-2 transition-all duration-300 hover:scale-105 font-semibold"
          aria-label="Call us"
        >
          <Phone size={18} />
          <span className="hidden sm:inline text-sm">Call Now</span>
        </a>
      </div>
    </div>
  );
};

export default FloatingContactBar;
