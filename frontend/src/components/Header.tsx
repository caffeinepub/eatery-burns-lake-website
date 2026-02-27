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
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'About', id: 'about-section' },
    { label: 'Menu', id: 'menu-section' },
    { label: 'Experience', id: 'experience-section' },
    { label: 'Location', id: 'location-section' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-wood-800/95 backdrop-blur-sm shadow-warm-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo + Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
            aria-label="Eatery Burns Lake - Back to top"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-amber-400/60 shadow-glow flex-shrink-0">
              <img
                src="/assets/generated/eatery-logo.dim_300x300.png"
                alt="Eatery Burns Lake Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-amber-300 font-bold text-base md:text-lg tracking-wide group-hover:text-amber-200 transition-colors">
                Eatery
              </span>
              <span className="font-body text-wood-200 text-xs md:text-sm tracking-widest uppercase group-hover:text-white transition-colors">
                Burns Lake
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-body text-wood-200 hover:text-amber-300 transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+12502515445"
              className="flex items-center gap-2 bg-terra-400 hover:bg-terra-300 text-white font-body font-bold text-sm px-4 py-2 rounded-full transition-all duration-200 shadow-warm hover:shadow-warm-lg"
            >
              <Phone size={14} />
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-wood-200 hover:text-amber-300 transition-colors p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-wood-800/98 backdrop-blur-sm border-t border-wood-600/30">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-body text-wood-200 hover:text-amber-300 transition-colors text-sm font-medium tracking-wide uppercase text-left py-2 border-b border-wood-600/20 last:border-0"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+12502515445"
              className="flex items-center justify-center gap-2 bg-terra-400 hover:bg-terra-300 text-white font-body font-bold text-sm px-4 py-3 rounded-full transition-all duration-200 mt-2"
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
