import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Camera, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

type Category = 'All' | 'Exterior' | 'Kitchen' | 'Interior' | 'Structural';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<Category, 'All'>;
  description: string;
  cover: string;
  photos: string[];
  location: string;
}

const PROJECTS: Project[] = [
  {
    id: 'exterior-siding',
    title: 'Exterior Siding & Restoration',
    subtitle: 'Full siding replacement + rot repair',
    category: 'Exterior',
    location: 'Seattle, WA',
    description: 'Complete exterior transformation — old siding removed, rot damage repaired, and new siding installed with professional weatherproofing throughout.',
    cover: '/images/newsidingplusrepairs/newsidingplusrepairs%20(2)/IMG_20260223_152428.jpg',
    photos: [
      '/images/beforesidingexterior/beforesidingexterior/20250820_130123.jpg',
      '/images/beforesidingexterior/beforesidingexterior/20250820_130141.jpg',
      '/images/newsidingplusrepairs/newsidingplusrepairs%20(2)/IMG_20260223_152341.jpg',
      '/images/newsidingplusrepairs/newsidingplusrepairs%20(2)/IMG_20260223_152343.jpg',
      '/images/newsidingplusrepairs/newsidingplusrepairs%20(2)/IMG_20260223_152350.jpg',
      '/images/newsidingplusrepairs/newsidingplusrepairs%20(2)/IMG_20260223_152355.jpg',
      '/images/newsidingplusrepairs/newsidingplusrepairs%20(2)/IMG_20260223_152404.jpg',
      '/images/newsidingplusrepairs/newsidingplusrepairs%20(2)/IMG_20260223_152415.jpg',
      '/images/newsidingplusrepairs/newsidingplusrepairs%20(2)/IMG_20260223_152421.jpg',
      '/images/newsidingplusrepairs/newsidingplusrepairs%20(2)/IMG_20260223_152428.jpg',
      '/images/newsidingplusrepairs/newsidingplusrepairs%20(2)/IMG_20260223_152433.jpg',
      '/images/newsidingplusrepairs/newsidingplusrepairs%20(2)/IMG_20260223_152503.jpg',
      '/images/newsidingplusrepairs/newsidingplusrepairs%20(2)/IMG_20260223_152505.jpg',
      '/images/after/after/IMG_20260223_152922.jpg',
      '/images/after/after/IMG_20260223_152927.jpg',
      '/images/after/after/IMG_20260223_152932.jpg',
      '/images/after/after/IMG_20260223_152938.jpg',
      '/images/after/after/IMG_20260223_152947.jpg',
      '/images/after/after/IMG_20260223_152954.jpg',
      '/images/after/after/IMG_20260223_152957.jpg',
      '/images/after/after/IMG_20260223_153003.jpg',
      '/images/after/after/IMG_20260223_153022.jpg',
      '/images/after/after/IMG_20260223_153027.jpg',
    ],
  },
  {
    id: 'exterior-paint',
    title: 'Exterior Paint & Finishing',
    subtitle: 'Professional exterior painting',
    category: 'Exterior',
    location: 'Seattle, WA',
    description: 'Premium exterior painting delivering lasting protection and dramatically improved curb appeal with professional-grade materials and expert application.',
    cover: '/images/exteriorpaint/exteriorpaint/IMG_20260223_152805.jpg',
    photos: [
      '/images/exteriorpaint/exteriorpaint/IMG_20260223_152721.jpg',
      '/images/exteriorpaint/exteriorpaint/IMG_20260223_152724.jpg',
      '/images/exteriorpaint/exteriorpaint/IMG_20260223_152730.jpg',
      '/images/exteriorpaint/exteriorpaint/IMG_20260223_152736.jpg',
      '/images/exteriorpaint/exteriorpaint/IMG_20260223_152801.jpg',
      '/images/exteriorpaint/exteriorpaint/IMG_20260223_152805.jpg',
    ],
  },
  {
    id: 'rot-repair',
    title: 'Rot Repair & Structural Restoration',
    subtitle: 'Damage assessment + full repair',
    category: 'Structural',
    location: 'Seattle, WA',
    description: 'Thorough rot inspection and elimination restoring the home\'s structural integrity — protecting against water intrusion and long-term damage.',
    cover: '/images/Additional%20Rot%20Repair/Additional%20Rot%20Repair/IMG_20260223_181304.jpg',
    photos: [
      '/images/rotintentrance/rotinentrance%20(1)/20250628_130127.jpg',
      '/images/rotintentrance/rotinentrance%20(1)/20250628_130149.jpg',
      '/images/rotintentrance/rotinentrance%20(1)/20250628_130200.jpg',
      '/images/Additional%20Rot%20Repair/Additional%20Rot%20Repair/IMG_20260223_181154.jpg',
      '/images/Additional%20Rot%20Repair/Additional%20Rot%20Repair/IMG_20260223_181201.jpg',
      '/images/Additional%20Rot%20Repair/Additional%20Rot%20Repair/IMG_20260223_181249.jpg',
      '/images/Additional%20Rot%20Repair/Additional%20Rot%20Repair/IMG_20260223_181254.jpg',
      '/images/Additional%20Rot%20Repair/Additional%20Rot%20Repair/IMG_20260223_181304.jpg',
      '/images/Additional%20Rot%20Repair/Additional%20Rot%20Repair/IMG_20260223_181306.jpg',
      '/images/Additional%20Rot%20Repair/Additional%20Rot%20Repair/IMG_20260223_181309.jpg',
      '/images/Additional%20Rot%20Repair/Additional%20Rot%20Repair/IMG_20260223_181319.jpg',
    ],
  },
  {
    id: 'kitchen-remodel',
    title: 'Kitchen & Cabinet Installation',
    subtitle: 'Full kitchen renovation',
    category: 'Kitchen',
    location: 'Seattle, WA',
    description: 'Custom cabinet installation and complete kitchen renovation — bringing modern functionality and refined design to the heart of the home.',
    cover: '/images/kitcheninstall/kitcheninstall/20260106_133124.jpg',
    photos: [
      '/images/cabinetinstall/cabinetinstall/20251020_114558.jpg',
      '/images/cabinetinstall/cabinetinstall/20251020_114613.jpg',
      '/images/kitcheninstall/kitcheninstall/20260106_133041_01.jpg',
      '/images/kitcheninstall/kitcheninstall/20260106_133124.jpg',
      '/images/kitcheninstall/kitcheninstall/20260106_133135.jpg',
      '/images/kitcheninstall/kitcheninstall/20260106_133137.jpg',
    ],
  },
  {
    id: 'full-interior-remodel',
    title: 'Full Home Interior Remodel',
    subtitle: 'Gut renovation · open concept transformation',
    category: 'Interior',
    location: 'Seattle, WA',
    description: 'Complete interior gut-and-rebuild — demo to delivery. Walls opened for an open concept layout, new ceilings, bathrooms, and finish work throughout.',
    cover: '/images/after/after/image000001.jpg',
    photos: [
      '/images/photosbefore/photosbefore/20250628_125239.jpg',
      '/images/photosbefore/photosbefore/20250628_125247.jpg',
      '/images/photosbefore/photosbefore/20250628_125250.jpg',
      '/images/photosbefore/photosbefore/20250628_125256.jpg',
      '/images/photosbefore/photosbefore/20250628_125306.jpg',
      '/images/photosbefore/photosbefore/20250628_125322.jpg',
      '/images/photosbefore/photosbefore/20250628_125329.jpg',
      '/images/photosbefore/photosbefore/20250628_125402.jpg',
      '/images/bathroombefore/bathroombefore/20250628_125250.jpg',
      '/images/bathroombefore/bathroombefore/20250628_125256.jpg',
      '/images/bathroombefore/bathroombefore/20250628_125306.jpg',
      '/images/demoofwallbeforeonceplayout/demoofwallbeforeopenconceptlayout_/20250628_125322.jpg',
      '/images/demoofwallbeforeonceplayout/demoofwallbeforeopenconceptlayout_/20250628_125329.jpg',
      '/images/lowceilingphoto/lowceilingphoto/20250628_125513.jpg',
      '/images/lowceilingphoto/lowceilingphoto/20250628_125549.jpg',
      '/images/lowceilingphoto/lowceilingphoto/20250628_125555.jpg',
      '/images/lowceilingphoto/lowceilingphoto/20250628_125607.jpg',
      '/images/lowceilingphoto/lowceilingphoto/20250628_125625.jpg',
      '/images/after/after/image000000%20(3).jpg',
      '/images/after/after/image000000%20(4).jpg',
      '/images/after/after/image000001%20(1).jpg',
      '/images/after/after/image000001%20(2).jpg',
      '/images/after/after/image000001.jpg',
      '/images/after/after/image000004.jpg',
      '/images/after/after/image000007.jpg',
      '/images/after/after/image000008.jpg',
      '/images/after/after/image000009.jpg',
    ],
  },
  {
    id: 'bedroom-drywall',
    title: 'Upstairs Bedroom Renovation',
    subtitle: 'Drywall · framing · finish work',
    category: 'Interior',
    location: 'Seattle, WA',
    description: 'Full upstairs bedroom renovation including structural framing, drywall installation, taping, and professional finish work ready for paint.',
    cover: '/images/bedroomsupstairs/bedroomsupstairs/20260106_134132.jpg',
    photos: [
      '/images/drywallplatforms/drywallbedrooms%20(1)/20251020_114348.jpg',
      '/images/drywallplatforms/drywallbedrooms%20(1)/20251020_114445.jpg',
      '/images/drywallplatforms/drywallbedrooms%20(1)/20251020_114538.jpg',
      '/images/bedroomsupstairs/bedroomsupstairs/20260106_134043.jpg',
      '/images/bedroomsupstairs/bedroomsupstairs/20260106_134059.jpg',
      '/images/bedroomsupstairs/bedroomsupstairs/20260106_134132.jpg',
      '/images/bedroomsupstairs/bedroomsupstairs/20260106_134203.jpg',
      '/images/bedroomsupstairs/bedroomsupstairs/20260106_134225.jpg',
      '/images/bedroomsupstairs/bedroomsupstairs/20260106_134238.jpg',
    ],
  },
  {
    id: 'stairs-railings',
    title: 'Staircase & Railing Installation',
    subtitle: 'Custom railings · before & after',
    category: 'Interior',
    location: 'Seattle, WA',
    description: 'Custom staircase and railing installation from rough framing through finished hardwood — a precision showcase of our carpentry craftsmanship.',
    cover: '/images/stairsplusrailsbeforeandafter/stairsplusrailingbeforeandafter/IMG_20260223_152648.jpg',
    photos: [
      '/images/stairsplusrailsbeforeandafter/stairsplusrailingbeforeandafter/20250628_125853.jpg',
      '/images/stairsplusrailsbeforeandafter/stairsplusrailingbeforeandafter/20250628_125858.jpg',
      '/images/stairsplusrailsbeforeandafter/stairsplusrailingbeforeandafter/20250812_133326.jpg',
      '/images/stairsplusrailsbeforeandafter/stairsplusrailingbeforeandafter/20251020_114436.jpg',
      '/images/stairsplusrailsbeforeandafter/stairsplusrailingbeforeandafter/20251020_114440.jpg',
      '/images/stairsplusrailsbeforeandafter/stairsplusrailingbeforeandafter/IMG_20260223_152628.jpg',
      '/images/stairsplusrailsbeforeandafter/stairsplusrailingbeforeandafter/IMG_20260223_152632.jpg',
      '/images/stairsplusrailsbeforeandafter/stairsplusrailingbeforeandafter/IMG_20260223_152637.jpg',
      '/images/stairsplusrailsbeforeandafter/stairsplusrailingbeforeandafter/IMG_20260223_152648.jpg',
      '/images/stairsplusrailsbeforeandafter/stairsplusrailingbeforeandafter/IMG_20260223_152700.jpg',
      '/images/stairsplusrailsbeforeandafter/stairsplusrailingbeforeandafter/IMG_20260223_152708.jpg',
      '/images/stairsplusrailsbeforeandafter/stairsplusrailingbeforeandafter/IMG_20260223_152927.jpg',
      '/images/stairsplusrailsbeforeandafter/stairsplusrailingbeforeandafter/IMG_20260223_152932.jpg',
    ],
  },
  {
    id: 'structural-framing',
    title: 'New Construction Framing',
    subtitle: 'Structural framing · major renovation',
    category: 'Structural',
    location: 'Federal Way, WA',
    description: 'Full structural framing package for a major home renovation — precisely engineered for long-term structural integrity and design flexibility.',
    cover: '/images/fw/fw%20(1)/IMG-20250905-WA0027.jpg',
    photos: [
      '/images/fw/fw%20(1)/IMG-20250905-WA0012.jpg',
      '/images/fw/fw%20(1)/IMG-20250905-WA0015.jpg',
      '/images/fw/fw%20(1)/IMG-20250905-WA0018.jpg',
      '/images/fw/fw%20(1)/IMG-20250905-WA0021.jpg',
      '/images/fw/fw%20(1)/IMG-20250905-WA0024.jpg',
      '/images/fw/fw%20(1)/IMG-20250905-WA0027.jpg',
      '/images/fw/fw%20(1)/IMG-20250905-WA0030.jpg',
      '/images/fw/fw%20(1)/IMG-20250908-WA0013.jpg',
      '/images/fw/fw%20(1)/IMG-20250908-WA0016.jpg',
      '/images/fw/fw%20(1)/IMG-20250908-WA0019.jpg',
    ],
  },
];

