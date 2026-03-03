import { Clock, DollarSign, Heart, Leaf } from "lucide-react";
import React from "react";

const highlights = [
  {
    icon: Leaf,
    label: "Vegetarian-Friendly",
    desc: "Ample plant-based options",
  },
  {
    icon: DollarSign,
    label: "$20–30 Per Person",
    desc: "Excellent value dining",
  },
  { icon: Clock, label: "Opens 5:30 PM", desc: "Last dinner order 9 PM" },
  {
    icon: Heart,
    label: "Family-Run Since Day One",
    desc: "Warmth in every dish",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-terracotta-300" />
            <span className="font-body text-terracotta-500 text-xs font-semibold tracking-[0.35em] uppercase">
              Our Story
            </span>
            <div className="h-px w-8 bg-terracotta-300" />
          </div>
          <h2 className="font-heading text-espresso-800 text-4xl md:text-5xl font-bold leading-tight">
            A Family's{" "}
            <span className="italic text-terracotta-500">Labor of Love</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <div className="order-2 lg:order-1">
            <p className="font-body text-espresso-500 text-lg leading-[1.8] mb-5">
              ILONA Pasta is a family-run Italian restaurant in the heart of
              Napier. Founded by a{" "}
              <strong className="text-espresso-700 font-semibold">
                Korean wife
              </strong>{" "}
              and her{" "}
              <strong className="text-espresso-700 font-semibold">
                Albanian husband
              </strong>
              , with their two daughters lending a hand, this intimate little
              trattoria brings the warmth of a real Italian family kitchen to
              New Zealand.
            </p>

            {/* Italian ornamental divider between paragraphs */}
            <div className="flex items-center gap-3 my-5">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-terracotta-200 to-transparent" />
              <svg
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
                aria-hidden="true"
                className="flex-shrink-0"
              >
                <path
                  d="M10 6 C10 6 6 1 2 6 C6 11 10 6 10 6 Z"
                  fill="oklch(0.42 0.17 32 / 0.35)"
                />
                <path
                  d="M10 6 C10 6 14 1 18 6 C14 11 10 6 10 6 Z"
                  fill="oklch(0.42 0.17 32 / 0.35)"
                />
                <circle
                  cx="10"
                  cy="6"
                  r="1.5"
                  fill="oklch(0.42 0.17 32 / 0.6)"
                />
              </svg>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-terracotta-200 to-transparent" />
            </div>

            <p className="font-body text-espresso-500 text-lg leading-[1.8] mb-8">
              Every plate of pasta is{" "}
              <em className="text-terracotta-500 font-medium not-italic border-b border-terracotta-300/60 pb-px">
                handmade with love
              </em>
              , every guest is welcomed like family. We have quickly become
              Napier's best-kept secret — a hidden gem praised for authenticity,
              freshness, and genuine hospitality.
            </p>

            {/* Highlights grid — left-border accent cards */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 p-4 bg-ivory-50 border border-ivory-300 border-l-[3px] border-l-terracotta-400 shadow-xs hover:shadow-warm transition-shadow duration-200"
                >
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <Icon size={17} className="text-terracotta-500" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-espresso-700 text-sm leading-snug">
                      {label}
                    </p>
                    <p className="font-body text-espresso-400 text-xs mt-0.5 leading-snug">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images column */}
          <div className="order-1 lg:order-2">
            {/* Staggered image pair — second image offset down */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden shadow-warm-lg group">
                <img
                  src="/assets/generated/restaurant-interior.dim_800x600.jpg"
                  alt="ILONA Pasta intimate dining room interior"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/25 to-transparent" />
              </div>
              <div className="relative overflow-hidden shadow-warm-lg group mt-10">
                <img
                  src="/assets/generated/restaurant-exterior.dim_800x600.jpg"
                  alt="ILONA Pasta restaurant exterior in Napier"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/25 to-transparent" />
              </div>
            </div>

            {/* Floating badge — higher contrast, positioned over the gap */}
            <div className="relative -mt-8 ml-auto w-fit mr-6 z-10">
              <div className="bg-terracotta-500 text-ivory-50 px-5 py-3 shadow-warm-xl">
                <p className="font-heading text-base font-bold italic leading-tight">
                  Hidden Gem
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="h-px w-4 bg-ivory-300/50" />
                  <p className="font-body text-[10px] tracking-[0.3em] uppercase text-ivory-200">
                    Napier, NZ
                  </p>
                  <div className="h-px w-4 bg-ivory-300/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
