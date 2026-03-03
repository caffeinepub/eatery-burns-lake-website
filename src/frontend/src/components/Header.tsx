import { Menu, Phone, X } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Menu", id: "menu" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-espresso-800/96 backdrop-blur-sm shadow-warm-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
            aria-label="ILONA Pasta - Back to top"
          >
            <span className="font-heading text-ivory-100 font-bold text-xl">
              ILONA Pasta
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-5 lg:gap-7">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-body text-sm font-semibold tracking-wide uppercase text-ivory-200 hover:text-gold-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+64211860029"
              className="flex items-center gap-2 bg-terracotta-500 hover:bg-terracotta-400 text-white font-body font-bold text-sm px-5 py-2.5 rounded-none transition-all duration-200 shadow-terracotta"
            >
              <Phone size={14} />
              Call Now
            </a>
          </nav>

          <button
            type="button"
            className="md:hidden text-ivory-200 hover:text-gold-400 transition-colors p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-espresso-800/98 backdrop-blur-sm border-t border-espresso-600/30">
          <div className="px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="font-body text-sm font-semibold tracking-wide uppercase text-left py-2.5 border-b border-espresso-600/20 last:border-0 text-ivory-200 hover:text-gold-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+64211860029"
              className="flex items-center justify-center gap-2 bg-terracotta-500 hover:bg-terracotta-400 text-white font-body font-bold text-sm px-4 py-3 rounded-none transition-all duration-200 mt-2"
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
