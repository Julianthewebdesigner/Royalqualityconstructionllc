import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera } from 'lucide-react';

const FEATURED = [
  {
    src: '/images/kitcheninstall/kitcheninstall/20260106_133124.jpg',
    label: 'Kitchen Remodel',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: '/images/newsidingplusrepairs/newsidingplusrepairs%20(2)/IMG_20260223_152428.jpg',
    label: 'Exterior Siding',
    span: '',
  },
  {
    src: '/images/stairsplusrailsbeforeandafter/stairsplusrailingbeforeandafter/IMG_20260223_152648.jpg',
    label: 'Staircase & Railings',
    span: '',
  },
  {
    src: '/images/bedroomsupstairs/bedroomsupstairs/20260106_134132.jpg',
    label: 'Bedroom Renovation',
    span: '',
  },
  {
    src: '/images/exteriorpaint/exteriorpaint/IMG_20260223_152805.jpg',
    label: 'Exterior Paint',
    span: '',
  },
  {
    src: '/images/fw/fw%20(1)/IMG-20250905-WA0027.jpg',
    label: 'Structural Framing',
    span: '',
  },
];

const STATS = [
  { value: '8+', label: 'Projects Shown' },
  { value: '100+', label: 'Photos' },
  { value: '5★', label: 'Client Reviews' },
];

const ProjectsPreview: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="bg-[#0f0f0f] py-24 md:py-32 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <p className="text-accent font-black uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-accent" />
              Our Portfolio
            </p>
            <h2 className="font-heading font-black text-4xl md:text-6xl text-white leading-none">
              Work That <br />
              <span className="text-accent">Speaks for Itself</span>
            </h2>
            <p className="text-white/50 text-lg mt-5 max-w-lg font-medium leading-relaxed">
              Every project below is real work completed by our team — no stock photos, no fluff. Just craftsmanship.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-8 md:gap-12 shrink-0">
            {STATS.map(stat => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-black text-3xl md:text-4xl text-white">{stat.value}</div>
                <div className="text-white/30 text-xs font-bold uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 gap-3 md:gap-4 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ gridAutoRows: '220px' }}>
          {FEATURED.map((item, i) => (
            <Link
              to="/projects"
              key={i}
              className={`group relative overflow-hidden rounded-xl bg-white/5 ${item.span}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-bold text-sm">{item.label}</p>
              </div>
              {/* Subtle always-visible label for large tile */}
              {i === 0 && (
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                    Featured
                  </span>
                </div>
              )}
            </Link>
          ))}
        </div>

        {/* CTA Row */}
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-6 mt-10 pt-10 border-t border-white/10 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-3 text-white/40 text-sm font-semibold">
            <Camera size={16} />
            <span>
              {[8, 8, 3, 6, 2, 2, 2, 3, 6, 11, 4, 5, 11, 8, 3, 13].reduce((a, b) => a + b, 0)}+ photos across {8} projects
            </span>
          </div>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 bg-accent text-white font-bold px-8 py-4 rounded-full hover:bg-accent/90 hover:scale-105 transition-all shadow-lg shadow-accent/20 text-sm uppercase tracking-wide"
          >
            View All Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
