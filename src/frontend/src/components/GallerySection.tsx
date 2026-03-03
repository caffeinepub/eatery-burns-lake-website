import { X, ZoomIn } from "lucide-react";
import React, { useState } from "react";

const galleryImages = [
  {
    src: "/assets/generated/hero-pasta.dim_1400x800.jpg",
    alt: "Signature pasta dishes at ILONA Pasta",
    wide: true,
  },
  {
    src: "/assets/generated/truffle-pasta.dim_800x600.jpg",
    alt: "Luxurious truffle pasta",
    wide: false,
  },
  {
    src: "/assets/generated/seafood-pasta.dim_600x500.jpg",
    alt: "Seafood spaghetti with fresh prawns and mussels",
    wide: false,
  },
  {
    src: "/assets/generated/carbonara.dim_600x500.jpg",
    alt: "Fettuccini Carbonarax",
    wide: false,
  },
  {
    src: "/assets/generated/bruschetta.dim_600x500.jpg",
    alt: "Fresh Italian bruschetta starter",
    wide: false,
  },
  {
    src: "/assets/generated/tiramisu.dim_600x500.jpg",
    alt: "Classic Italian tiramisu dessert",
    wide: false,
  },
  {
    src: "/assets/generated/restaurant-interior.dim_800x600.jpg",
    alt: "ILONA Pasta intimate dining interior",
    wide: false,
  },
  {
    src: "/assets/generated/restaurant-exterior.dim_800x600.jpg",
    alt: "ILONA Pasta restaurant exterior",
    wide: false,
  },
];

export default function GallerySection() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState("");

  const openLightbox = (src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  };

  const closeLightbox = () => setLightboxSrc(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-espresso-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-body text-gold-400 text-sm font-semibold tracking-[0.3em] uppercase">
            Visual Journey
          </span>
          <h2 className="font-heading text-ivory-100 text-4xl md:text-5xl font-bold mt-3 mb-4 leading-tight">
            A Taste of <span className="italic text-gold-400">ILONA</span>
          </h2>
          <p className="font-body text-ivory-300 text-lg max-w-lg mx-auto">
            Every dish tells a story of family, passion, and authentic Italian
            craft.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <button
            type="button"
            className="col-span-2 row-span-1 relative overflow-hidden cursor-pointer group shadow-warm-xl text-left p-0 border-0 bg-transparent"
            onClick={() =>
              openLightbox(galleryImages[0].src, galleryImages[0].alt)
            }
            aria-label={`View: ${galleryImages[0].alt}`}
          >
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="font-body text-ivory-100 text-sm font-medium">
                {galleryImages[0].alt}
              </span>
            </div>
            <div className="absolute top-3 right-3 w-8 h-8 bg-ivory-100/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ZoomIn size={14} className="text-espresso-700" />
            </div>
          </button>

          {galleryImages.slice(1).map((img, i) => (
            <button
              type="button"
              key={img.src}
              className="relative overflow-hidden cursor-pointer group shadow-warm p-0 border-0 bg-transparent"
              onClick={() => openLightbox(img.src, img.alt)}
              aria-label={`View: ${img.alt}`}
              style={{ animationDelay: `${(i + 1) * 0.08}s` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="font-body text-ivory-100 text-xs font-medium leading-tight">
                  {img.alt}
                </span>
              </div>
              <div className="absolute top-2 right-2 w-7 h-7 bg-ivory-100/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn size={12} className="text-espresso-700" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-espresso-900/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 bg-ivory-100/10 hover:bg-ivory-100/20 rounded-full flex items-center justify-center text-ivory-100 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>
          <div className="max-w-5xl w-full">
            <img
              src={lightboxSrc}
              alt={lightboxAlt}
              className="w-full max-h-[80vh] object-contain rounded-sm shadow-warm-xl"
            />
            <p className="font-body text-ivory-300 text-sm text-center mt-3">
              {lightboxAlt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
