import React from 'react';

const menuItems = [
  {
    name: 'Quesabirria Tacos',
    description: 'Slow-braised beef birria, melty cheese, consommé dipping broth. A true Mexican classic.',
    image: '/assets/generated/lunas-menu-quesabirria.dim_600x400.jpg',
    tag: 'Fan Favorite',
    tagColor: 'bg-chili-500',
  },
  {
    name: 'Tacos',
    description: 'Seasoned meats, fresh cilantro, onion, and a squeeze of lime on warm tortillas.',
    image: '/assets/generated/lunas-menu-tacos.dim_600x400.jpg',
    tag: 'Classic',
    tagColor: 'bg-salsa-500',
  },
  {
    name: 'Burritos',
    description: 'Stuffed with rice, beans, cheese, and your choice of protein. Big flavors, big portions.',
    image: '/assets/generated/lunas-menu-burritos.dim_600x400.jpg',
    tag: 'Hearty',
    tagColor: 'bg-chili-600',
  },
  {
    name: 'Quesadillas',
    description: 'Golden, crispy tortillas filled with melted cheese and savory toppings.',
    image: '/assets/generated/lunas-menu-quesadillas.dim_600x400.jpg',
    tag: 'Crispy',
    tagColor: 'bg-salsa-400',
  },
  {
    name: 'Tacoburger',
    description: 'Where the taco meets the burger — bold, juicy, and totally unique to Luna\'s Kitchen.',
    image: '/assets/generated/lunas-menu-tacoburger.dim_600x400.jpg',
    tag: 'Signature',
    tagColor: 'bg-chili-500',
  },
  {
    name: 'Burgers',
    description: 'Handcrafted beef burgers with fresh toppings and house-made sauces.',
    image: '/assets/generated/lunas-menu-burgers.dim_600x400.jpg',
    tag: 'Juicy',
    tagColor: 'bg-salsa-500',
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-ink-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-salsa-400/50" />
            <span className="font-body text-salsa-400 text-xs tracking-[0.3em] uppercase font-bold">
              From Our Kitchen
            </span>
            <div className="h-px w-10 bg-salsa-400/50" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 uppercase">
            Our Favorites
          </h2>
          <p className="font-body text-ink-200 text-base max-w-xl mx-auto">
            Bold flavors, fresh ingredients — these are the dishes Los Lunas keeps coming back for.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="group bg-ink-700 rounded-2xl overflow-hidden border border-ink-600/50 hover:border-salsa-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-spicy-xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent" />
                {/* Tag */}
                <div className="absolute top-3 right-3">
                  <span className={`font-body text-xs font-bold text-white ${item.tagColor} px-2.5 py-1 rounded-full tracking-wide`}>
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading text-xl font-bold text-white mb-2 uppercase tracking-wide group-hover:text-salsa-400 transition-colors">
                  {item.name}
                </h3>
                <p className="font-body text-ink-200 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="h-0.5 bg-gradient-to-r from-chili-500 to-salsa-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Price range note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-ink-700/60 border border-salsa-400/30 rounded-full px-6 py-3">
            <span className="text-salsa-400 text-lg">💰</span>
            <span className="font-body text-cream-200 text-sm">
              Affordable pricing: <strong className="text-white">$10–$20 per person</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
