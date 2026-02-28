import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="relative py-20 overflow-hidden bg-chili-500">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.15) 20px, rgba(255,255,255,0.15) 21px)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-chili-600/50 to-chili-400/30" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="h-px w-12 bg-white/40" />
          <span className="font-body text-white/80 text-xs tracking-[0.3em] uppercase font-semibold">
            Ready to Order?
          </span>
          <div className="h-px w-12 bg-white/40" />
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 uppercase leading-tight">
          Craving Authentic<br />Mexican Flavor?
        </h2>
        <p className="font-body text-white/85 text-lg sm:text-xl mb-10 max-w-xl mx-auto">
          Come visit us or call ahead for fast, fresh takeout. We're ready to serve you!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+15054884886"
            className="w-full sm:w-auto flex items-center justify-center gap-2 font-body font-bold text-base px-10 py-4 rounded-full bg-white text-chili-600 hover:bg-cream-100 transition-all duration-200 shadow-spicy-xl hover:-translate-y-0.5 tracking-wide"
          >
            <Phone size={18} />
            Call Now
          </a>
          <a
            href="https://maps.google.com/?q=3470+NM-47,+Los+Lunas,+NM+87031"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 font-body font-bold text-base px-10 py-4 rounded-full border-2 border-white/70 text-white hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5 tracking-wide"
          >
            <MapPin size={18} />
            Get Directions
          </a>
        </div>

        <p className="mt-8 font-body text-white/70 text-sm">
          📍 3470 NM-47, Los Lunas, NM 87031 &nbsp;·&nbsp; 📞 +1 505-488-4886
        </p>
      </div>
    </section>
  );
}
