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
    document.title = 'Royal Quality Construction LLC | Premium Home Remodeling & Construction Services in Seattle, Tacoma, Puyallup';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Transform your home with Royal Quality Construction LLC. Expert remodeling, flooring, drywall, painting, custom tile, framing, carpentry, decks & siding. Serving Seattle, Tacoma & Puyallup with uncompromising quality, precision craftsmanship & exceptional service. Licensed & insured. Free estimates. Where plans become masterpieces.'
      );
    }

    // Reset Open Graph and Twitter meta tags for home page
    const updateOrCreateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateMeta('og:type', 'website');
    updateOrCreateMeta('og:url', 'https://royalqualityconstructionllc.com');
    updateOrCreateMeta('og:title', 'Royal Quality Construction LLC | Premium Home Remodeling & Construction');
    updateOrCreateMeta('og:description', 'Transform your home with expert remodeling, flooring, custom tile, framing & more. Serving Seattle, Tacoma & Puyallup with precision craftsmanship & exceptional service. Licensed & insured. Free estimates.');
    updateOrCreateMeta('og:image', 'https://royalqualityconstructionllc.com/assets/images/BlackRYC.jpeg');
    updateOrCreateMeta('og:image:width', '1200');
    updateOrCreateMeta('og:image:height', '630');
    updateOrCreateMeta('og:image:alt', 'Royal Quality Construction LLC - Premium Construction & Remodeling Services');

    updateOrCreateMeta('twitter:card', 'summary_large_image');
    updateOrCreateMeta('twitter:url', 'https://royalqualityconstructionllc.com');
    updateOrCreateMeta('twitter:title', 'Royal Quality Construction LLC | Premium Home Remodeling & Construction');
    updateOrCreateMeta('twitter:description', 'Transform your home with expert remodeling, flooring, custom tile, framing & more. Serving Seattle, Tacoma & Puyallup with precision craftsmanship & exceptional service. Licensed & insured. Free estimates.');
    updateOrCreateMeta('twitter:image', 'https://royalqualityconstructionllc.com/assets/images/BlackRYC.jpeg');
    updateOrCreateMeta('twitter:image:alt', 'Royal Quality Construction LLC - Premium Construction & Remodeling Services');

    // Add JSON-LD structured data for home page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "name": "Royal Quality Construction LLC",
      "image": "https://royalqualityconstructionllc.com/assets/images/BlackRYC.jpeg",
      "description": "Transform your home with Royal Quality Construction LLC. Expert remodeling, flooring, drywall, painting, custom tile, framing, carpentry, decks & siding. Serving Seattle, Tacoma & Puyallup with uncompromising quality, precision craftsmanship & exceptional service.",
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
