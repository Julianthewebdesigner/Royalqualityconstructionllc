
import React from 'react';
import { BUSINESS_INFO, SERVICES } from '../constants';
import { Facebook, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal pt-32 pb-10 text-white px-4 md:px-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
          <div className="max-w-sm">
             <a href="#home" className="flex items-center gap-3 mb-6">
                <img
                  src="/assets/images/transparentlogo.png"
                  alt="Royal Quality Construction Logo"
                  className="h-14 w-auto"
                />
                <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                  ROYAL QUALITY <span className="text-accent">CONSTRUCTION</span>
                </span>
              </a>
              <p className="text-white/50 text-lg mb-8 font-medium">
                Premier construction and remodeling services in the greater Seattle area. Quality work you can trust.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent transition-all"><Facebook size={20} /></a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent transition-all"><Instagram size={20} /></a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent transition-all"><Linkedin size={20} /></a>
              </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
             <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-white/30 mb-6">Navigation</h4>
                <ul className="space-y-4 font-bold text-white/70">
                   <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
                   <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                   <li><a href="#services" className="hover:text-accent transition-colors">Our Services</a></li>
                   <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
                </ul>
             </div>
             <div className="hidden md:block">
                <h4 className="text-sm font-black uppercase tracking-widest text-white/30 mb-6">Services</h4>
                <ul className="space-y-4 font-bold text-white/70">
                   {SERVICES.slice(0, 4).map(s => (
                     <li key={s.id}><a href="#services" className="hover:text-accent transition-colors">{s.title}</a></li>
                   ))}
                </ul>
             </div>
             <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-white/30 mb-6">Contact</h4>
                <ul className="space-y-4 font-bold text-white/70">
                   <li><a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-accent transition-colors">{BUSINESS_INFO.phone}</a></li>
                   <li className="break-all"><a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-accent transition-colors">{BUSINESS_INFO.email}</a></li>
                   <li>{BUSINESS_INFO.address}</li>
                </ul>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10 text-white/30 text-xs font-bold uppercase tracking-widest gap-6">
           <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
           <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           </div>
           <p className="flex items-center gap-2">
             Handcrafted with <Heart size={12} className="text-accent fill-accent" /> in Seattle
           </p>
        </div>
      </div>
      
      {/* Footer Decoration */}
      <div className="absolute bottom-0 right-0 translate-y-1/2 opacity-[0.05] pointer-events-none select-none">
          <span className="text-[30rem] font-black leading-none font-heading whitespace-nowrap">CONSTRUCTION</span>
      </div>
    </footer>
  );
};

export default Footer;
