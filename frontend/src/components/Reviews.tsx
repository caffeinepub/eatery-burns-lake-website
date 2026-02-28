import React from 'react';

const reviews = [
  {
    name: 'Maria G.',
    initials: 'MG',
    rating: 5,
    text: 'The quesabirria tacos are absolutely incredible! The consommé is so flavorful and rich. Best Mexican food in Los Lunas by far! I drive out of my way just to come here.',
    date: 'January 2026',
  },
  {
    name: 'James R.',
    initials: 'JR',
    rating: 5,
    text: 'Huge portions, amazing prices. The burritos are stuffed to the brim and taste completely homemade. We come here every week — the whole family loves it!',
    date: 'February 2026',
  },
  {
    name: 'Sofia L.',
    initials: 'SL',
    rating: 5,
    text: 'Super friendly staff and the food is always fresh and hot. The tacoburger is something you absolutely have to try — completely unique and so delicious!',
    date: 'February 2026',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-cream-100 bg-chili-texture">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-chili-500/50" />
            <span className="font-body text-chili-500 text-xs tracking-[0.3em] uppercase font-bold">
              What People Say
            </span>
            <div className="h-px w-10 bg-chili-500/50" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-ink-700 mb-4 uppercase">
            Customer Reviews
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[1,2,3,4,5].map((s) => (
              <span key={s} className="text-salsa-400 text-2xl">★</span>
            ))}
          </div>
          <p className="font-body text-ink-400 text-base">
            <strong className="text-ink-700">4.9 out of 5</strong> based on 137 reviews
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-6 shadow-spicy border border-cream-300 hover:shadow-spicy-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-salsa-400 text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-ink-500 text-sm leading-relaxed mb-5 italic">
                "{review.text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-cream-300">
                <div className="w-10 h-10 rounded-full bg-chili-500 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-white text-sm font-bold">{review.initials}</span>
                </div>
                <div>
                  <p className="font-body text-ink-700 text-sm font-bold">{review.name}</p>
                  <p className="font-body text-ink-400 text-xs">{review.date}</p>
                </div>
                <div className="ml-auto">
                  <span className="font-body text-xs text-chili-500 font-semibold bg-chili-50 px-2 py-1 rounded-full">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
