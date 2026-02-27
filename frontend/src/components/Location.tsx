import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="location-section" className="py-20 md:py-28 bg-warm-texture">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-terra-400/50" />
            <span className="font-body text-terra-400 text-xs tracking-[0.3em] uppercase font-bold">
              Find Us
            </span>
            <div className="h-px w-12 bg-terra-400/50" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-wood-800 mb-4">
            Visit Us
          </h2>
          <p className="font-body text-wood-500 text-lg">
            Conveniently located along Yellowhead Highway for easy access.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Address */}
          <div className="bg-card border border-wood-200 rounded-3xl p-8 text-center shadow-warm hover:shadow-warm-lg transition-all duration-200 hover:-translate-y-1">
            <div className="w-14 h-14 bg-terra-400/15 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <MapPin className="w-7 h-7 text-terra-400" />
            </div>
            <h3 className="font-heading text-wood-800 font-semibold text-lg mb-3">Address</h3>
            <p className="font-body text-wood-500 text-sm leading-relaxed">
              321 Yellowhead Hwy<br />
              Burns Lake, BC<br />
              V8J 4K8, Canada
            </p>
          </div>

          {/* Phone */}
          <div className="bg-card border border-wood-200 rounded-3xl p-8 text-center shadow-warm hover:shadow-warm-lg transition-all duration-200 hover:-translate-y-1">
            <div className="w-14 h-14 bg-amber-400/15 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Phone className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="font-heading text-wood-800 font-semibold text-lg mb-3">Phone</h3>
            <a
              href="tel:+12502515445"
              className="font-body text-terra-400 hover:text-terra-300 font-bold text-lg transition-colors underline-offset-2 hover:underline"
            >
              +1 250-251-5445
            </a>
            <p className="font-body text-wood-400 text-xs mt-2">Tap to call</p>
          </div>

          {/* Hours */}
          <div className="bg-card border border-wood-200 rounded-3xl p-8 text-center shadow-warm hover:shadow-warm-lg transition-all duration-200 hover:-translate-y-1">
            <div className="w-14 h-14 bg-wood-400/15 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Clock className="w-7 h-7 text-wood-500" />
            </div>
            <h3 className="font-heading text-wood-800 font-semibold text-lg mb-3">Hours</h3>
            <p className="font-body text-wood-600 font-semibold text-base">
              Opens Daily
            </p>
            <p className="font-body text-wood-500 text-sm mt-1">
              7:00 AM every day
            </p>
          </div>
        </div>

        {/* Map placeholder / highway note */}
        <div className="mt-10 max-w-4xl mx-auto bg-wood-700/10 border border-wood-200 rounded-2xl p-6 flex items-center gap-4">
          <span className="text-2xl flex-shrink-0">📍</span>
          <p className="font-body text-wood-600 text-sm leading-relaxed">
            <strong className="text-wood-700">321 Yellowhead Hwy, Burns Lake, BC V8J 4K8, Canada</strong>
            {' '}— Conveniently located along Yellowhead Highway for easy access.
          </p>
        </div>
      </div>
    </section>
  );
}
