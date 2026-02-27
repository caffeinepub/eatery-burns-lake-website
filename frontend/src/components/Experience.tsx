import React from 'react';

const features = [
  {
    emoji: '🔥',
    title: 'Cozy Fireplace Seating',
    description: 'Warm up beside our inviting fireplace — the perfect spot for a relaxing meal.',
    accent: 'text-terra-400',
    border: 'border-terra-400/30',
    bg: 'bg-terra-400/8',
  },
  {
    emoji: '🎶',
    title: 'Live Music Atmosphere',
    description: 'Enjoy the ambiance of live music that makes every visit a memorable experience.',
    accent: 'text-amber-600',
    border: 'border-amber-500/30',
    bg: 'bg-amber-400/8',
  },
  {
    emoji: '👨‍👩‍👧‍👦',
    title: 'Family-Friendly Environment',
    description: 'A welcoming space for the whole family — from the little ones to grandparents.',
    accent: 'text-wood-600',
    border: 'border-wood-400/30',
    bg: 'bg-wood-400/8',
  },
  {
    emoji: '🚗',
    title: 'Easy Highway Access',
    description: 'Conveniently located right on Yellowhead Highway — easy to find, easy to reach.',
    accent: 'text-terra-500',
    border: 'border-terra-500/30',
    bg: 'bg-terra-500/8',
  },
];

export default function Experience() {
  return (
    <section
      id="experience-section"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, oklch(0.28 0.06 44) 0%, oklch(0.22 0.05 42) 50%, oklch(0.26 0.07 46) 100%)',
      }}
    >
      {/* Subtle warm glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, oklch(0.68 0.16 55) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-amber-400/40" />
            <span className="font-body text-amber-400/80 text-xs tracking-[0.3em] uppercase font-bold">
              The Experience
            </span>
            <div className="h-px w-12 bg-amber-400/40" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-amber-200 mb-4">
            Why Visit Us?
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`${feature.bg} border ${feature.border} rounded-2xl p-6 text-center transition-all duration-200 hover:shadow-warm hover:-translate-y-1`}
            >
              <div className="text-5xl mb-4">{feature.emoji}</div>
              <h3 className={`font-heading font-semibold text-lg mb-2 ${feature.accent}`}>
                {feature.title}
              </h3>
              <p className="font-body text-wood-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Tagline */}
        <div className="text-center">
          <div className="inline-block bg-amber-400/10 border border-amber-400/25 rounded-2xl px-8 py-5">
            <p className="font-heading text-amber-200 text-lg md:text-xl italic leading-relaxed">
              "Perfect for casual dining, small gatherings, or a relaxing meal in Burns Lake."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
