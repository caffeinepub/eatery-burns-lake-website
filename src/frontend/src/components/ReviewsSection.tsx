import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import React, { useState } from "react";
import { SiFacebook } from "react-icons/si";

const testimonials = [
  {
    text: "Absolutely the best pasta I've had outside of Italy. The Pork Belly Fettuccini is life-changing. Such a warm, family atmosphere — we felt like guests in someone's home.",
    author: "Sarah M.",
    source: "Google Review",
    stars: 5,
  },
  {
    text: "Hidden gem doesn't even begin to describe it. Fresh handmade pasta, generous portions, incredibly friendly service. We've been back three times already!",
    author: "James T.",
    source: "TripAdvisor",
    stars: 5,
  },
  {
    text: "The most authentic Italian experience in New Zealand. You can taste the love and care in every dish. The family running this place are wonderful.",
    author: "Lisa K.",
    source: "Facebook",
    stars: 5,
  },
  {
    text: "Unbelievable value for money. The truffle pasta and tiramisu are absolutely divine. Highly recommend to anyone visiting Napier!",
    author: "David R.",
    source: "Google Review",
    stars: 5,
  },
  {
    text: "Best kept secret in Napier! The kids loved it, the adults loved it. Vegetarian options are plentiful and delicious.",
    author: "Emma W.",
    source: "TripAdvisor",
    stars: 5,
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: star index is purely visual
        <Star key={i} size={14} className="fill-gold-400 text-gold-400" />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section id="reviews" className="py-20 md:py-28 bg-ivory-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-body text-terracotta-500 text-sm font-semibold tracking-[0.3em] uppercase">
            Guest Stories
          </span>
          <h2 className="font-heading text-espresso-700 text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
            What Our{" "}
            <span className="italic text-terracotta-500">Guests Say</span>
          </h2>

          {/* Rating summary */}
          <div className="flex flex-wrap justify-center gap-8 mb-2">
            <div className="flex flex-col items-center gap-1">
              <StarRow count={5} />
              <p className="font-heading text-espresso-700 font-bold text-2xl">
                4.9
              </p>
              <p className="font-body text-espresso-400 text-sm">
                637 Google Reviews
              </p>
            </div>
            <div className="w-px h-16 bg-ivory-300 self-center hidden sm:block" />
            <div className="flex flex-col items-center gap-1">
              <StarRow count={5} />
              <p className="font-heading text-espresso-700 font-bold text-2xl">
                5.0
              </p>
              <p className="font-body text-espresso-400 text-sm flex items-center gap-1.5">
                <SiFacebook size={12} className="text-blue-600" />
                Facebook (18 votes)
              </p>
            </div>
            <div className="w-px h-16 bg-ivory-300 self-center hidden sm:block" />
            <div className="flex flex-col items-center gap-1">
              <StarRow count={5} />
              <p className="font-heading text-espresso-700 font-bold text-2xl">
                Top
              </p>
              <p className="font-body text-espresso-400 text-sm">
                TripAdvisor Rated
              </p>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Main card */}
          <div className="bg-ivory-50 rounded-sm shadow-warm-xl border border-ivory-300 p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative quote mark */}
            <div className="absolute top-6 left-8 text-terracotta-200 opacity-60">
              <Quote size={48} className="fill-terracotta-100" />
            </div>

            <div className="relative z-10">
              <StarRow count={testimonials[active].stars} />
              <blockquote className="font-heading text-espresso-600 text-xl md:text-2xl italic leading-relaxed mt-6 mb-8 font-medium">
                "{testimonials[active].text}"
              </blockquote>
              <div>
                <p className="font-body font-semibold text-espresso-700 text-base">
                  {testimonials[active].author}
                </p>
                <p className="font-body text-terracotta-500 text-sm tracking-wide">
                  {testimonials[active].source}
                </p>
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-terracotta-300 text-terracotta-500 hover:bg-terracotta-500 hover:text-ivory-50 hover:border-terracotta-500 flex items-center justify-center transition-all duration-200"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  // biome-ignore lint/suspicious/noArrayIndexKey: carousel dot index is positional
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-200 ${
                    i === active
                      ? "w-8 h-2.5 bg-terracotta-500"
                      : "w-2.5 h-2.5 bg-ivory-400 hover:bg-terracotta-300"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-terracotta-300 text-terracotta-500 hover:bg-terracotta-500 hover:text-ivory-50 hover:border-terracotta-500 flex items-center justify-center transition-all duration-200"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
