import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const hours = [
  { day: 'Monday', time: '9:00 AM – 8:00 PM' },
  { day: 'Tuesday', time: '9:00 AM – 8:00 PM' },
  { day: 'Wednesday', time: '9:00 AM – 8:00 PM' },
  { day: 'Thursday', time: '9:00 AM – 8:00 PM' },
  { day: 'Friday', time: '9:00 AM – 9:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 9:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 7:00 PM' },
];

export default function Location() {
  return (
    <section id="location" className="py-20 bg-ink-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-salsa-400/50" />
            <span className="font-body text-salsa-400 text-xs tracking-[0.3em] uppercase font-bold">
              Come Visit Us
            </span>
            <div className="h-px w-10 bg-salsa-400/50" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 uppercase">
            Find Us
          </h2>
          <p className="font-body text-ink-200 text-base max-w-xl mx-auto">
            We're conveniently located in Los Lunas, New Mexico. Stop by for fresh, hot takeout!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info Cards */}
          <div className="flex flex-col gap-5">
            {/* Address */}
            <div className="bg-ink-700 rounded-2xl p-6 border border-ink-600/50 flex items-start gap-4">
              <div className="w-12 h-12 bg-chili-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-chili-400" />
              </div>
              <div>
                <h3 className="font-heading text-white text-lg uppercase mb-1">Address</h3>
                <p className="font-body text-ink-200 text-sm leading-relaxed">
                  3470 NM-47<br />
                  Los Lunas, NM 87031<br />
                  United States
                </p>
                <a
                  href="https://maps.google.com/?q=3470+NM-47,+Los+Lunas,+NM+87031"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 font-body text-salsa-400 text-sm hover:text-salsa-300 transition-colors font-semibold"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-ink-700 rounded-2xl p-6 border border-ink-600/50 flex items-start gap-4">
              <div className="w-12 h-12 bg-chili-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={22} className="text-chili-400" />
              </div>
              <div>
                <h3 className="font-heading text-white text-lg uppercase mb-1">Phone</h3>
                <a
                  href="tel:+15054884886"
                  className="font-body text-salsa-400 text-lg font-bold hover:text-salsa-300 transition-colors"
                >
                  +1 505-488-4886
                </a>
                <p className="font-body text-ink-300 text-sm mt-1">Call ahead for fast pickup!</p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-ink-700 rounded-2xl p-6 border border-ink-600/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-chili-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-chili-400" />
                </div>
                <div>
                  <h3 className="font-heading text-white text-lg uppercase">Hours</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                    <span className="font-body text-red-400 text-xs font-semibold">Closed Now</span>
                    <span className="font-body text-ink-300 text-xs">· Opens at 9:00 AM</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center py-1 border-b border-ink-600/30 last:border-0">
                    <span className="font-body text-ink-200 text-sm">{h.day}</span>
                    <span className="font-body text-cream-200 text-sm font-semibold">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-ink-600/50 shadow-spicy-xl min-h-[400px]">
            <iframe
              title="Luna's Kitchen Location"
              src="https://maps.google.com/maps?q=3470+NM-47,+Los+Lunas,+NM+87031&output=embed"
              width="100%"
              height="100%"
              style={{ minHeight: '400px', border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
