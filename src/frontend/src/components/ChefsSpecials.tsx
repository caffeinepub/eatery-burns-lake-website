import { Calendar, Flame, Sparkles } from "lucide-react";
import React from "react";

const specials = [
  {
    icon: Sparkles,
    title: "Truffle Season is Here",
    description:
      "Our handmade truffle pasta is back. Black truffle shavings over house-made fettuccini with a silky cream reduction. Limited availability — book early.",
    tag: "Seasonal Special",
    image: "/assets/generated/truffle-pasta.dim_800x600.jpg",
    color: "olive",
  },
  {
    icon: Flame,
    title: "New: Nero Rosato",
    description:
      "A stunning black squid ink pasta with rose-infused sauce — a daring and romantic pairing. Already a fan favourite among our returning guests.",
    tag: "New Dish",
    image: "/assets/generated/seafood-pasta.dim_600x500.jpg",
    color: "terracotta",
  },
  {
    icon: Calendar,
    title: "Book for a Special Occasion",
    description:
      "Celebrate your anniversary, birthday, or Valentine's Day with an intimate table for two. Candlelit dinner, special menu, personal attention from our family.",
    tag: "Private Dining",
    image: "/assets/generated/restaurant-interior.dim_800x600.jpg",
    color: "gold",
  },
];

export default function ChefsSpecials() {
  return (
    <section className="py-20 md:py-28 bg-ivory-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-body text-terracotta-500 text-sm font-semibold tracking-[0.3em] uppercase">
            From Our Kitchen
          </span>
          <h2 className="font-heading text-espresso-700 text-4xl md:text-5xl font-bold mt-3 mb-4 leading-tight">
            Chef's Specials{" "}
            <span className="italic text-terracotta-500">& Events</span>
          </h2>
          <p className="font-body text-espresso-400 text-lg max-w-xl mx-auto">
            Seasonal creations and special occasions — always something new to
            discover.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {specials.map(
            ({ icon: Icon, title, description, tag, image, color }) => (
              <div
                key={title}
                className="group bg-ivory-100 rounded-sm shadow-warm hover:shadow-warm-xl transition-all duration-300 overflow-hidden border border-ivory-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/50 to-transparent" />
                  {/* Tag */}
                  <span
                    className={`absolute top-4 left-4 font-body text-xs font-semibold tracking-wide uppercase px-3 py-1.5 ${
                      color === "olive"
                        ? "bg-olive-500 text-ivory-50"
                        : color === "gold"
                          ? "bg-gold-500 text-espresso-800"
                          : "bg-terracotta-500 text-ivory-50"
                    }`}
                  >
                    {tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon
                      size={18}
                      className="text-terracotta-500 flex-shrink-0"
                    />
                    <h3 className="font-heading text-espresso-700 font-semibold text-lg leading-tight">
                      {title}
                    </h3>
                  </div>
                  <p className="font-body text-espresso-400 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
