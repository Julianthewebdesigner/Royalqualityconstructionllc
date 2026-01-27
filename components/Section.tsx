
import React, { useEffect, useRef, useState } from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, id, className = "", dark = false }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id={id} 
      className={`relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden ${dark ? 'bg-charcoal text-white' : 'bg-cream text-charcoal'} ${className}`}
    >
      <div className={`max-w-7xl mx-auto scroll-reveal ${isVisible ? 'visible' : ''}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
