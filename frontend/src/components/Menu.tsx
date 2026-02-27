import React from 'react';
import { Phone } from 'lucide-react';

const menuCategories = [
  {
    emoji: '🍳',
    title: 'Breakfast Favorites',
    description: 'Start your morning right with our hearty breakfast selections, made fresh every day.',
    color: 'border-t-amber-500',
    bg: 'bg-amber-400/5 hover:bg-amber-400/10',
  },
  {
    emoji: '🥗',
    title: 'Hearty Lunch Options',
    description: 'Satisfying midday meals to keep you fueled for the rest of your day.',
    color: 'border-t-terra-400',
    bg: 'bg-terra-400/5 hover:bg-terra-400/10',
  },
  {
    emoji: '🍲',
    title: 'Comfort Dinners',
    description: 'Warm, soul-satisfying dinners perfect for winding down after a long day.',
    color: 'border-t-wood-500',
    bg: 'bg-wood-400/5 hover:bg-wood-400/10',
  },
  {
    emoji: '☕',
    title: 'Fresh Hot Chocolate & Warm Beverages',
    description: 'Cozy up with our selection of hot drinks — perfect for any time of day.',
    color: 'border-t-amber-700',
    bg: 'bg-amber-700/5 hover:bg-amber-700/10',
  },
];

export default function Menu() {
  return (
    <section
      id="menu-section"
      className="py-20 md:py-28"
      style={{
        background:
          'linear-gradient(180deg, oklch(0.97 0.015 75) 0%, oklch(0.93 0.025 70) 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-terra-400/50" />
            <span className="font-body text-terra-400 text-xs tracking-[0.3em] uppercase font-bold">
              What We Serve
            </span>
            <div className="h-px w-12 bg-terra-400/50" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-wood-800 mb-4">
            Our Menu
          </h2>
          <p className="font-body text-wood-500 text-lg max-w-xl mx-auto">
            We serve a variety of delicious dishes made fresh daily.
          </p>
        </div>

        {/* Menu Category Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {menuCategories.map((item) => (
            <div
              key={item.title}
              className={`${item.bg} ${item.color} border border-wood-200 border-t-4 rounded-2xl p-6 transition-all duration-200 hover:shadow-warm hover:-translate-y-1 cursor-default`}
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="font-heading text-wood-800 font-semibold text-lg leading-snug mb-2">
                {item.title}
              </h3>
              <p className="font-body text-wood-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Price & CTA Banner */}
        <div className="bg-wood-700 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-warm-xl">
          <div className="text-center md:text-left">
            <p className="font-heading text-amber-300 text-xl md:text-2xl font-semibold mb-1">
              💲 Most meals range between $10–20
            </p>
            <p className="font-body text-wood-200 text-base">
              Quality food at prices that won't break the bank.
            </p>
          </div>
          <a
            href="tel:+12502515445"
            className="flex-shrink-0 flex items-center gap-2 bg-terra-400 hover:bg-terra-300 text-white font-body font-bold text-base px-7 py-3.5 rounded-full transition-all duration-200 shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5 whitespace-nowrap"
          >
            <Phone size={16} />
            👉 Call for Today's Specials!
          </a>
        </div>
      </div>
    </section>
  );
}
