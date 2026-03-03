import { Accessibility, Car, CreditCard, MapPin, Phone } from "lucide-react";
import React from "react";

export default function Location() {
  return (
    <div className="py-20 bg-cream-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-gochujang-500/50" />
            <span className="font-body text-gochujang-500 text-xs tracking-[0.3em] uppercase font-bold">
              Come Visit Us
            </span>
            <div className="h-px w-10 bg-gochujang-500/50" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-700 mb-4">
            Find Us
          </h2>
          <p className="font-body text-charcoal-400 text-base max-w-xl mx-auto">
            We're located in Griffin Plaza, Griffith NSW. Come in for a
            delicious Korean meal!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info Cards */}
          <div className="flex flex-col gap-5">
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 border border-cream-200 shadow-korean flex items-start gap-4">
              <div className="w-12 h-12 bg-gochujang-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-gochujang-500" />
              </div>
              <div>
                <h3 className="font-heading text-charcoal-700 text-lg font-bold mb-1">
                  Address
                </h3>
                <p className="font-body text-charcoal-500 text-sm leading-relaxed">
                  Shop 1/2 Yambil St
                  <br />
                  Griffith NSW 2680
                  <br />
                  Located in Griffin Plaza
                </p>
                <a
                  href="https://maps.google.com/?q=Shop+1+2+Yambil+St+Griffith+NSW+2680"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 font-body text-gochujang-500 text-sm hover:text-gochujang-400 transition-colors font-semibold"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 border border-cream-200 shadow-korean flex items-start gap-4">
              <div className="w-12 h-12 bg-gochujang-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={22} className="text-gochujang-500" />
              </div>
              <div>
                <h3 className="font-heading text-charcoal-700 text-lg font-bold mb-1">
                  Phone
                </h3>
                <a
                  href="tel:+61269647310"
                  className="font-body text-gochujang-500 text-lg font-bold hover:text-gochujang-400 transition-colors"
                >
                  +61 2 6964 7310
                </a>
                <p className="font-body text-charcoal-400 text-sm mt-1">
                  Call us to place an order or make a reservation!
                </p>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl p-6 border border-cream-200 shadow-korean">
              <h3 className="font-heading text-charcoal-700 text-lg font-bold mb-4">
                Amenities
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gochujang-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Car size={18} className="text-gochujang-500" />
                  </div>
                  <div>
                    <p className="font-body text-charcoal-700 text-sm font-semibold">
                      Free Parking Lot
                    </p>
                    <p className="font-body text-charcoal-400 text-xs">
                      Ample free parking at Griffin Plaza
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gochujang-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Accessibility size={18} className="text-gochujang-500" />
                  </div>
                  <div>
                    <p className="font-body text-charcoal-700 text-sm font-semibold">
                      Wheelchair Accessible
                    </p>
                    <p className="font-body text-charcoal-400 text-xs">
                      Fully accessible entrance and facilities
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gochujang-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CreditCard size={18} className="text-gochujang-500" />
                  </div>
                  <div>
                    <p className="font-body text-charcoal-700 text-sm font-semibold">
                      Accepts Credit/Debit/NFC Payments
                    </p>
                    <p className="font-body text-charcoal-400 text-xs">
                      Visa, Mastercard, EFTPOS, Apple Pay & more
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-cream-200 shadow-korean-xl min-h-[400px]">
            <iframe
              title="Bunsik Korean Restaurant Location"
              src="https://maps.google.com/maps?q=Shop+1+2+Yambil+St+Griffith+NSW+2680&output=embed"
              width="100%"
              height="100%"
              style={{ minHeight: "480px", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