const CATEGORIES: Category[] = ['All', 'Exterior', 'Kitchen', 'Interior', 'Structural'];

const CATEGORY_COLORS: Record<Exclude<Category, 'All'>, string> = {
  Exterior: 'bg-sky-900/60 text-sky-300',
  Kitchen: 'bg-amber-900/60 text-amber-300',
  Interior: 'bg-emerald-900/60 text-emerald-300',
  Structural: 'bg-rose-900/60 text-rose-300',
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [lightbox, setLightbox] = useState<{ projectId: string; imageIndex: number } | null>(null);

  useEffect(() => {
    document.title = 'Our Projects | Royal Quality Construction LLC';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Browse real project photos from Royal Quality Construction LLC — exterior siding, kitchen remodels, interior renovations, structural work, and more across Seattle, Tacoma, and Puyallup.');
    }
  }, []);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  const currentProject = lightbox ? PROJECTS.find(p => p.id === lightbox.projectId) : null;

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prevImage = useCallback(() => {
    if (!lightbox || !currentProject) return;
    setLightbox({
      projectId: lightbox.projectId,
      imageIndex: (lightbox.imageIndex - 1 + currentProject.photos.length) % currentProject.photos.length,
    });
  }, [lightbox, currentProject]);

  const nextImage = useCallback(() => {
    if (!lightbox || !currentProject) return;
    setLightbox({
      projectId: lightbox.projectId,
      imageIndex: (lightbox.imageIndex + 1) % currentProject.photos.length,
    });
  }, [lightbox, currentProject]);

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, closeLightbox, prevImage, nextImage]);

  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-charcoal pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.5) 60px, rgba(255,255,255,0.5) 61px)',
        }} />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-accent/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 text-sm font-semibold uppercase tracking-widest transition-colors mb-10"
          >
            <ChevronLeft size={14} />
            Back to Home
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="text-accent font-black uppercase tracking-widest text-sm mb-4">Portfolio</p>
              <h1 className="font-heading font-black text-5xl md:text-7xl text-white leading-none">
                Our <span className="text-accent">Work</span>
              </h1>
              <p className="text-white/50 text-xl mt-6 max-w-xl font-medium">
                Real projects. Real results. Every photo is from an actual job completed by our team across the greater Seattle area.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="text-5xl font-black text-white">{PROJECTS.length}</div>
                <div className="text-white/40 text-sm font-bold uppercase tracking-widest">Projects</div>
              </div>
              <div className="w-px h-16 bg-white/10" />
              <div className="text-right">
                <div className="text-5xl font-black text-white">
                  {PROJECTS.reduce((acc, p) => acc + p.photos.length, 0)}
                </div>
                <div className="text-white/40 text-sm font-bold uppercase tracking-widest">Photos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-[72px] z-40 bg-charcoal/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-accent text-white shadow-lg shadow-accent/30'
                    : 'text-white/50 hover:text-white border border-white/10 hover:border-white/30'
                }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="ml-2 opacity-60">
                    {PROJECTS.filter(p => p.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="bg-[#111111] min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <div
                key={project.id}
                className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-accent/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/10"
                style={{ animationDelay: `${i * 50}ms` }}
                onClick={() => setLightbox({ projectId: project.id, imageIndex: 0 })}
              >
                {/* Cover Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-sm ${CATEGORY_COLORS[project.category]}`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Photo count */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white/80 text-xs font-bold px-3 py-1.5 rounded-full">
                    <Camera size={11} />
                    {project.photos.length}
                  </div>

                  {/* View gallery CTA — appears on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-accent text-white font-bold text-sm px-6 py-3 rounded-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                      View Gallery
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-heading font-black text-white text-lg leading-tight group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-wider mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-white/55 text-sm leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-white/30 text-xs font-semibold">
                    <MapPin size={11} />
                    {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-32 text-white/30">
              <Camera size={48} className="mx-auto mb-4 opacity-30" />
              <p className="text-xl font-bold">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-accent py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white text-xl mb-10 font-medium" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.25)' }}>
            Every project you just saw started with a free estimate. Let's talk about yours.
          </p>
          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="inline-flex items-center gap-3 bg-charcoal text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl"
          >
            <Phone size={20} />
            Call {BUSINESS_INFO.phone}
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox && currentProject && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <X size={20} />
          </button>

          {/* Top bar */}
          <div className="absolute top-5 left-5 right-20 flex items-center gap-4 z-10">
            <div>
              <p className="text-white font-black text-lg leading-none">{currentProject.title}</p>
              <p className="text-white/40 text-sm mt-1 font-medium">
                {lightbox.imageIndex + 1} / {currentProject.photos.length}
              </p>
            </div>
          </div>

          {/* Prev Button */}
          <button
            className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-sm"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image */}
          <div
            className="w-full h-full flex items-center justify-center p-20 md:p-24"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={currentProject.photos[lightbox.imageIndex]}
              src={currentProject.photos[lightbox.imageIndex]}
              alt={`${currentProject.title} — photo ${lightbox.imageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              style={{ maxHeight: 'calc(100vh - 120px)' }}
            />
          </div>

          {/* Next Button */}
          <button
            className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-sm"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Thumbnail strip */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex gap-2 overflow-x-auto justify-center max-w-4xl mx-auto pb-2">
              {currentProject.photos.map((photo, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightbox({ projectId: currentProject.id, imageIndex: i }); }}
                  className={`flex-shrink-0 w-14 h-10 rounded overflow-hidden transition-all ${
                    i === lightbox.imageIndex
                      ? 'ring-2 ring-accent opacity-100 scale-110'
                      : 'opacity-40 hover:opacity-70'
                  }`}
                >
                  <img src={photo} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
