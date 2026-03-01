import React from 'react';
import { MapPin, Phone, Heart } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="py-20 bg-cream-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-10 bg-gochujang-500 rounded-full" />
              <span className="font-body text-gochujang-500 text-xs tracking-[0.3em] uppercase font-bold">
                Our Story
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-700 mb-6 leading-tight">
              A Taste of Korea in Griffith
            </h2>
            <p className="font-body text-charcoal-400 text-base sm:text-lg leading-relaxed mb-6">
              Bunsik Korean Restaurant brings the taste of authentic Korean street food and traditional meals to Griffith. From crispy Korean fried chicken to sizzling bulgogi and comforting stews, we serve bold flavors in a casual, family-friendly atmosphere.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gochujang-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-charcoal-600 text-sm font-semibold">Shop 1/2 Yambil St, Griffith NSW 2680</p>
                  <p className="font-body text-charcoal-400 text-sm">Located in Griffin Plaza</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gochujang-500 flex-shrink-0" />
                <a
                  href="tel:+61269647310"
                  className="font-body text-gochujang-500 text-sm font-bold hover:text-gochujang-400 transition-colors"
                >
                  +61 2 6964 7310
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Heart size={20} className="text-gochujang-500 fill-gochujang-500" />
              <span className="font-body text-charcoal-500 text-sm italic">Made with love in Griffith, NSW</span>
            </div>
          </div>

          {/* Visual accent */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-korean-xl">
              <img
                src="/assets/generated/bibimbap.dim_600x400.png"
                alt="Delicious Korean food at Bunsik"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/20">
                  <p className="font-heading text-white text-lg font-bold">Signature Bibimbap</p>
                  <p className="font-body text-cream-200 text-sm">A Korean classic, made fresh daily</p>
                </div>
              </div>
            </div>
            {/* Decorative badge */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gochujang-500 rounded-full flex flex-col items-center justify-center shadow-korean-lg border-4 border-cream-100">
              <span className="font-heading text-white text-xl font-extrabold leading-none">4.7</span>
              <span className="text-gold-300 text-xs leading-none">★★★★★</span>
              <span className="font-body text-cream-200 text-[9px] leading-none mt-0.5">Stars</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
