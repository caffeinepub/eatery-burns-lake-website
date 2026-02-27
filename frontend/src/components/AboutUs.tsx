import React from 'react';
import { Star, DollarSign, Music } from 'lucide-react';

const features = [
  {
    icon: <Star className="w-6 h-6 text-amber-500 fill-amber-400" />,
    emoji: '⭐',
    title: 'Rated 4.5 Stars',
    description: 'Rated 4.5 stars by our guests',
    bg: 'bg-amber-400/10 border-amber-400/30',
    iconBg: 'bg-amber-400/20',
  },
  {
    icon: <DollarSign className="w-6 h-6 text-terra-400" />,
    emoji: '💲',
    title: 'Affordable Pricing',
    description: 'Affordable pricing – $10–20 per person',
    bg: 'bg-terra-400/10 border-terra-400/30',
    iconBg: 'bg-terra-400/20',
  },
  {
    icon: <Music className="w-6 h-6 text-wood-500" />,
    emoji: '🎵',
    title: 'Live Music',
    description: 'Live music & welcoming environment',
    bg: 'bg-wood-400/10 border-wood-400/30',
    iconBg: 'bg-wood-400/20',
  },
];

export default function AboutUs() {
  return (
    <section id="about-section" className="py-20 md:py-28 bg-warm-texture">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 max-w-[60px] bg-terra-400/50" />
          <span className="font-body text-terra-400 text-xs tracking-[0.3em] uppercase font-bold">
            Our Story
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-wood-800 leading-tight mb-6">
              Welcome to{' '}
              <span className="text-terra-400 italic">Eatery Burns Lake</span>
            </h2>
            <p className="font-body text-wood-600 text-lg leading-relaxed mb-4">
              Your local destination for great food and a cozy atmosphere.
            </p>
            <p className="font-body text-wood-500 text-base leading-relaxed">
              Located on Yellowhead Highway, we offer affordable meals in a warm setting featuring
              fireplace seating and occasional live music. Whether you're stopping by for breakfast,
              lunch, or dinner, we provide quality meals at reasonable prices.
            </p>

            {/* Decorative divider */}
            <div className="flex items-center gap-3 mt-8">
              <div className="h-px flex-1 bg-wood-200" />
              <span className="text-amber-500 text-xl">✦</span>
              <div className="h-px flex-1 bg-wood-200" />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="flex flex-col gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`flex items-center gap-4 p-5 rounded-2xl border ${feature.bg} transition-all duration-200 hover:shadow-warm`}
              >
                <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center flex-shrink-0`}>
                  {feature.icon}
                </div>
                <div>
                  <p className="font-heading text-wood-800 font-semibold text-lg leading-tight">
                    {feature.title}
                  </p>
                  <p className="font-body text-wood-500 text-sm mt-0.5">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
