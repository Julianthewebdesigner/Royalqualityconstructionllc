import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const SocialSidebar: React.FC = () => {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[80] hidden lg:flex flex-col gap-4">
      <a
        href="https://www.facebook.com/RoyalQualityConstruction"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 bg-charcoal border-2 border-accent/30 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Follow us on Facebook"
      >
        <Facebook size={20} className="text-white" />
        <span className="absolute left-full ml-3 px-3 py-1 bg-charcoal text-white text-sm font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Facebook
        </span>
      </a>

      <a
        href="https://www.instagram.com/royalqualityconstructionllc/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 bg-charcoal border-2 border-accent/30 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Follow us on Instagram"
      >
        <Instagram size={20} className="text-white" />
        <span className="absolute left-full ml-3 px-3 py-1 bg-charcoal text-white text-sm font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Instagram
        </span>
      </a>

      {/* Decorative line */}
      <div className="w-0.5 h-16 bg-gradient-to-b from-accent/50 to-transparent mx-auto"></div>
    </div>
  );
};

export default SocialSidebar;
