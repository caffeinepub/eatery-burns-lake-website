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
    { label: 'Order', id: 'order' },
    { label: 'Reservations', id: 'reservation' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-charcoal-900/96 backdrop-blur-sm shadow-korean-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo + Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
            aria-label="Bunsik Korean Restaurant - Back to top"
          >
            <div className="h-10 md:h-12 overflow-hidden flex-shrink-0">
              <img
                src="/assets/generated/logo.dim_400x200.png"
                alt="Bunsik Korean Restaurant Logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-gochujang-400 font-bold text-base md:text-lg tracking-wide group-hover:text-gochujang-300 transition-colors">
                Bunsik
              </span>
              <span className="font-body text-cream-300 text-xs tracking-widest uppercase group-hover:text-white transition-colors">
                Korean Restaurant
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-body text-sm font-semibold tracking-wide uppercase text-cream-300 hover:text-gochujang-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+61269647310"
              className="flex items-center gap-2 bg-gochujang-500 hover:bg-gochujang-400 text-white font-body font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-korean hover:shadow-korean-lg"
            >
              <Phone size={14} />
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-cream-200 hover:text-gochujang-400 transition-colors p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-charcoal-900/98 backdrop-blur-sm border-t border-charcoal-700/40">
          <div className="px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-body text-sm font-semibold tracking-wide uppercase text-left py-2.5 border-b border-charcoal-700/30 last:border-0 text-cream-200 hover:text-gochujang-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+61269647310"
              className="flex items-center justify-center gap-2 bg-gochujang-500 hover:bg-gochujang-400 text-white font-body font-bold text-sm px-4 py-3 rounded-full transition-all duration-200 mt-2"
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
