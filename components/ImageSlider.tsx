import React from 'react';

const ImageSlider: React.FC = () => {
  // Construction images for the slider
  const images = [
    { src: '/assets/images/remodeling-repair.jpeg', alt: 'Home Remodeling' },
    { src: '/assets/images/flooring.jpeg', alt: 'Flooring Installation' },
    { src: '/assets/images/drywall 2.jpeg', alt: 'Drywall & Painting' },
    { src: '/assets/images/tile.jpeg', alt: 'Custom Tile Work' },
    { src: '/assets/images/framing-carpentry.jpeg', alt: 'Framing & Carpentry' },
    { src: '/assets/images/Deck.jpeg', alt: 'Deck & Exterior' },
  ];

  // Double the images array for seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full py-8 bg-gradient-to-b from-black via-neutral-950 to-white overflow-hidden border-y border-amber-500/20">
      {/* Subtle gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>

      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

      {/* Sliding container with animation */}
      <div className="flex gap-6 animate-slide">
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-40 rounded-xl overflow-hidden shadow-xl border border-amber-500/10 group"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* Subtle gold accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>

      {/* Optional: Add construction pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(251,191,36,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.5)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
    </div>
  );
};

export default ImageSlider;
