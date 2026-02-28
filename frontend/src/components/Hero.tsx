import React from 'react';
import { Phone, MapPin, ShoppingBag } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/lunas-hero-bg.dim_1440x800.jpg')" }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, rgba(10,5,3,0.78) 0%, rgba(30,10,5,0.70) 40%, rgba(8,4,2,0.85) 100%)',
        }}
        aria-hidden="true"
      />
      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-56"
        style={{ background: 'linear-gradient(to top, rgba(10,5,3,0.90) 0%, transparent 100%)' }}
        aria-hidden="true"
      />
      {/* Top red accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-chili-500 via-salsa-400 to-chili-500" aria-hidden="true" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-24">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-salsa-400/60" />
          <span className="font-body text-salsa-400 text-xs tracking-[0.35em] uppercase font-semibold">
            Los Lunas, New Mexico
          </span>
          <div className="h-px w-12 bg-salsa-400/60" />
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5 text-shadow-bold uppercase tracking-wide">
          Authentic Flavor.<br />
          <span className="text-salsa-400">Fresh Ingredients.</span><br />
          Made with Love.
        </h1>

        <p className="font-body text-cream-200 text-lg sm:text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl mx-auto opacity-90">
          Los Lunas' Favorite Spot for Tacos, Burritos &amp; Burgers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+15054884886"
            className="w-full sm:w-auto flex items-center justify-center gap-2 font-body font-bold text-base px-8 py-4 rounded-full bg-chili-500 hover:bg-chili-400 text-white transition-all duration-200 shadow-spicy-lg hover:shadow-glow hover:-translate-y-0.5 tracking-wide"
          >
            <Phone size={18} />
            Call Now
          </a>
          <a
            href="https://maps.google.com/?q=3470+NM-47,+Los+Lunas,+NM+87031"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 font-body font-bold text-base px-8 py-4 rounded-full bg-salsa-400 hover:bg-salsa-300 text-ink-900 transition-all duration-200 shadow-spicy hover:shadow-spicy-lg hover:-translate-y-0.5 tracking-wide"
          >
            <MapPin size={18} />
            Get Directions
          </a>
          <button
            onClick={() => alert('Online ordering coming soon! Call us at +1 505-488-4886 to place your order.')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 font-body font-bold text-base px-8 py-4 rounded-full border-2 border-white/50 hover:border-cream-200 text-white hover:text-cream-100 transition-all duration-200 hover:-translate-y-0.5 tracking-wide"
          >
            <ShoppingBag size={18} />
            Order Takeout
          </button>
        </div>

        {/* Rating badge */}
        <div className="mt-10 flex items-center justify-center gap-2">
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map((s) => (
              <span key={s} className="text-salsa-400 text-lg">★</span>
            ))}
          </div>
          <span className="font-body text-cream-200 text-sm">
            <strong className="text-white">4.9</strong> stars · 137 reviews
          </span>
        </div>
      </div>
    </section>
  );
}
