import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import React from "react";

interface HeroSectionProps {
  onReserveClick: () => void;
}

export default function HeroSection({ onReserveClick }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-pasta.dim_1400x800.jpg')",
          transformOrigin: "center center",
        }}
      />

      {/* Rich layered overlay — darker at edges, lighter at centre to let food show */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso-900/60 via-transparent to-espresso-900/40" />
      {/* Warm amber vignette at the very bottom for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-espresso-900/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-28 pb-24">
        {/* Editorial eyebrow — ornamental line + location */}
        <div className="hero-animate-1 flex items-center justify-center gap-4 mb-7">
          <div className="h-px w-10 bg-gold-400/70" />
          <span className="font-body text-gold-400 text-xs font-semibold tracking-[0.35em] uppercase">
            Napier, New Zealand
          </span>
          <div className="h-px w-10 bg-gold-400/70" />
        </div>

        {/* Headline — two visual lines with weight contrast */}
        <h1 className="hero-animate-2 font-heading text-ivory-50 font-bold leading-[1.08] text-shadow-hero mb-2">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] tracking-tight">
            Napier's Hidden Gem
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] italic text-gold-300 mt-2 font-normal tracking-wide">
            for Authentic, Fresh Italian Pasta
          </span>
        </h1>

        {/* Ornamental divider — a classic trattoria touch */}
        <div className="hero-animate-3 flex items-center justify-center gap-3 mt-7 mb-7">
          <div className="h-px w-16 bg-ivory-200/30" />
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="3" fill="oklch(0.80 0.14 72)" />
            <circle cx="4" cy="12" r="1.5" fill="oklch(0.80 0.14 72 / 0.55)" />
            <circle cx="20" cy="12" r="1.5" fill="oklch(0.80 0.14 72 / 0.55)" />
          </svg>
          <div className="h-px w-16 bg-ivory-200/30" />
        </div>

        {/* Subheadline */}
        <p className="hero-animate-3 font-body text-ivory-200/90 text-lg sm:text-xl md:text-2xl max-w-xl mx-auto leading-relaxed text-shadow-sm">
          Handmade pasta, family love, unforgettable flavors
        </p>
        <p className="hero-animate-3 font-body text-ivory-300/70 text-sm sm:text-base mt-2 tracking-wide">
          80A Emerson Street, Napier South
        </p>

        {/* Rating badge — inline, editorial, not pill */}
        <div className="hero-animate-3 flex items-center justify-center gap-1.5 mt-5">
          {[1, 2, 3, 4, 5].map((i) => (
            <svg
              key={i}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill="oklch(0.80 0.14 72)"
              />
            </svg>
          ))}
          <span className="font-body text-ivory-200/80 text-sm ml-1">
            <strong className="text-ivory-100 font-semibold">4.9</strong> · 637
            Google Reviews
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="hero-animate-4 flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          <Button
            data-ocid="hero.reserve_table.button"
            onClick={onReserveClick}
            size="lg"
            className="bg-terracotta-500 hover:bg-terracotta-400 active:bg-terracotta-600 text-ivory-50 font-body font-semibold text-base px-10 py-4 h-auto rounded-none tracking-wide shadow-terracotta hover:shadow-warm-xl transition-all duration-300 min-w-[210px] ring-0 border-0"
          >
            Reserve a Table
          </Button>
          <a
            data-ocid="hero.order_online.button"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-ivory-300/60 hover:border-ivory-200 text-ivory-100 hover:text-ivory-50 hover:bg-ivory-200/10 font-body font-medium text-base px-10 py-4 rounded-none tracking-wide transition-all duration-300 min-w-[210px] justify-center backdrop-blur-sm"
          >
            Order Online
            <ExternalLink size={15} />
          </a>
        </div>
      </div>

      {/* Scroll indicator — bottom centre, animated caret */}
      <div className="hero-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="font-body text-ivory-300/50 text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="scroll-caret w-5 h-5 flex items-center justify-center">
          <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 1l6 7 6-7"
              stroke="oklch(0.91 0.018 78 / 0.45)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
