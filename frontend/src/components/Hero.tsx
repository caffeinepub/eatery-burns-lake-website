import React from 'react';
import { Phone, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToMenu = () => {
    const el = document.getElementById('menu-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-bg.dim_1440x800.jpg')" }}
        aria-hidden="true"
      />

      {/* Warm overlay — deep amber-to-brown gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, rgba(30,15,5,0.72) 0%, rgba(60,25,8,0.65) 40%, rgba(20,10,3,0.80) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Warm glow at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{
          background:
            'linear-gradient(to top, rgba(140,60,15,0.35) 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-amber-400/60" />
          <span className="font-body text-amber-300/80 text-xs tracking-[0.3em] uppercase">
            Burns Lake, BC
          </span>
          <div className="h-px w-12 bg-amber-400/60" />
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 text-shadow-warm">
          🔥 Cozy Dining Experience
          <span className="block text-amber-300 italic mt-1">
            in the Heart of Burns Lake
          </span>
        </h1>

        <p className="font-body text-wood-100 text-lg sm:text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl mx-auto opacity-90">
          Enjoy delicious meals, warm fireplace seating, and live music at Eatery Burns Lake.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToMenu}
            className="w-full sm:w-auto font-body font-bold text-base px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-wood-900 transition-all duration-200 shadow-warm-lg hover:shadow-glow hover:-translate-y-0.5 tracking-wide"
          >
            View Menu
          </button>
          <a
            href="tel:+12502515445"
            className="w-full sm:w-auto font-body font-bold text-base px-8 py-4 rounded-full border-2 border-white/60 hover:border-amber-300 text-white hover:text-amber-300 transition-all duration-200 hover:-translate-y-0.5 tracking-wide text-center"
          >
            <Phone size={16} className="inline mr-2 -mt-0.5" />
            Call Now
          </a>
        </div>

        {/* Scroll hint */}
        <button
          onClick={scrollToAbout}
          className="mt-16 flex flex-col items-center gap-2 text-white/50 hover:text-amber-300/80 transition-colors mx-auto"
          aria-label="Scroll down"
        >
          <span className="font-body text-xs tracking-widest uppercase">Discover More</span>
          <ChevronDown size={20} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
