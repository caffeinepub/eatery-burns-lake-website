import React, { useState } from 'react';

const categories = [
  {
    id: 'street-food',
    label: 'Korean Street Food',
    emoji: '🌶️',
    image: '/assets/generated/tteokbokki.dim_600x400.png',
    items: [
      { name: 'Rose Tteokbokki', price: '$12.50' },
      { name: 'Tteokbokki', price: '$11.00' },
      { name: 'Kimchi Pancake', price: '$28.60' },
      { name: 'Seafood Pancake', price: '$31.20' },
      { name: 'Gimbap', price: '$12.35' },
      { name: 'Fried Dumplings (5pcs)', price: '$16.50' },
    ],
  },
  {
    id: 'fried-chicken',
    label: 'Korean Fried Chicken',
    emoji: '🍗',
    image: '/assets/generated/fried-chicken.dim_600x400.png',
    items: [
      { name: 'Original Fried Chicken', price: '$18.50' },
      { name: 'Sweet Soy Chicken', price: '$19.50' },
      { name: 'Hot & Spicy Chicken', price: '$19.50' },
      { name: 'Snow Cheese Chicken', price: '$19.50' },
      { name: 'Sweet & Spicy Chicken', price: '$19.50' },
    ],
  },
  {
    id: 'signature',
    label: 'Signature Meals',
    emoji: '🍲',
    image: '/assets/generated/bibimbap.dim_600x400.png',
    items: [
      { name: 'Bibimbap', price: '$27.30' },
      { name: 'Sizzling Beef Bulgogi', price: '$29.90' },
      { name: 'Kimchi Stew', price: '$29.90' },
      { name: 'Galbi-Tang', price: '$33.90' },
      { name: 'Cheese Spicy Chicken', price: '$33.90' },
      { name: 'Chicken Katsu', price: '$29.90' },
    ],
  },
  {
    id: 'cupbap',
    label: 'CUPBAP Bowls',
    emoji: '🥣',
    image: '/assets/generated/bibimbap.dim_600x400.png',
    items: [
      { name: 'Hot & Spicy Chicken CUPBAP', price: '$17.55' },
      { name: 'Sweet Soy Chicken CUPBAP', price: '$17.55' },
      { name: 'Beef Bulgogi CUPBAP', price: '$18.20' },
      { name: 'Spicy Pork CUPBAP', price: '$18.20' },
    ],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('street-food');

  const currentCategory = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <div className="py-20 bg-cream-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-gochujang-500/50" />
            <span className="font-body text-gochujang-500 text-xs tracking-[0.3em] uppercase font-bold">
              Our Menu
            </span>
            <div className="h-px w-10 bg-gochujang-500/50" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-700 mb-4">
            Explore Our Menu
          </h2>
          <p className="font-body text-charcoal-400 text-base max-w-xl mx-auto">
            Authentic Korean flavors crafted with fresh ingredients and traditional recipes.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-body font-semibold text-sm transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gochujang-500 text-white shadow-korean'
                  : 'bg-white text-charcoal-500 border border-cream-300 hover:border-gochujang-300 hover:text-gochujang-500'
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Category Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Featured Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-korean-xl">
            <img
              src={currentCategory.image}
              alt={currentCategory.label}
              className="w-full h-72 sm:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span className="text-3xl">{currentCategory.emoji}</span>
              <h3 className="font-heading text-white text-2xl font-bold mt-1">{currentCategory.label}</h3>
            </div>
          </div>

          {/* Menu Items */}
          <div className="bg-white rounded-3xl shadow-korean border border-cream-200 overflow-hidden">
            <div className="bg-gochujang-500 px-6 py-4">
              <h3 className="font-heading text-white text-xl font-bold flex items-center gap-2">
                <span>{currentCategory.emoji}</span>
                {currentCategory.label}
              </h3>
            </div>
            <div className="divide-y divide-cream-200">
              {currentCategory.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between px-6 py-4 hover:bg-cream-50 transition-colors"
                >
                  <span className="font-body text-charcoal-600 text-sm font-medium">{item.name}</span>
                  <span className="font-body text-gochujang-500 text-sm font-bold ml-4 flex-shrink-0">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All categories quick view on mobile */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`text-left p-4 rounded-2xl border transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'border-gochujang-400 bg-gochujang-50 shadow-korean'
                  : 'border-cream-300 bg-white hover:border-gochujang-300'
              }`}
            >
              <span className="text-2xl block mb-1">{cat.emoji}</span>
              <p className="font-body text-charcoal-700 text-sm font-semibold">{cat.label}</p>
              <p className="font-body text-charcoal-400 text-xs mt-0.5">{cat.items.length} items</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
