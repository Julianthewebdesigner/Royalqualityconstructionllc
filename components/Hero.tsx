
import React from 'react';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Video Background Placeholder / Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/85 z-10"></div>
        <img
          src="/images/framing-carpentry.jpeg"
          alt="Construction background"
          className="w-full h-full object-cover"
        />
        {/* Animated Background Gradient Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -ml-48 -mb-48 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-accent/20">
            <span className="w-2 h-2 bg-accent rounded-full animate-ping"></span>
            Premium Construction in Seattle
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-charcoal leading-[1.1] mb-6">
            Where Plans <br className="hidden md:block" /> 
            Become <span className="text-accent italic">Projects</span>
          </h1>
          <p className="text-xl text-charcoal/70 max-w-2xl mb-10 leading-relaxed font-medium">
            From first idea to final build, we turn your plans into solid results—with clear communication, fair pricing, and quality you can count on.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-accent text-white px-8 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 hover:shadow-2xl hover:shadow-accent/40 transition-all active:scale-95 group"
            >
              Get a Free Estimate
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="w-full sm:w-auto bg-charcoal text-white px-8 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-charcoal/90 transition-all"
            >
              <Phone size={20} />
              Call: {BUSINESS_INFO.phone}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm font-semibold text-charcoal/60">
             <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-accent" />
                <span>Licensed & Insured</span>
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-accent" />
                <span>Fast Free Quotes</span>
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-accent" />
                <span>Workmanship Guarantee</span>
             </div>
          </div>
        </div>

        {/* Lead Form */}
        <div className="w-full lg:w-2/5 animate-float">
          <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl border border-charcoal/5 relative">
            <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg rotate-3">
              WE RESPOND ASAP!
            </div>
            
            <h3 className="text-2xl font-bold text-charcoal mb-2">Request a Quote</h3>
            <p className="text-charcoal/60 mb-6 font-medium">Get a detailed estimate within 24 hours.</p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-charcoal/80 mb-1.5 ml-1">Service Needed</label>
                <select className="w-full bg-cream border border-charcoal/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all">
                  <option>Select a Service</option>
                  <option>Remodeling</option>
                  <option>Flooring</option>
                  <option>Drywall & Painting</option>
                  <option>Decks & Fencing</option>
                  <option>General Repair</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-charcoal/80 mb-1.5 ml-1">Phone</label>
                  <input type="tel" placeholder="(206) ---" className="w-full bg-cream border border-charcoal/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-charcoal/80 mb-1.5 ml-1">ZIP Code</label>
                  <input type="text" placeholder="98101" className="w-full bg-cream border border-charcoal/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-charcoal/80 mb-1.5 ml-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-cream border border-charcoal/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
              </div>
              <button className="w-full bg-accent text-white py-4 rounded-xl font-bold text-lg hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 active:scale-95 mt-2">
                Request Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
