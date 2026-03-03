import React, { useState } from "react";

const categories = [
  {
    id: "starters",
    label: "Starters",
    emoji: "🍞",
    items: [
      { name: "Bruschetta" },
      { name: "Burrata Garden" },
      { name: "Deep Fried Calamari" },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    emoji: "🍝",
    items: [
      { name: "Pork Belly Fettuccini" },
      { name: "Seafood Spaghetti" },
      { name: "Spaghetti Bolognese" },
    ],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("starters");
  const currentCategory =
    categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <div className="py-20 bg-ivory-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-espresso-700 mb-8 text-center">
          Menu
        </h2>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-sm font-body font-semibold text-sm transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-terracotta-500 text-ivory-50 shadow-terracotta"
                  : "bg-ivory-100 text-espresso-500 border border-ivory-300 hover:border-terracotta-300"
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
        <div className="bg-ivory-100 rounded-sm shadow-warm border border-ivory-300 divide-y divide-ivory-300">
          {currentCategory.items.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between px-6 py-4 hover:bg-ivory-50 transition-colors"
            >
              <span className="font-body text-espresso-600 text-sm font-medium">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
