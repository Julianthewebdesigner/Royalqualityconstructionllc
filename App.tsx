
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative">
      {/* Light beam texture overlay */}
      <div className="beam-overlay"></div>
      
      <Header />
      
      <main>
        <Hero />
        
        <div className="bg-cream">
           <About />
        </div>
        
        <Services />
        
        <FAQ />
        
        <Contact />

        {/* Areas Cover Strip */}
        <div className="bg-charcoal py-8 border-t border-white/5">
           <div className="max-w-7xl mx-auto px-4 overflow-hidden">
              <div className="flex items-center gap-12 whitespace-nowrap animate-[marquee_30s_linear_infinite] opacity-30">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="flex gap-12 text-2xl font-black italic uppercase tracking-widest text-white">
                      <span>Seattle</span>
                      <span>•</span>
                      <span>Bellevue</span>
                      <span>•</span>
                      <span>Kirkland</span>
                      <span>•</span>
                      <span>Shoreline</span>
                      <span>•</span>
                      <span>Everett</span>
                      <span>•</span>
                      <span>Tacoma</span>
                      <span>•</span>
                      <span>Bothell</span>
                      <span>•</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </main>

      <Footer />

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 right-6 z-[90] md:hidden flex flex-col gap-3">
         <a 
           href="tel:2068561486" 
           className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce"
         >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
         </a>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default App;
