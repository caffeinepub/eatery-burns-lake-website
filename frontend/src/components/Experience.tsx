import React from 'react';
import { Star, DollarSign, Zap, Leaf, Users } from 'lucide-react';

const highlights = [
  {
    icon: <Star size={28} className="text-salsa-400 fill-salsa-400" />,
    title: '4.9-Star Rating',
    description: 'Rated by 137 happy customers. Consistently top-rated in Los Lunas for authentic Mexican flavor.',
  },
  {
    icon: <DollarSign size={28} className="text-salsa-400" />,
    title: 'Affordable Pricing',
    description: 'Enjoy a full, satisfying meal for just $10–$20 per person. Great food doesn\'t have to break the bank.',
  },
  {
    icon: <Zap size={28} className="text-salsa-400" />,
    title: 'Fast Takeout Service',
    description: 'We know you\'re hungry. Our kitchen moves fast so you can enjoy your food without the wait.',
  },
  {
    icon: <Leaf size={28} className="text-salsa-400" />,
    title: 'Fresh Ingredients',
    description: 'Every dish is made with fresh, hand-selected ingredients. No shortcuts, no compromises.',
  },
  {
    icon: <Users size={28} className="text-salsa-400" />,
    title: 'Family-Friendly',
    description: 'A welcoming atmosphere for the whole family. Kids love our tacos just as much as the adults do.',
  },
];

export default function Experience() {
  return (
    <section id="why-us" className="py-20 bg-chili-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-salsa-400/50" />
            <span className="font-body text-salsa-400 text-xs tracking-[0.3em] uppercase font-bold">
              The Luna's Difference
            </span>
            <div className="h-px w-10 bg-salsa-400/50" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 uppercase">
            Why Choose Us?
          </h2>
          <p className="font-body text-chili-200 text-base max-w-xl mx-auto">
            We're not just another takeout spot. Here's what makes Luna's Kitchen special.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`bg-chili-800/60 border border-chili-700/50 rounded-2xl p-6 hover:border-salsa-400/50 hover:-translate-y-1 transition-all duration-300 ${
                index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-14 h-14 bg-chili-700/60 rounded-xl flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2 uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="font-body text-chili-200 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-center font-body text-chili-300 text-base italic mt-12">
          "Come hungry. Leave happy. That's the Luna's Kitchen way."
        </p>
      </div>
    </section>
  );
}
