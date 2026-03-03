import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const reviews = [
  {
    name: "Sarah M.",
    initials: "SM",
    rating: 5,
    text: "Absolutely the best pasta I've had outside of Italy. Such a warm, family atmosphere.",
    date: "January 2026",
  },
  {
    name: "James T.",
    initials: "JT",
    rating: 5,
    text: "Hidden gem doesn't even begin to describe it. Fresh handmade pasta, generous portions.",
    date: "February 2026",
  },
  {
    name: "Lisa K.",
    initials: "LK",
    rating: 5,
    text: "The most authentic Italian experience in New Zealand.",
    date: "February 2026",
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;
  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () =>
    setCurrentIndex((i) => Math.min(reviews.length - visibleCount, i + 1));
  const visibleReviews = reviews.slice(
    currentIndex,
    currentIndex + visibleCount,
  );

  return (
    <section id="reviews-old" className="py-20 bg-espresso-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-ivory-50 mb-8 text-center">
          Guest Reviews
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleReviews.map((review) => (
            <div
              key={review.name}
              className="bg-espresso-700 rounded-sm p-6 shadow-warm border border-espresso-600/50"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: star index is visual only
                  <span key={i} className="text-gold-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="font-body text-espresso-200 text-sm leading-relaxed mb-4 italic">
                "{review.text}"
              </p>
              <p className="font-body text-ivory-100 text-sm font-bold">
                {review.name}
              </p>
              <p className="font-body text-espresso-400 text-xs">
                {review.date}
              </p>
            </div>
          ))}
        </div>
        {reviews.length > visibleCount && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full bg-espresso-700 flex items-center justify-center text-ivory-200 hover:bg-terracotta-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              aria-label="Previous reviews"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: reviews.length - visibleCount + 1 }).map(
                (_, i) => (
                  <button
                    // biome-ignore lint/suspicious/noArrayIndexKey: carousel dot index is positional
                    key={i}
                    type="button"
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-terracotta-400 w-6" : "bg-espresso-500"}`}
                    aria-label={`Go to review set ${i + 1}`}
                  />
                ),
              )}
            </div>
            <button
              type="button"
              onClick={next}
              disabled={currentIndex >= reviews.length - visibleCount}
              className="w-10 h-10 rounded-full bg-espresso-700 flex items-center justify-center text-ivory-200 hover:bg-terracotta-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              aria-label="Next reviews"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
