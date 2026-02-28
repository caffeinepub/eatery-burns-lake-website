import React from 'react';
import { Phone, MapPin, Heart } from 'lucide-react';
import { SiFacebook, SiInstagram } from 'react-icons/si';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'lunas-kitchen');

  return (
    <footer className="bg-ink-900 text-ink-200">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-chili-500/50 flex-shrink-0">
                <img
                  src="/assets/generated/lunas-logo.dim_300x300.png"
                  alt="Luna's Kitchen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-heading text-salsa-400 font-bold text-base uppercase tracking-wide">Luna's Kitchen</p>
                <p className="font-body text-ink-400 text-xs">Los Lunas, New Mexico</p>
              </div>
            </div>
            <p className="font-body text-ink-400 text-sm leading-relaxed mb-4">
              Authentic Mexican street food made with fresh ingredients and bold flavors. Your favorite takeout spot in Los Lunas, NM.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Luna's Kitchen on Facebook"
                className="w-9 h-9 rounded-full bg-ink-700 hover:bg-chili-500 flex items-center justify-center transition-colors duration-200"
              >
                <SiFacebook size={16} className="text-ink-200" />
              </a>
              <a
                href="#"
                aria-label="Luna's Kitchen on Instagram"
                className="w-9 h-9 rounded-full bg-ink-700 hover:bg-chili-500 flex items-center justify-center transition-colors duration-200"
              >
                <SiInstagram size={16} className="text-ink-200" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-cream-200 font-semibold text-base mb-4 uppercase tracking-wide">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="text-chili-400 mt-0.5 flex-shrink-0" />
                <span className="font-body text-ink-300 text-sm">
                  3470 NM-47, Los Lunas,<br />NM 87031, United States
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-chili-400 flex-shrink-0" />
                <a
                  href="tel:+15054884886"
                  className="font-body text-ink-300 text-sm hover:text-salsa-400 transition-colors"
                >
                  +1 505-488-4886
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-cream-200 font-semibold text-base mb-4 uppercase tracking-wide">Hours</h4>
            <ul className="space-y-1.5">
              <li className="flex justify-between font-body text-sm">
                <span className="text-ink-400">Mon – Thu</span>
                <span className="text-ink-200">9:00 AM – 8:00 PM</span>
              </li>
              <li className="flex justify-between font-body text-sm">
                <span className="text-ink-400">Fri – Sat</span>
                <span className="text-ink-200">9:00 AM – 9:00 PM</span>
              </li>
              <li className="flex justify-between font-body text-sm">
                <span className="text-ink-400">Sunday</span>
                <span className="text-ink-200">10:00 AM – 7:00 PM</span>
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
              <span className="font-body text-red-400 text-xs font-semibold">Closed Now</span>
              <span className="font-body text-ink-400 text-xs">· Opens at 9:00 AM</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-ink-700/50 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-ink-500 text-sm text-center sm:text-left">
              © {year} Luna's Kitchen. All rights reserved.
            </p>
            <p className="font-body text-ink-500 text-sm flex items-center gap-1">
              Built with <Heart size={13} className="text-chili-500 fill-chili-500 mx-0.5" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-salsa-400 hover:text-salsa-300 transition-colors"
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
