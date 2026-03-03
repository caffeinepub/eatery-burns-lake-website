import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";

interface NavigationProps {
  onReserveClick: () => void;
}

const navLinks = [
  { label: "Home", id: "home", ocid: "nav.home.link" },
  { label: "About", id: "about", ocid: "nav.about.link" },
  { label: "Menu", id: "menu", ocid: "nav.menu.link" },
  { label: "Gallery", id: "gallery", ocid: "nav.gallery.link" },
  { label: "Reviews", id: "reviews", ocid: "nav.reviews.link" },
  { label: "Contact", id: "contact", ocid: "nav.contact.link" },
];

export default function Navigation({ onReserveClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? "bg-espresso-800/97 backdrop-blur-md shadow-warm-lg"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo("home")}
            className="group flex flex-col leading-none"
            aria-label="ILONA Pasta — Back to top"
          >
            <span className="font-heading text-ivory-100 font-bold text-xl md:text-2xl tracking-tight group-hover:text-gold-400 transition-colors duration-200">
              ILONA
            </span>
            <span className="font-body text-ivory-300 text-xs tracking-[0.25em] uppercase group-hover:text-gold-400 transition-colors duration-200">
              Pasta
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.id}
                data-ocid={link.ocid}
                onClick={() => scrollTo(link.id)}
                className="font-body text-sm font-medium tracking-wide text-ivory-200 hover:text-gold-400 transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <Button
              data-ocid="nav.reserve_table.button"
              onClick={onReserveClick}
              className="bg-terracotta-500 hover:bg-terracotta-400 text-ivory-50 font-body font-semibold text-sm px-6 py-2.5 rounded-none tracking-wide transition-all duration-200 shadow-terracotta hover:shadow-warm-lg"
            >
              Reserve Table
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            type="button"
            data-ocid="nav.mobile_menu.toggle"
            className="md:hidden text-ivory-100 hover:text-gold-400 transition-colors p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-espresso-800/98 backdrop-blur-md border-t border-espresso-600/30">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.id}
                data-ocid={link.ocid}
                onClick={() => scrollTo(link.id)}
                className="font-body text-sm font-medium text-left py-3 border-b border-espresso-600/20 last:border-0 text-ivory-200 hover:text-gold-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              data-ocid="nav.reserve_table.button"
              onClick={() => {
                setMobileOpen(false);
                onReserveClick();
              }}
              className="mt-3 bg-terracotta-500 hover:bg-terracotta-400 text-ivory-50 font-body font-semibold tracking-wide rounded-none"
            >
              Reserve Table
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
