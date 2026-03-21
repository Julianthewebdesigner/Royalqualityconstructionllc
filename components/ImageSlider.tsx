import React from 'react';

const ImageSlider: React.FC = () => {
  // Project photos for the slider
  const images = [
    { src: '/images/kitcheninstall/kitcheninstall/20260106_133124.jpg', alt: 'Kitchen Remodel' },
    { src: '/images/newsidingplusrepairs/newsidingplusrepairs%20(2)/IMG_20260223_152428.jpg', alt: 'Exterior Siding' },
    { src: '/images/after/after/IMG_20260223_152922.jpg', alt: 'Exterior Restoration' },
    { src: '/images/stairsplusrailsbeforeandafter/stairsplusrailingbeforeandafter/IMG_20260223_152648.jpg', alt: 'Staircase & Railings' },
    { src: '/images/bedroomsupstairs/bedroomsupstairs/20260106_134132.jpg', alt: 'Bedroom Renovation' },
    { src: '/images/exteriorpaint/exteriorpaint/IMG_20260223_152805.jpg', alt: 'Exterior Paint' },
    { src: '/images/after/after/image000001.jpg', alt: 'Interior Remodel' },
    { src: '/images/fw/fw%20(1)/IMG-20250905-WA0027.jpg', alt: 'Structural Framing' },
    { src: '/images/kitcheninstall/kitcheninstall/20260106_133135.jpg', alt: 'Kitchen Finish Work' },
    { src: '/images/after/after/IMG_20260223_152927.jpg', alt: 'Completed Exterior' },
  ];

  // Double the images array for seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full max-w-[100vw] py-8 bg-gradient-to-b from-black via-neutral-950 to-white overflow-hidden border-y border-amber-500/20">
      {/* Subtle gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>

      {/* Gradient overlays for fade effect - responsive widths */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

      {/* Sliding container with animation */}
      <div className="flex gap-3 md:gap-6 animate-slide">
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 md:w-64 h-32 md:h-40 rounded-xl overflow-hidden shadow-xl border border-amber-500/10 group"
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
