
import React from 'react';
import Section from './Section';
import { BUSINESS_INFO } from '../constants';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="pb-0 overflow-visible">
      <div className="bg-charcoal rounded-[3rem] p-8 md:p-16 lg:p-20 text-white shadow-3xl relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to Build Something <span className="text-accent italic">Great?</span></h2>
            <p className="text-white/60 text-lg font-medium mb-12 max-w-md">
              Tell us what you need—we'll respond ASAP with a detailed timeline and pricing overview.
            </p>

            <div className="space-y-8">
               <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                     <Phone size={28} className="text-accent group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block text-white/40 text-xs font-black uppercase tracking-widest mb-1">Direct Call</span>
                    <span className="text-2xl font-bold group-hover:text-accent transition-colors">{BUSINESS_INFO.phone}</span>
                  </div>
               </a>
               <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                     <Mail size={28} className="text-accent group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block text-white/40 text-xs font-black uppercase tracking-widest mb-1">Email Us</span>
                    <span className="text-xl font-bold group-hover:text-accent transition-colors break-all">{BUSINESS_INFO.email}</span>
                  </div>
               </a>
               <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                     <MapPin size={28} className="text-accent" />
                  </div>
                  <div>
                    <span className="block text-white/40 text-xs font-black uppercase tracking-widest mb-1">Service Area</span>
                    <span className="text-xl font-bold">{BUSINESS_INFO.serviceArea}</span>
                  </div>
               </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
               <h4 className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-6">Areas We Cover</h4>
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm font-bold text-white/60">
                  <span>Downtown Seattle</span>
                  <span>Bellevue</span>
                  <span>Kirkland</span>
                  <span>Ballard</span>
                  <span>Capitol Hill</span>
                  <span>Shoreline</span>
                  <span>Renton</span>
                  <span>Kent</span>
                  <span>Everett</span>
               </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 border border-white/10 shadow-2xl">
             <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                     <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-2">Your Name</label>
                     <input type="text" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 text-white transition-all placeholder:text-white/20" placeholder="Jane Smith" />
                   </div>
                   <div>
                     <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-2">Phone Number</label>
                     <input type="tel" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 text-white transition-all placeholder:text-white/20" placeholder="(206) --- ----" />
                   </div>
                </div>
                <div>
                   <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-2">Project Type</label>
                   <select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 text-white transition-all">
                      <option className="bg-charcoal">Remodeling</option>
                      <option className="bg-charcoal">Flooring</option>
                      <option className="bg-charcoal">Exterior / Deck</option>
                      <option className="bg-charcoal">Other</option>
                   </select>
                </div>
                <div>
                   <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-2">Project Details</label>
                   <textarea rows={4} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 text-white transition-all placeholder:text-white/20" placeholder="Tell us about your project..."></textarea>
                </div>
                <button className="w-full bg-accent hover:bg-white hover:text-charcoal text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-accent/10 flex items-center justify-center gap-3 active:scale-95">
                  Send Message
                  <Send size={20} />
                </button>
             </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
