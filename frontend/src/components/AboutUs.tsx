import React from 'react';
import { Heart } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-cream-100 bg-chili-texture">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-10 bg-chili-500 rounded-full" />
              <span className="font-body text-chili-500 text-xs tracking-[0.3em] uppercase font-bold">
                Our Story
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-ink-700 mb-6 uppercase leading-tight">
              A Taste of Home in Every Bite
            </h2>
            <p className="font-body text-ink-400 text-base sm:text-lg leading-relaxed mb-5">
              Luna's Kitchen was born from a simple dream: to bring the bold, authentic flavors of Mexican street food to the heart of Los Lunas, New Mexico. What started as a family passion for cooking has grown into one of the most beloved takeout spots in the community.
            </p>
            <p className="font-body text-ink-400 text-base sm:text-lg leading-relaxed mb-5">
              Every dish we serve is crafted with fresh, hand-selected ingredients and seasoned with recipes passed down through generations. From our slow-braised quesabirria tacos to our signature tacoburger, each bite tells a story of tradition, love, and bold New Mexican flavor.
            </p>
            <p className="font-body text-ink-400 text-base sm:text-lg leading-relaxed">
              We're more than just a restaurant — we're a gathering place for neighbors, families, and food lovers who believe that great food brings people together. Come hungry, leave happy. That's the Luna's Kitchen promise.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Heart size={20} className="text-chili-500 fill-chili-500" />
              <span className="font-body text-ink-500 text-sm italic">Made with love in Los Lunas, NM</span>
            </div>
          </div>

          {/* Visual accent */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-spicy-xl">
              <img
                src="/assets/generated/lunas-menu-quesabirria.dim_600x400.jpg"
                alt="Delicious food at Luna's Kitchen"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/20">
                  <p className="font-heading text-white text-lg uppercase tracking-wide">Quesabirria Tacos</p>
                  <p className="font-body text-cream-200 text-sm">Our most-loved dish</p>
                </div>
              </div>
            </div>
            {/* Decorative badge */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-chili-500 rounded-full flex flex-col items-center justify-center shadow-spicy-lg border-4 border-cream-100">
              <span className="font-heading text-white text-xl font-bold leading-none">4.9</span>
              <span className="font-body text-cream-200 text-xs">★ Stars</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
