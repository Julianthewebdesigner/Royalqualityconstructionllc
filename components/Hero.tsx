
import React from 'react';
import { Phone, ArrowRight, Award, Shield, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 md:pt-36 pb-16 overflow-hidden">
      {/* Hero Background with Luxury Black Overlay */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Background Image - Construction visible through overlay */}
        <img
          src="/assets/images/Hero Royal Quality.jpeg"
          alt="Premium Construction Quality"
          className="w-full h-full object-cover scale-105 opacity-40"
        />

        {/* Sophisticated Black Gradient Overlay - maintains construction visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90"></div>

        {/* Subtle Construction Grid Pattern - Gray tones */}
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        {/* Elegant Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIi8+PC9zdmc+')]"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white/90 px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 border border-white/20 shadow-lg">
            <Award size={16} className="text-white" />
            <span>Premium Craftsmanship Since Day One</span>
            <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse"></div>
          </div>

          {/* Main Heading with Luxury Typography */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] mb-6 tracking-tight">
            Where Plans <br className="hidden md:block" />
            Become{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 italic">
                Masterpieces
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-10 leading-relaxed font-light">
            Uncompromising quality meets exceptional service. We craft spaces that stand the test of time with{' '}
            <span className="text-white font-semibold">precision</span>,{' '}
            <span className="text-white font-semibold">integrity</span>, and{' '}
            <span className="text-white font-semibold">dedication</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
            <a
              href="#contact"
              className="group relative w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-5 rounded-full font-bold text-lg overflow-hidden shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center justify-center gap-3">
                Get Your Free Estimate
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
              </span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white px-8 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/20 transition-all border border-white/20 shadow-xl"
            >
              <Phone size={22} />
              {BUSINESS_INFO.phone}
            </a>
          </div>

          {/* Premium Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm font-semibold">
             <div className="flex items-center gap-3 text-white/90 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all">
                  <Shield size={20} className="text-white" />
                </div>
                <span>Licensed & Insured</span>
             </div>
             <div className="flex items-center gap-3 text-white/90 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all">
                  <Star size={20} className="text-white" />
                </div>
                <span>5-Star Rated</span>
             </div>
             <div className="flex items-center gap-3 text-white/90 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all">
                  <Award size={20} className="text-white" />
                </div>
                <span>Quality Guaranteed</span>
             </div>
          </div>
        </div>

        {/* Premium Lead Form */}
        <div className="w-full lg:w-2/5 animate-float relative">
          {/* Premium Badge - moved outside to prevent cropping */}
          <div className="absolute -top-3 -right-3 bg-charcoal text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-xl rotate-3 border-2 border-white z-10">
            24-HR RESPONSE ⚡
          </div>

          <div className="relative bg-white/95 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] shadow-2xl border border-charcoal/10 overflow-hidden">
            {/* Luxury Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-charcoal/5 to-transparent rounded-bl-[3rem]"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-charcoal/5 to-transparent rounded-tr-[3rem]"></div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-charcoal">Request a Quote</h3>
                  <p className="text-charcoal/60 text-sm font-semibold">Premium service starts here</p>
                </div>
              </div>

              <form className="space-y-4 mt-6">
                <div>
                  <label className="block text-sm font-bold text-charcoal/80 mb-2 ml-1">Service Needed</label>
                  <select className="w-full bg-cream/50 border-2 border-charcoal/10 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-charcoal/30 focus:border-charcoal/30 transition-all font-medium">
                    <option>Select a Service</option>
                    <option>Kitchen & Bath Remodeling</option>
                    <option>Premium Flooring</option>
                    <option>Custom Carpentry</option>
                    <option>Luxury Decks & Patios</option>
                    <option>Home Renovation</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-charcoal/80 mb-2 ml-1">Phone</label>
                    <input type="tel" placeholder="(206) 555-0100" className="w-full bg-cream/50 border-2 border-charcoal/10 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-charcoal/30 focus:border-charcoal/30 transition-all font-medium" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-charcoal/80 mb-2 ml-1">ZIP Code</label>
                    <input type="text" placeholder="98101" className="w-full bg-cream/50 border-2 border-charcoal/10 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-charcoal/30 focus:border-charcoal/30 transition-all font-medium" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-charcoal/80 mb-2 ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-cream/50 border-2 border-charcoal/10 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-charcoal/30 focus:border-charcoal/30 transition-all font-medium" />
                </div>
                <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-5 rounded-xl font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 active:scale-95 mt-2 border-2 border-amber-400/20">
                  Get My Free Quote →
                </button>
                <p className="text-xs text-center text-charcoal/50 mt-3">🔒 Your information is secure and confidential</p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
