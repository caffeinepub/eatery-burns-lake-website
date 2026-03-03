import { Bike, Clock, Phone, ShoppingBag } from "lucide-react";
import React from "react";

export default function OnlineOrdering() {
  return (
    <div className="py-20 bg-gochujang-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-10 bg-white/40" />
          <span className="font-body text-gochujang-200 text-xs tracking-[0.3em] uppercase font-bold">
            Quick & Easy
          </span>
          <div className="h-px w-10 bg-white/40" />
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Order Online
        </h2>
        <p className="font-body text-gochujang-100 text-base sm:text-lg max-w-xl mx-auto mb-10">
          Craving authentic Korean food? Order your favourite dishes for pickup
          or delivery. Fresh, hot, and ready when you are!
        </p>

        {/* Order Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12">
          <a
            id="order-pickup"
            href="tel:+61269647310"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-gochujang-600 font-body font-bold text-lg px-10 py-5 rounded-2xl shadow-korean-xl hover:bg-cream-100 transition-all duration-200 hover:-translate-y-1 min-w-[220px]"
          >
            <ShoppingBag size={22} />
            Order Pickup
          </a>
          <a
            id="order-delivery"
            href="tel:+61269647310"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-charcoal-900 text-white font-body font-bold text-lg px-10 py-5 rounded-2xl shadow-korean-xl hover:bg-charcoal-800 transition-all duration-200 hover:-translate-y-1 min-w-[220px]"
          >
            <Bike size={22} />
            Order Delivery
          </a>
        </div>

        {/* Info badges */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-gochujang-100">
            <Clock size={16} />
            <span className="font-body text-sm font-medium">
              Ready in 15–25 min
            </span>
          </div>
          <div className="flex items-center gap-2 text-gochujang-100">
            <Phone size={16} />
            <a
              href="tel:+61269647310"
              className="font-body text-sm font-medium hover:text-white transition-colors"
            >
              +61 2 6964 7310
            </a>
          </div>
          <div className="flex items-center gap-2 text-gochujang-100">
            <ShoppingBag size={16} />
            <span className="font-body text-sm font-medium">
              Pickup & Delivery Available
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
