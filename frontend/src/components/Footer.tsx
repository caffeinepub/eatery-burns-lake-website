import React from 'react';
import { Phone, MapPin, Heart, Clock } from 'lucide-react';
import { SiFacebook, SiInstagram } from 'react-icons/si';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'bunsik-korean-restaurant');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-900 text-charcoal-200">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 overflow-hidden flex-shrink-0">
                <img
                  src="/assets/generated/logo.dim_400x200.png"
                  alt="Bunsik Korean Restaurant"
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
            <p className="font-body text-charcoal-400 text-sm leading-relaxed mb-4">
              Authentic Korean street food and traditional meals in Griffith NSW. Bold flavors, family-friendly atmosphere.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Bunsik Korean Restaurant on Facebook"
                className="w-9 h-9 rounded-full bg-charcoal-700 hover:bg-gochujang-500 flex items-center justify-center transition-colors duration-200"
              >
                <SiFacebook size={16} className="text-charcoal-200" />
              </a>
              <a
                href="#"
                aria-label="Bunsik Korean Restaurant on Instagram"
                className="w-9 h-9 rounded-full bg-charcoal-700 hover:bg-gochujang-500 flex items-center justify-center transition-colors duration-200"
              >
                <SiInstagram size={16} className="text-charcoal-200" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-cream-200 font-semibold text-base mb-4 uppercase tracking-wide">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="text-gochujang-400 mt-0.5 flex-shrink-0" />
                <span className="font-body text-charcoal-300 text-sm">
                  Shop 1/2 Yambil St, Griffith NSW 2680<br />
                  <span className="text-charcoal-400 text-xs">Griffin Plaza</span>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-gochujang-400 flex-shrink-0" />
                <a
                  href="tel:+61269647310"
                  className="font-body text-charcoal-300 text-sm hover:text-gochujang-400 transition-colors"
                >
                  +61 2 6964 7310
                </a>
              </li>
            </ul>

            {/* Quick Nav */}
            <div className="mt-5">
              <h5 className="font-body text-charcoal-400 text-xs uppercase tracking-widest mb-2">Quick Links</h5>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {[
                  { label: 'Menu', id: 'menu' },
                  { label: 'Order', id: 'order' },
                  { label: 'Reservations', id: 'reservation' },
                  { label: 'Contact', id: 'contact' },
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="font-body text-charcoal-400 text-sm hover:text-gochujang-400 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-cream-200 font-semibold text-base mb-4 uppercase tracking-wide">
              <span className="flex items-center gap-2"><Clock size={14} /> Hours</span>
            </h4>
            <ul className="space-y-1.5">
              <li className="flex justify-between font-body text-sm">
                <span className="text-charcoal-400">Sunday</span>
                <span className="text-charcoal-200">11am – 8pm</span>
              </li>
              <li className="flex justify-between font-body text-sm">
                <span className="text-charcoal-400">Mon – Fri</span>
                <span className="text-charcoal-200">11am – 3pm, 5–9pm</span>
              </li>
              <li className="flex justify-between font-body text-sm">
                <span className="text-charcoal-400">Saturday</span>
                <span className="text-charcoal-200">11am – 9pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-charcoal-700/50 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-charcoal-500 text-sm text-center sm:text-left">
              © {year} Bunsik Korean Restaurant. All rights reserved.
            </p>
            <p className="font-body text-charcoal-500 text-sm flex items-center gap-1">
              Built with <Heart size={13} className="text-gochujang-500 fill-gochujang-500 mx-0.5" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gochujang-400 hover:text-gochujang-300 transition-colors"
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
