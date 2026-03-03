import { Clock, Instagram, MapPin, Phone, Star } from "lucide-react";
import React from "react";
import { SiFacebook, SiInstagram } from "react-icons/si";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-body text-terracotta-500 text-sm font-semibold tracking-[0.3em] uppercase">
            Come Visit Us
          </span>
          <h2 className="font-heading text-espresso-700 text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Find <span className="italic text-terracotta-500">Us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Contact Info */}
          <div>
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 flex-shrink-0 bg-terracotta-500/10 rounded-full flex items-center justify-center">
                  <MapPin size={18} className="text-terracotta-500" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-espresso-700 text-base mb-1">
                    Address
                  </h4>
                  <p className="font-body text-espresso-400 text-base leading-relaxed">
                    80A Emerson Street
                    <br />
                    Napier South, Napier 4110
                    <br />
                    New Zealand
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-10 h-10 flex-shrink-0 bg-terracotta-500/10 rounded-full flex items-center justify-center">
                  <Phone size={18} className="text-terracotta-500" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-espresso-700 text-base mb-1">
                    Phone
                  </h4>
                  <a
                    data-ocid="contact.phone.button"
                    href="tel:+64211860029"
                    className="font-body text-terracotta-500 hover:text-terracotta-600 font-semibold text-base transition-colors underline underline-offset-4"
                  >
                    +64 21 186 0029
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-10 h-10 flex-shrink-0 bg-terracotta-500/10 rounded-full flex items-center justify-center">
                  <Clock size={18} className="text-terracotta-500" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-espresso-700 text-base mb-2">
                    Opening Hours
                  </h4>
                  <div className="space-y-1.5">
                    <div className="flex justify-between gap-8 font-body text-sm">
                      <span className="text-espresso-400">Dinner Opens</span>
                      <span className="text-espresso-700 font-medium">
                        5:30 PM
                      </span>
                    </div>
                    <div className="flex justify-between gap-8 font-body text-sm">
                      <span className="text-espresso-400">
                        Last Lunch Order
                      </span>
                      <span className="text-espresso-700 font-medium">
                        2:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between gap-8 font-body text-sm">
                      <span className="text-espresso-400">
                        Last Dinner Order
                      </span>
                      <span className="text-espresso-700 font-medium">
                        9:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between gap-8 font-body text-sm">
                      <span className="text-espresso-400">Days Open</span>
                      <span className="text-espresso-700 font-medium">
                        Mon–Sun
                      </span>
                    </div>
                  </div>
                  <p className="font-body text-olive-600 text-sm mt-3 flex items-center gap-1.5">
                    <Star size={12} className="fill-gold-400 text-gold-400" />
                    Popular time: 7 PM — usually not too busy
                  </p>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-4">
                <div className="w-10 h-10 flex-shrink-0 bg-terracotta-500/10 rounded-full flex items-center justify-center">
                  <Instagram size={18} className="text-terracotta-500" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-espresso-700 text-base mb-2">
                    Follow Us
                  </h4>
                  <div className="flex gap-3">
                    <a
                      data-ocid="contact.instagram.button"
                      href="https://instagram.com/ilonapastanz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-body text-sm font-medium text-espresso-600 hover:text-terracotta-500 transition-colors"
                      aria-label="ILONA Pasta on Instagram"
                    >
                      <SiInstagram size={16} className="text-pink-600" />
                      @ilonapastanz
                    </a>
                    <span className="text-ivory-400">·</span>
                    <a
                      data-ocid="contact.facebook.button"
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-body text-sm font-medium text-espresso-600 hover:text-terracotta-500 transition-colors"
                      aria-label="ILONA PASTA on Facebook"
                    >
                      <SiFacebook size={16} className="text-blue-600" />
                      ILONA PASTA
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Price + Vegetarian badges */}
            <div className="flex gap-3 mt-8 flex-wrap">
              <div className="bg-olive-500/10 border border-olive-500/30 text-olive-600 text-sm font-body font-semibold px-4 py-2 rounded-sm">
                🌿 Vegetarian-Friendly
              </div>
              <div className="bg-gold-400/10 border border-gold-400/30 text-espresso-600 text-sm font-body font-semibold px-4 py-2 rounded-sm">
                💰 $20–30 per person
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-sm overflow-hidden shadow-warm-xl border border-ivory-300">
            <iframe
              data-ocid="contact.map_marker"
              src="https://maps.google.com/maps?q=80A+Emerson+Street+Napier+South+Napier+4110+New+Zealand&output=embed"
              title="ILONA Pasta location map"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
