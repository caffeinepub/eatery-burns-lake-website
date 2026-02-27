import React from 'react';
import { Phone } from 'lucide-react';

export default function CallToAction() {
  return (
    <section
      id="cta-section"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, oklch(0.46 0.13 35) 0%, oklch(0.38 0.11 34) 40%, oklch(0.32 0.07 45) 100%)',
      }}
    >
      {/* Warm radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, oklch(0.76 0.15 74 / 0.18) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative circles */}
      <div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'oklch(0.82 0.14 77)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'oklch(0.82 0.14 77)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative top */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-amber-300/40" />
          <span className="text-amber-300/70 text-xl">✦</span>
          <div className="h-px w-12 bg-amber-300/40" />
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Ready to Dine With Us?
        </h2>

        <p className="font-body text-wood-200 text-lg md:text-xl mb-8 leading-relaxed">
          Call now to reserve your table or ask about today's specials.
        </p>

        {/* Big Phone CTA */}
        <a
          href="tel:+12502515445"
          className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-wood-900 font-body font-bold text-xl md:text-2xl px-10 py-5 rounded-full transition-all duration-200 shadow-warm-xl hover:shadow-glow hover:-translate-y-1 mb-8"
        >
          <Phone size={24} />
          📞 +1 250-251-5445
        </a>

        <p className="font-heading text-amber-200 text-lg md:text-xl italic">
          We look forward to welcoming you!
        </p>
      </div>
    </section>
  );
}
