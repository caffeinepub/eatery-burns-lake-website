import { Clock } from "lucide-react";
import React from "react";

const schedule = [
  { day: "Sunday", dayIndex: 0, hours: "11:00 AM – 8:00 PM" },
  {
    day: "Monday",
    dayIndex: 1,
    hours: "11:00 AM – 3:00 PM, 5:00 PM – 9:00 PM",
  },
  {
    day: "Tuesday",
    dayIndex: 2,
    hours: "11:00 AM – 3:00 PM, 5:00 PM – 9:00 PM",
  },
  {
    day: "Wednesday",
    dayIndex: 3,
    hours: "11:00 AM – 3:00 PM, 5:00 PM – 9:00 PM",
  },
  {
    day: "Thursday",
    dayIndex: 4,
    hours: "11:00 AM – 3:00 PM, 5:00 PM – 9:00 PM",
  },
  {
    day: "Friday",
    dayIndex: 5,
    hours: "11:00 AM – 3:00 PM, 5:00 PM – 9:00 PM",
  },
  { day: "Saturday", dayIndex: 6, hours: "11:00 AM – 9:00 PM" },
];

export default function OpeningHours() {
  const today = new Date().getDay();

  return (
    <section id="hours" className="py-20 bg-charcoal-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-gochujang-400/50" />
            <span className="font-body text-gochujang-400 text-xs tracking-[0.3em] uppercase font-bold">
              We're Open
            </span>
            <div className="h-px w-10 bg-gochujang-400/50" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Opening Hours
          </h2>
          <div className="flex items-center justify-center gap-2">
            <Clock size={16} className="text-gold-400" />
            <p className="font-body text-cream-300 text-base">
              Come visit us at Griffin Plaza, Griffith NSW
            </p>
          </div>
        </div>

        {/* Hours Grid */}
        <div className="bg-charcoal-700 rounded-3xl overflow-hidden shadow-korean-xl border border-charcoal-600/50">
          {schedule.map((item, index) => {
            const isToday = item.dayIndex === today;
            return (
              <div
                key={item.day}
                className={`flex items-center justify-between px-6 py-4 transition-colors ${
                  isToday
                    ? "bg-gochujang-500/20 border-l-4 border-gochujang-500"
                    : index % 2 === 0
                      ? "bg-charcoal-700"
                      : "bg-charcoal-800/50"
                } ${index < schedule.length - 1 ? "border-b border-charcoal-600/30" : ""}`}
              >
                <div className="flex items-center gap-3">
                  {isToday && (
                    <span className="w-2 h-2 rounded-full bg-gochujang-400 flex-shrink-0 animate-pulse" />
                  )}
                  <span
                    className={`font-body text-base font-semibold ${
                      isToday ? "text-gochujang-300" : "text-cream-200"
                    }`}
                  >
                    {item.day}
                    {isToday && (
                      <span className="ml-2 text-xs font-bold bg-gochujang-500 text-white px-2 py-0.5 rounded-full">
                        Today
                      </span>
                    )}
                  </span>
                </div>
                <span
                  className={`font-body text-sm font-medium text-right ${
                    isToday ? "text-gold-400 font-bold" : "text-cream-300"
                  }`}
                >
                  {item.hours}
                </span>
              </div>
            );
          })}
        </div>

        <p className="text-center font-body text-charcoal-300 text-sm mt-6">
          📍 Shop 1/2 Yambil St, Griffith NSW 2680 · Griffin Plaza
        </p>
      </div>
    </section>
  );
}
