
import React from 'react';
import Section from './Section';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <Section id="services" dark className="bg-charcoal">
       <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-accent bg-accent/10 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Expert Services for <br /> Your <span className="text-accent italic">Dream Home</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-medium">
             We handle a wide range of home projects, from framing and siding to decks, porches, and remodeling—done with care, done the right way.
          </p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-[#222] rounded-[2rem] overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10"
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-2xl text-white group-hover:bg-accent group-hover:scale-110 transition-all">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-extrabold text-white">{service.title}</h3>
                  <a href="#contact" className="text-accent hover:text-white transition-colors">
                    <ArrowUpRight size={24} />
                  </a>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-8 font-medium">
                  {service.description}
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all"
                >
                  Get Quote
                  <div className="h-[2px] w-8 bg-accent group-hover:w-12 transition-all"></div>
                </a>
              </div>
            </div>
          ))}
       </div>

       <div className="mt-16 text-center">
          <button className="bg-white text-charcoal px-10 py-4 rounded-full font-bold text-lg hover:bg-accent hover:text-white transition-all shadow-xl active:scale-95">
            View All Services
          </button>
       </div>
    </Section>
  );
};

export default Services;
