import React from 'react';
import { UtensilsCrossed, ShoppingBag, CalendarDays } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.png')" }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, rgba(8,4,2,0.82) 0%, rgba(25,8,5,0.72) 40%, rgba(8,4,2,0.88) 100%)',
        }}
        aria-hidden="true"
      />
      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-56"
        style={{ background: 'linear-gradient(to top, rgba(8,4,2,0.92) 0%, transparent 100%)' }}
        aria-hidden="true"
      />
      {/* Top red accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gochujang-600 via-gochujang-400 to-gochujang-600"
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-24">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-gochujang-400/60" />
          <span className="font-korean text-gochujang-400 text-xs tracking-[0.35em] uppercase font-semibold">
            Griffith NSW, Australia
          </span>
          <div className="h-px w-12 bg-gochujang-400/60" />
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-5 text-shadow-bold">
          Authentic Korean<br />
          <span className="text-gochujang-400">Street Food</span><br />
          in Griffith
        </h1>

        <p className="font-body text-cream-200 text-lg sm:text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl mx-auto opacity-90 tracking-wide">
          Fresh&nbsp;•&nbsp;Flavorful&nbsp;•&nbsp;Made with Love
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('menu')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 font-body font-bold text-base px-8 py-4 rounded-full bg-gochujang-500 hover:bg-gochujang-400 text-white transition-all duration-200 shadow-korean-lg hover:shadow-glow hover:-translate-y-0.5 tracking-wide"
          >
            <UtensilsCrossed size={18} />
            View Menu
          </button>
          <button
            onClick={() => scrollToSection('order')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 font-body font-bold text-base px-8 py-4 rounded-full bg-gold-500 hover:bg-gold-400 text-charcoal-900 transition-all duration-200 shadow-korean hover:shadow-korean-lg hover:-translate-y-0.5 tracking-wide"
          >
            <ShoppingBag size={18} />
            Order Online
          </button>
          <button
            onClick={() => scrollToSection('reservation')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 font-body font-bold text-base px-8 py-4 rounded-full border-2 border-white/50 hover:border-cream-200 text-white hover:text-cream-100 transition-all duration-200 hover:-translate-y-0.5 tracking-wide"
          >
            <CalendarDays size={18} />
            Book a Table
          </button>
        </div>

        {/* Rating badge */}
        <div className="mt-10 flex items-center justify-center gap-2">
          <div className="flex items-center gap-0.5">
            {[1,2,3,4].map((s) => (
              <span key={s} className="text-gold-400 text-xl">★</span>
            ))}
            <span className="text-gold-400 text-xl">★</span>
          </div>
          <span className="font-body text-cream-200 text-sm">
            <strong className="text-white">4.7</strong> stars · Google Reviews
          </span>
        </div>
      </div>
    </section>
  );
}
