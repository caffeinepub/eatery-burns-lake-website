import React from 'react';
import { Heart, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'eatery-burns-lake');

  return (
    <footer className="bg-wood-900 text-wood-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-400/40 flex-shrink-0">
                <img
                  src="/assets/generated/eatery-logo.dim_300x300.png"
                  alt="Eatery Burns Lake"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-heading text-amber-300 font-bold text-base">Eatery Burns Lake</p>
                <p className="font-body text-wood-400 text-xs">Burns Lake, BC</p>
              </div>
            </div>
            <p className="font-body text-wood-400 text-sm leading-relaxed">
              Your local destination for great food and a cozy atmosphere on Yellowhead Highway.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-wood-200 font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us', id: 'about-section' },
                { label: 'Our Menu', id: 'menu-section' },
                { label: 'Why Visit Us', id: 'experience-section' },
                { label: 'Location', id: 'location-section' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(link.id);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="font-body text-wood-400 hover:text-amber-300 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-wood-200 font-semibold text-base mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-terra-400 mt-0.5 flex-shrink-0" />
                <p className="font-body text-wood-400 text-sm">
                  321 Yellowhead Hwy<br />Burns Lake, BC V8J 4K8
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-terra-400 flex-shrink-0" />
                <a
                  href="tel:+12502515445"
                  className="font-body text-wood-400 hover:text-amber-300 text-sm transition-colors"
                >
                  +1 250-251-5445
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-wood-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-wood-500 text-xs">
            © {year} Eatery Burns Lake. All rights reserved.
          </p>
          <p className="font-body text-wood-500 text-xs flex items-center gap-1">
            Built with{' '}
            <Heart size={12} className="text-terra-400 fill-terra-400 mx-0.5" />
            {' '}using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
