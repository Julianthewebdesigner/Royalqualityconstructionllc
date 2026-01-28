import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import ImageSlider from '../components/ImageSlider';
import About from '../components/About';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  useEffect(() => {
    // Reset page title and meta description for home page
    document.title = 'Royal Quality Construction LLC | Seattle, Tacoma, Puyallup Contractor';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Quality remodeling, framing, and construction services in Seattle, Tacoma, and Puyallup, WA. Get a free estimate today from Royal Quality Construction LLC.'
      );
    }

    // Add JSON-LD structured data for home page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "name": "Royal Quality Construction LLC",
      "image": "/images/framing-carpentry.jpeg",
      "description": "Quality construction and remodeling services in Seattle, Tacoma, and Puyallup, WA. Specializing in home renovations, flooring, drywall, painting, tile work, framing, carpentry, decks, and siding.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Seattle",
        "addressRegion": "WA",
        "addressCountry": "US"
      },
      "telephone": "206-856-1486",
      "email": "royalqualityconstruction.llc@gmail.com",
      "areaServed": [
        {
          "@type": "City",
          "name": "Seattle"
        },
        {
          "@type": "City",
          "name": "Tacoma"
        },
        {
          "@type": "City",
          "name": "Puyallup"
        },
        {
          "@type": "City",
          "name": "Bellevue"
        },
        {
          "@type": "City",
          "name": "Kirkland"
        },
        {
          "@type": "City",
          "name": "Renton"
        },
        {
          "@type": "City",
          "name": "Kent"
        },
        {
          "@type": "City",
          "name": "Federal Way"
        }
      ],
      "priceRange": "$$",
      "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-15:00"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Hero />

      <ImageSlider />

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
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex gap-12 text-2xl font-black italic uppercase tracking-widest text-white">
                <span>Seattle</span>
                <span>•</span>
                <span>Tacoma</span>
                <span>•</span>
                <span>Puyallup</span>
                <span>•</span>
                <span>Bellevue</span>
                <span>•</span>
                <span>Kirkland</span>
                <span>•</span>
                <span>Renton</span>
                <span>•</span>
                <span>Kent</span>
                <span>•</span>
                <span>Federal Way</span>
                <span>•</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
};

export default Home;
