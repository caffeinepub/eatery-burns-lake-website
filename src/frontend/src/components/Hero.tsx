import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-pasta.dim_1400x800.jpg')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-24">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
          ILONA Pasta — Napier's Hidden Gem
        </h1>
        <p className="font-body text-white/90 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Authentic handmade pasta · Family-run · 80A Emerson Street, Napier
        </p>
      </div>
    </section>
  );
}
