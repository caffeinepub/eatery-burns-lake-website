import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Award,
  ChevronDown,
  Clock,
  Flame,
  Heart,
  Leaf,
  MapPin,
  Phone,
  Star,
} from "lucide-react";

const POPULAR_ITEMS = [
  {
    name: "Karaage Chicken",
    description:
      "Crispy Japanese fried chicken marinated in soy, ginger & sake",
    image: "/assets/generated/karaage-chicken.dim_800x600.jpg",
  },
  {
    name: "Pork Wonton",
    description: "Pan-fried wontons filled with seasoned pork & fresh herbs",
    image: "/assets/generated/pork-wonton.dim_800x600.jpg",
  },
  {
    name: "Dumplings",
    description: "Hand-wrapped dumplings with your choice of fillings",
    image: "/assets/generated/pork-wonton.dim_800x600.jpg",
  },
];

const FEATURES = [
  {
    icon: Leaf,
    label: "Fresh Daily",
    desc: "Ingredients sourced every morning",
  },
  {
    icon: Flame,
    label: "Authentic Flavors",
    desc: "Traditional Japanese recipes",
  },
  {
    icon: Star,
    label: "4.7 Stars",
    desc: "52 happy Google reviews",
  },
  {
    icon: Heart,
    label: "Local Favorite",
    desc: "Havelock North's go-to takeout",
  },
];

export default function OpsKitchenHome() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ paddingTop: "4rem" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-food.dim_1400x800.jpg')",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(10,6,4,0.80) 0%, rgba(30,12,6,0.68) 60%, rgba(10,6,4,0.82) 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.6) 39px, rgba(255,255,255,0.6) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.6) 39px, rgba(255,255,255,0.6) 40px)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="hero-animate-1 inline-flex items-center gap-1.5 bg-crimson-500/20 backdrop-blur-sm border border-crimson-500/40 text-cream-100 px-4 py-1.5 text-xs font-outfit tracking-widest uppercase mb-6">
            <Star className="w-3 h-3 fill-current text-crimson-400" />
            4.7 Stars · 52 Reviews
          </div>

          <h1 className="hero-animate-2 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream-50 leading-tight text-shadow-hero mb-5">
            Authentic Dumplings &amp;
            <br />
            <span className="text-crimson-400">Ramen</span> in Havelock North
          </h1>

          <p className="hero-animate-3 font-outfit text-base sm:text-lg text-cream-200 text-shadow-sm max-w-xl mx-auto mb-8">
            Freshly made dumplings, ramen &amp; bao – rated 4.7 stars.
          </p>

          <div className="hero-animate-4 flex flex-wrap items-center justify-center gap-3">
            <Link to="/menu" data-ocid="hero.primary_button">
              <Button className="bg-crimson-500 hover:bg-crimson-600 text-cream-50 font-outfit font-medium px-6 py-3 h-auto text-sm tracking-wide rounded-none transition-colors">
                View Menu
              </Button>
            </Link>
            <a href="tel:+6468777766" data-ocid="hero.secondary_button">
              <Button
                variant="outline"
                className="border-cream-300/60 text-cream-100 hover:bg-cream-100/10 font-outfit font-medium px-6 py-3 h-auto text-sm tracking-wide rounded-none bg-transparent transition-colors"
              >
                <Phone className="w-4 h-4 mr-1.5" />
                Call Now
              </Button>
            </a>
            <a
              href="https://maps.google.com/?q=Shop+20+Village+Court,+Te+Mata+Road,+Havelock+North+4130"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.secondary_button"
            >
              <Button
                variant="outline"
                className="border-cream-300/60 text-cream-100 hover:bg-cream-100/10 font-outfit font-medium px-6 py-3 h-auto text-sm tracking-wide rounded-none bg-transparent transition-colors"
              >
                <MapPin className="w-4 h-4 mr-1.5" />
                Get Directions
              </Button>
            </a>
          </div>
        </div>

        <a
          href="#features"
          className="scroll-caret absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-300/60 hover:text-cream-100 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-7 h-7" />
        </a>
      </section>

      {/* ── Features Strip ── */}
      <section id="features" className="bg-ink-800 py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {FEATURES.map((f) => (
              <div
                key={f.label}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 bg-crimson-500/15 border border-crimson-500/30 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-crimson-400" />
                </div>
                <div>
                  <p className="font-serif text-sm font-semibold text-cream-100">
                    {f.label}
                  </p>
                  <p className="font-outfit text-xs text-stone-400 mt-0.5">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular Items ── */}
      <section className="bg-cream-100 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-outfit text-xs text-crimson-500 tracking-widest uppercase mb-2">
              Customer Picks
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink-800 mb-3">
              Popular Items
            </h2>
            <span className="accent-line-center block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {POPULAR_ITEMS.map((item, i) => (
              <div
                key={item.name}
                data-ocid={`popular.item.${i + 1}`}
                className="group bg-card border border-cream-300 overflow-hidden card-hover"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-ink-800 mb-1">
                    {item.name}
                  </h3>
                  <p className="font-outfit text-sm text-stone-400 mb-4">
                    {item.description}
                  </p>
                  <Link
                    to="/menu"
                    data-ocid="popular.link"
                    className="inline-flex items-center text-crimson-500 font-outfit text-sm font-medium hover:text-crimson-600 transition-colors group/link"
                  >
                    View Menu
                    <span className="ml-1 group-hover/link:ml-2 transition-all">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hours Preview ── */}
      <section className="bg-cream-200 py-10 border-y border-cream-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 text-center">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-crimson-500" />
              <span className="font-outfit text-sm font-medium text-ink-700">
                Open Wed–Sat
              </span>
            </div>
            <span className="hidden sm:block text-stone-400">·</span>
            <span className="font-outfit text-sm text-ink-600">
              11am–2:30pm &amp; 4:30pm–7pm
            </span>
            <span className="hidden sm:block text-stone-400">·</span>
            <span className="font-outfit text-sm text-stone-500">
              Closed Sun–Tue
            </span>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-cream-100 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-16 bg-crimson-200" />
            <Award className="w-5 h-5 text-crimson-400" />
            <div className="h-[1px] w-16 bg-crimson-200" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink-800 mb-3">
            Ready to Order?
          </h2>
          <p className="font-outfit text-base text-stone-500 max-w-sm mx-auto mb-8">
            Call us or visit our location in Havelock North
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="tel:+6468777766" data-ocid="cta.primary_button">
              <Button className="bg-crimson-500 hover:bg-crimson-600 text-cream-50 font-outfit font-medium px-8 py-3 h-auto text-sm tracking-wide rounded-none transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
            <a
              href="https://maps.google.com/?q=Shop+20+Village+Court,+Te+Mata+Road,+Havelock+North+4130"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="cta.secondary_button"
            >
              <Button
                variant="outline"
                className="border-crimson-400 text-crimson-600 hover:bg-crimson-50 font-outfit font-medium px-8 py-3 h-auto text-sm tracking-wide rounded-none transition-colors"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
