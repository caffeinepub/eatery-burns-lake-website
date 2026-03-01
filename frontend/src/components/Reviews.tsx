import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah M.',
    initials: 'SM',
    rating: 5,
    text: 'The Korean fried chicken is absolutely incredible! So crispy on the outside and juicy inside. Best Korean food in Griffith by far! We come here every week.',
    date: 'January 2026',
  },
  {
    name: 'James K.',
    initials: 'JK',
    rating: 5,
    text: 'The tteokbokki is so authentic and flavorful. Reminds me of street food in Seoul! The staff are super friendly and the portions are generous. Highly recommend!',
    date: 'February 2026',
  },
  {
    name: 'Emily T.',
    initials: 'ET',
    rating: 5,
    text: 'Sizzling beef bulgogi was absolutely divine. The flavors are bold and authentic. Love that Griffith finally has a proper Korean restaurant. Will definitely be back!',
    date: 'February 2026',
  },
  {
    name: 'David L.',
    initials: 'DL',
    rating: 4,
    text: 'Great family-friendly atmosphere and the bibimbap was delicious. The CUPBAP bowls are perfect for a quick lunch. Affordable prices for the quality you get.',
    date: 'January 2026',
  },
  {
    name: 'Mia R.',
    initials: 'MR',
    rating: 5,
    text: 'Snow Cheese Chicken is a must-try! The cheese sauce is creamy and the chicken is perfectly crispy. Bunsik has become our go-to spot for Korean food in Griffith.',
    date: 'February 2026',
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const prev = () => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  };

  const next = () => {
    setCurrentIndex((i) => Math.min(reviews.length - visibleCount, i + 1));
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + visibleCount);

  return (
    <section id="reviews" className="py-20 bg-charcoal-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-gochujang-400/50" />
            <span className="font-body text-gochujang-400 text-xs tracking-[0.3em] uppercase font-bold">
              What People Say
            </span>
            <div className="h-px w-10 bg-gochujang-400/50" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Customer Reviews
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1,2,3,4].map((s) => (
              <span key={s} className="text-gold-400 text-2xl">★</span>
            ))}
            <span className="text-gold-400 text-2xl">★</span>
          </div>
          <p className="font-body text-cream-300 text-base">
            <strong className="text-white">4.7 out of 5</strong> · Google Reviews
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleReviews.map((review) => (
            <div
              key={review.name}
              className="bg-charcoal-700 rounded-2xl p-6 shadow-korean border border-charcoal-600/50 hover:shadow-korean-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-gold-400 text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-cream-300 text-sm leading-relaxed mb-5 italic">
                "{review.text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-charcoal-600/50">
                <div className="w-10 h-10 rounded-full bg-gochujang-500 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-white text-sm font-bold">{review.initials}</span>
                </div>
                <div>
                  <p className="font-body text-cream-200 text-sm font-bold">{review.name}</p>
                  <p className="font-body text-charcoal-300 text-xs">{review.date}</p>
                </div>
                <div className="ml-auto">
                  <span className="font-body text-xs text-gochujang-400 font-semibold bg-gochujang-500/20 px-2 py-1 rounded-full">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        {reviews.length > visibleCount && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full bg-charcoal-700 border border-charcoal-600 flex items-center justify-center text-cream-300 hover:bg-gochujang-500 hover:border-gochujang-500 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              aria-label="Previous reviews"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: reviews.length - visibleCount + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? 'bg-gochujang-400 w-6' : 'bg-charcoal-500'
                  }`}
                  aria-label={`Go to review set ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              disabled={currentIndex >= reviews.length - visibleCount}
              className="w-10 h-10 rounded-full bg-charcoal-700 border border-charcoal-600 flex items-center justify-center text-cream-300 hover:bg-gochujang-500 hover:border-gochujang-500 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
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
