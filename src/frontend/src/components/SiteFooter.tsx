import { Clock, Heart, MapPin, Phone } from "lucide-react";
import React from "react";
import { SiFacebook, SiInstagram } from "react-icons/si";

const scrollTo = (id: string) => {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "ilona-pasta";

  return (
    <footer className="bg-espresso-800 text-espresso-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="font-heading text-ivory-50 font-bold text-2xl tracking-tight">
                ILONA
              </span>
              <br />
              <span className="font-body text-gold-400 text-xs tracking-[0.3em] uppercase">
                Pasta
              </span>
            </div>
            <p className="font-body text-espresso-200 text-sm leading-relaxed mb-5">
              Napier's hidden gem for authentic, handmade Italian pasta. A
              family kitchen with genuine heart.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/ilonapastanz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ILONA Pasta on Instagram"
                className="w-9 h-9 rounded-full bg-espresso-600 hover:bg-terracotta-500 flex items-center justify-center transition-colors duration-200"
              >
                <SiInstagram size={15} className="text-ivory-100" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ILONA PASTA on Facebook"
                className="w-9 h-9 rounded-full bg-espresso-600 hover:bg-terracotta-500 flex items-center justify-center transition-colors duration-200"
              >
                <SiFacebook size={15} className="text-ivory-100" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-ivory-50 font-semibold text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", id: "home" },
                { label: "About", id: "about" },
                { label: "Menu", id: "menu" },
                { label: "Gallery", id: "gallery" },
                { label: "Reviews", id: "reviews" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="font-body text-espresso-200 text-sm hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-ivory-50 font-semibold text-sm uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin
                  size={14}
                  className="text-terracotta-400 mt-0.5 flex-shrink-0"
                />
                <span className="font-body text-espresso-200 text-sm leading-snug">
                  80A Emerson Street
                  <br />
                  Napier South, 4110 NZ
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone
                  size={14}
                  className="text-terracotta-400 flex-shrink-0"
                />
                <a
                  href="tel:+64211860029"
                  className="font-body text-espresso-200 text-sm hover:text-gold-400 transition-colors"
                >
                  +64 21 186 0029
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock
                  size={14}
                  className="text-terracotta-400 mt-0.5 flex-shrink-0"
                />
                <span className="font-body text-espresso-200 text-sm leading-snug">
                  Dinner from 5:30 PM
                  <br />
                  Last Order 9 PM · Mon–Sun
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-body text-ivory-50 font-semibold text-sm uppercase tracking-widest mb-4">
              Hours
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between font-body text-sm">
                <span className="text-espresso-300">Opens</span>
                <span className="text-ivory-100">5:30 PM</span>
              </div>
              <div className="flex justify-between font-body text-sm">
                <span className="text-espresso-300">Last Lunch</span>
                <span className="text-ivory-100">2:00 PM</span>
              </div>
              <div className="flex justify-between font-body text-sm">
                <span className="text-espresso-300">Last Dinner</span>
                <span className="text-ivory-100">9:00 PM</span>
              </div>
              <div className="flex justify-between font-body text-sm">
                <span className="text-espresso-300">Days</span>
                <span className="text-ivory-100">Mon – Sun</span>
              </div>
            </div>

            <div className="mt-4 bg-terracotta-500/10 border border-terracotta-500/20 rounded-sm px-3 py-2">
              <p className="font-body text-terracotta-300 text-xs">
                ⭐ Popular at 7 PM — not too busy
              </p>
            </div>
          </div>
        </div>

        {/* SEO hidden text */}
        <p className="sr-only">
          Napier Italian Restaurant | Best Pasta in Napier | Family-Run Italian
          Restaurant Napier NZ
        </p>

        {/* Divider + Bottom */}
        <div className="border-t border-espresso-600/40 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-espresso-300 text-sm">
              © {year} ILONA Pasta. All rights reserved.
            </p>
            <p className="font-body text-espresso-300 text-sm flex items-center gap-1.5">
              Built with{" "}
              <Heart
                size={12}
                className="text-terracotta-400 fill-terracotta-400 mx-0.5"
              />{" "}
              using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
