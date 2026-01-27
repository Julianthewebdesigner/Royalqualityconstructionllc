
import React from 'react';
import Section from './Section';
import { BENEFITS } from '../constants';
import { Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" className="overflow-visible">
      {/* Visual background text */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.03] select-none pointer-events-none">
          <span className="text-[20rem] font-extrabold leading-none font-heading whitespace-nowrap">ROYAL</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/2">
          <div className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-lg text-xs font-bold mb-4">
            WHY CHOOSE US
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Our Benefits & <span className="text-accent">Commitment</span>
          </h2>
          <p className="text-lg text-charcoal/70 mb-8 font-medium italic">
            "We keep things simple, honest, and focused on what matters most to you: high-quality results delivered with zero headache."
          </p>
          <p className="text-charcoal/70 mb-10 leading-relaxed">
            Working with Royal Quality Construction means less stress and better results. We show up on time, keep you informed, and do what we say we'll do. From start to finish, we stay focused on your goals, your budget, and the quality you expect for your Seattle home.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="flex flex-col gap-3 group">
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-md border border-charcoal/5 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold">{benefit.title}</h4>
                <p className="text-sm text-charcoal/60 leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative">
           <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="/assets/images/Seattleimage.jpeg"
                alt="Seattle Washington"
                className="w-full h-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                 <div className="flex gap-1 mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#D95D2B" color="#D95D2B" />)}
                 </div>
                 <p className="text-charcoal font-bold text-lg mb-1 leading-snug">
                   "Fantastic work! Professional, careful, and high-quality results on our deck and siding. Highly recommend!"
                 </p>
                 <span className="text-charcoal/60 font-bold text-sm">— Emily Rowland, Seattle Resident</span>
              </div>
           </div>
           
           {/* Decorative elements */}
           <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
           <div className="absolute top-1/2 -left-12 -translate-y-1/2 flex flex-col gap-4">
              <div className="w-24 h-24 bg-accent rounded-3xl flex flex-col items-center justify-center text-white shadow-xl rotate-3">
                  <span className="text-2xl font-black">15+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Years Exp</span>
              </div>
              <div className="w-24 h-24 bg-charcoal rounded-3xl flex flex-col items-center justify-center text-white shadow-xl -rotate-6">
                  <span className="text-2xl font-black">500+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Projects</span>
              </div>
           </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
