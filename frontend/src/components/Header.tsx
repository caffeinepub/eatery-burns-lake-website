import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Menu', id: 'menu' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Location', id: 'location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ink-900/96 backdrop-blur-sm shadow-spicy-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo + Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
            aria-label="Luna's Kitchen - Back to top"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-salsa-400/70 shadow-glow flex-shrink-0">
              <img
                src="/assets/generated/lunas-logo.dim_300x300.png"
                alt="Luna's Kitchen Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-salsa-400 font-bold text-base md:text-lg tracking-wide group-hover:text-salsa-300 transition-colors uppercase">
                Luna's Kitchen
              </span>
              <span className="font-body text-cream-300 text-xs tracking-widest uppercase group-hover:text-white transition-colors">
                Los Lunas, NM
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-body text-sm font-semibold tracking-wide uppercase text-cream-300 hover:text-salsa-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+15054884886"
              className="flex items-center gap-2 bg-chili-500 hover:bg-chili-400 text-white font-body font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-spicy hover:shadow-spicy-lg"
            >
              <Phone size={14} />
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-cream-200 hover:text-salsa-400 transition-colors p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ink-900/98 backdrop-blur-sm border-t border-ink-700/40">
          <div className="px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-body text-sm font-semibold tracking-wide uppercase text-left py-2.5 border-b border-ink-700/30 last:border-0 text-cream-200 hover:text-salsa-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+15054884886"
              className="flex items-center justify-center gap-2 bg-chili-500 hover:bg-chili-400 text-white font-body font-bold text-sm px-4 py-3 rounded-full transition-all duration-200 mt-2"
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
