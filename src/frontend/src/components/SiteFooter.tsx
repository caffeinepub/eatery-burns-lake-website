import { Link } from "@tanstack/react-router";
import { Clock, Heart, MapPin, Phone } from "lucide-react";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "ops-kitchen";

  return (
    <footer className="bg-ink-800 text-cream-200">
      {/* Top accent line */}
      <div className="h-[3px] bg-crimson-500" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-serif text-2xl font-bold text-cream-50 mb-1">
              Op's Kitchen
            </p>
            <p className="font-outfit text-xs text-stone-400 tracking-widest uppercase mb-4">
              Authentic Japanese Takeout · Havelock North
            </p>
            <span className="block w-12 h-[2px] bg-crimson-500 mb-5" />
            <p className="font-outfit text-sm text-cream-300 leading-relaxed max-w-xs">
              Freshly made dumplings, ramen & bao in the heart of Havelock
              North. Rated 4.7 stars by our wonderful community.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-base font-semibold text-cream-100 mb-4">
              Visit Us
            </h3>
            <div className="space-y-3 font-outfit text-sm text-cream-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-crimson-400 shrink-0" />
                <span>
                  Shop 20 Village Court
                  <br />
                  Te Mata Road
                  <br />
                  Havelock North 4130, NZ
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-crimson-400 shrink-0" />
                <a
                  href="tel:+6468777766"
                  className="hover:text-crimson-400 transition-colors"
                >
                  +64 6 877 7766
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-crimson-400 shrink-0" />
                <div>
                  <p>Wed–Sat: 11am–2:30pm</p>
                  <p>&amp; 4:30pm–7pm</p>
                  <p className="text-stone-500 mt-1">Sun–Tue: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-base font-semibold text-cream-100 mb-4">
              Pages
            </h3>
            <nav className="flex flex-col gap-2 font-outfit text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/menu", label: "Menu" },
                { to: "/about", label: "About Us" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid="footer.link"
                  className="text-cream-300 hover:text-crimson-400 transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://maps.google.com/?q=Shop+20+Village+Court,+Te+Mata+Road,+Havelock+North+4130"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
                className="text-cream-300 hover:text-crimson-400 transition-colors w-fit"
              >
                Get Directions ↗
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-ink-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-outfit text-xs text-stone-500">
            © {year} Op's Kitchen. All rights reserved.
          </p>
          <p className="font-outfit text-xs text-stone-500 flex items-center gap-1">
            Built with{" "}
            <Heart className="w-3 h-3 text-crimson-500 fill-crimson-500 mx-0.5" />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-crimson-400 hover:text-crimson-300 transition-colors ml-0.5"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
