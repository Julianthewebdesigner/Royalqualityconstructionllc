
import React, { useState } from 'react';
import Section from './Section';
import { FAQS } from '../constants';
import { ChevronDown, MessageCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <Section id="faq">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/3">
           <h2 className="text-5xl font-extrabold text-charcoal mb-6">FAQS</h2>
           <p className="text-charcoal/60 text-lg font-medium mb-10">
             Have questions? Here are some common things homeowners ask before starting a project with us.
           </p>
           <a 
             href="#contact" 
             className="inline-flex items-center gap-3 bg-white border-2 border-accent text-accent px-8 py-4 rounded-full font-bold hover:bg-accent hover:text-white transition-all shadow-lg active:scale-95"
           >
             <MessageCircle size={20} />
             Contact Us
           </a>
        </div>

        <div className="w-full lg:w-2/3">
           <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`border-b border-charcoal/10 transition-all duration-300 ${openIndex === idx ? 'pb-6' : 'pb-4'}`}
                >
                  <button 
                    className="w-full flex justify-between items-center text-left group"
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  >
                    <span className={`text-xl font-bold transition-colors ${openIndex === idx ? 'text-accent' : 'text-charcoal group-hover:text-accent/70'}`}>
                      {faq.question}
                    </span>
                    <div className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-accent' : 'text-charcoal/40'}`}>
                      <ChevronDown />
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-charcoal/60 font-medium leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
