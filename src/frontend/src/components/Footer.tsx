import { Heart, MapPin, Phone } from "lucide-react";
import React from "react";
import { SiFacebook, SiInstagram } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "ilona-pasta",
  );

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-espresso-800 text-espresso-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="font-heading text-ivory-50 font-bold text-xl mb-3">
              ILONA Pasta
            </p>
            <p className="font-body text-espresso-300 text-sm leading-relaxed mb-4">
              Napier's hidden gem for authentic, handmade Italian pasta.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/ilonapastanz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ILONA Pasta on Instagram"
                className="w-9 h-9 rounded-full bg-espresso-600 hover:bg-terracotta-500 flex items-center justify-center transition-colors duration-200"
              >
                <SiInstagram size={16} className="text-espresso-200" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ILONA PASTA on Facebook"
                className="w-9 h-9 rounded-full bg-espresso-600 hover:bg-terracotta-500 flex items-center justify-center transition-colors duration-200"
              >
                <SiFacebook size={16} className="text-espresso-200" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-body text-ivory-200 font-semibold text-base mb-4 uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin
                  size={15}
                  className="text-terracotta-400 mt-0.5 flex-shrink-0"
                />
                <span className="font-body text-espresso-300 text-sm">
                  80A Emerson Street
                  <br />
                  Napier South, 4110 NZ
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone
                  size={15}
                  className="text-terracotta-400 flex-shrink-0"
                />
                <a
                  href="tel:+64211860029"
                  className="font-body text-espresso-300 text-sm hover:text-gold-400 transition-colors"
                >
                  +64 21 186 0029
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {[
                  { label: "Menu", id: "menu" },
                  { label: "Gallery", id: "gallery" },
                  { label: "Contact", id: "contact" },
                ].map((link) => (
                  <button
                    type="button"
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="font-body text-espresso-400 text-sm hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-body text-ivory-200 font-semibold text-base mb-4 uppercase tracking-wide">
              Hours
            </h4>
            <ul className="space-y-1.5">
              <li className="flex justify-between font-body text-sm">
                <span className="text-espresso-400">Opens</span>
                <span className="text-espresso-200">5:30 PM</span>
              </li>
              <li className="flex justify-between font-body text-sm">
                <span className="text-espresso-400">Last Order</span>
                <span className="text-espresso-200">9:00 PM</span>
              </li>
              <li className="flex justify-between font-body text-sm">
                <span className="text-espresso-400">Days</span>
                <span className="text-espresso-200">Mon – Sun</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-espresso-600/50 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-espresso-500 text-sm text-center sm:text-left">
              © {year} ILONA Pasta. All rights reserved.
            </p>
            <p className="font-body text-espresso-500 text-sm flex items-center gap-1">
              Built with{" "}
              <Heart
                size={13}
                className="text-terracotta-500 fill-terracotta-500 mx-0.5"
              />{" "}
              using{" "}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
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
