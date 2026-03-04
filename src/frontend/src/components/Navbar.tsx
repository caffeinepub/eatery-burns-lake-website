import { Link, useRouter } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = router.state.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally reacts only to pathname
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/about", label: "About Us" },
  ];

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-100/95 backdrop-blur-sm shadow-warm border-b border-cream-300"
          : "bg-cream-100/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            to="/"
            data-ocid="nav.link"
            className="flex items-center gap-2 group"
          >
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl font-bold text-ink-700 tracking-tight group-hover:text-crimson-500 transition-colors">
                Op's Kitchen
              </span>
              <span className="text-[10px] font-outfit text-stone-400 tracking-widest uppercase">
                Havelock North
              </span>
            </div>
            <div className="w-[2px] h-8 bg-crimson-500 ml-1 opacity-80" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid="nav.link"
                className={`font-outfit text-sm font-medium tracking-wide transition-colors relative group ${
                  isActive(link.to)
                    ? "text-crimson-500"
                    : "text-ink-600 hover:text-crimson-500"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-crimson-500 transition-all duration-200 ${
                    isActive(link.to) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <a
              href="tel:+6468777766"
              data-ocid="nav.link"
              className="ml-2 inline-flex items-center gap-1.5 bg-crimson-500 text-cream-50 px-4 py-2 text-sm font-medium font-outfit tracking-wide hover:bg-crimson-600 transition-colors"
            >
              Call Now
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 text-ink-700 hover:text-crimson-500 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            data-ocid="nav.toggle"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream-100 border-t border-cream-300 shadow-warm-lg">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid="nav.link"
                className={`font-outfit text-base font-medium py-3 px-2 border-b border-cream-300 transition-colors ${
                  isActive(link.to)
                    ? "text-crimson-500"
                    : "text-ink-700 hover:text-crimson-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+6468777766"
              data-ocid="nav.link"
              className="mt-3 inline-flex items-center justify-center bg-crimson-500 text-cream-50 px-4 py-3 text-sm font-medium font-outfit tracking-wide hover:bg-crimson-600 transition-colors"
            >
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
