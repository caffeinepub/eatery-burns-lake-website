import { BookOpen, Leaf, Smile, Users } from "lucide-react";

const VALUES = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    desc: "We source quality ingredients every day — nothing is frozen, nothing is rushed.",
  },
  {
    icon: BookOpen,
    title: "Authentic Recipes",
    desc: "Rooted in Japanese tradition, our recipes have been refined to bring you true flavors.",
  },
  {
    icon: Smile,
    title: "Friendly Service",
    desc: "We are your neighbourhood takeaway — warm, welcoming, and genuinely happy to serve.",
  },
  {
    icon: Users,
    title: "Community Favorite",
    desc: "Proudly rated 4.7 stars by the Havelock North community. We are here for you.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16 bg-cream-100 min-h-screen">
      {/* Hero banner */}
      <div className="bg-cream-200 border-b border-cream-300 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-outfit text-xs text-crimson-500 tracking-widest uppercase mb-2">
            Who We Are
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink-800 mb-3">
            Our Story
          </h1>
          <span className="accent-line-center block" />
        </div>
      </div>

      {/* Story section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/generated/hero-food.dim_1400x800.jpg"
                  alt="Op's Kitchen signature dishes"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative offset border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-crimson-300/40 pointer-events-none" />
            </div>

            {/* Text */}
            <div>
              <span className="block w-10 h-[2px] bg-crimson-500 mb-6" />
              <div className="space-y-4 font-outfit text-base text-stone-500 leading-relaxed">
                <p>
                  At <strong className="text-ink-700">Op's Kitchen</strong>, we
                  believe great food starts with great ingredients. Nestled in
                  the heart of Havelock North's Village Court, we craft every
                  dumpling, bao, and bowl of ramen with care and authenticity.
                </p>
                <p>
                  Our recipes are rooted in tradition — slow-cooked broths,
                  hand-wrapped dumplings, and flavors that take you straight to
                  the streets of Japan. We source fresh, quality ingredients and
                  prepare everything daily, so you always get food at its very
                  best.
                </p>
                <p>
                  Whether you're grabbing a quick lunch or treating yourself to
                  a satisfying dinner, Op's Kitchen is your friendly local spot
                  for something truly special. Rated{" "}
                  <strong className="text-crimson-600">4.7 stars</strong> by our
                  wonderful Havelock North community — we're proud to be your
                  neighbourhood takeaway.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <div className="bg-crimson-50 border border-crimson-200 px-4 py-3">
                  <p className="font-outfit text-xs text-crimson-600 uppercase tracking-widest">
                    Price Range
                  </p>
                  <p className="font-serif text-lg font-bold text-ink-800">
                    $20–30 per person
                  </p>
                </div>
                <div className="bg-crimson-50 border border-crimson-200 px-4 py-3">
                  <p className="font-outfit text-xs text-crimson-600 uppercase tracking-widest">
                    Location
                  </p>
                  <p className="font-serif text-lg font-bold text-ink-800">
                    Havelock North
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="bg-cream-200 border-y border-cream-300 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-outfit text-xs text-crimson-500 tracking-widest uppercase mb-2">
              What Sets Us Apart
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink-800 mb-3">
              Our Values
            </h2>
            <span className="accent-line-center block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-card border border-cream-300 p-6 text-center hover:border-crimson-200 transition-colors"
              >
                <div className="w-12 h-12 bg-crimson-500/10 border border-crimson-500/20 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-5 h-5 text-crimson-500" />
                </div>
                <h3 className="font-serif text-base font-semibold text-ink-800 mb-2">
                  {v.title}
                </h3>
                <p className="font-outfit text-sm text-stone-400 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rating highlight */}
      <section className="bg-ink-800 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Japanese-style decorative lines */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-[1px] w-20 bg-crimson-700" />
            <div className="w-1.5 h-1.5 bg-crimson-500 rotate-45" />
            <div className="h-[1px] w-20 bg-crimson-700" />
          </div>

          <p className="font-outfit text-xs text-crimson-400 tracking-widest uppercase mb-4">
            Our Community Rating
          </p>
          <div className="font-serif text-7xl md:text-8xl font-bold text-cream-50 leading-none mb-2">
            4.7
          </div>
          <div
            className="flex items-center justify-center gap-1 mb-3"
            aria-label="4.7 out of 5 stars"
          >
            {[1, 2, 3, 4, 5].map((s) => (
              <svg
                key={s}
                className={`w-6 h-6 ${s <= 4 ? "text-crimson-400" : "text-crimson-700"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
                role="presentation"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="font-outfit text-sm text-stone-400">
            52 Google Reviews
          </p>
        </div>
      </section>

      {/* Hours & location */}
      <section className="bg-cream-100 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Hours */}
            <div className="border border-cream-300 p-8 bg-card">
              <span className="block w-10 h-[2px] bg-crimson-500 mb-5" />
              <h3 className="font-serif text-2xl font-bold text-ink-800 mb-6">
                Opening Hours
              </h3>
              <div className="space-y-3 font-outfit text-sm">
                {[
                  { day: "Wednesday", hours: "11am–2:30pm, 4:30pm–7pm" },
                  { day: "Thursday", hours: "11am–2:30pm, 4:30pm–7pm" },
                  { day: "Friday", hours: "11am–2:30pm, 4:30pm–7pm" },
                  { day: "Saturday", hours: "11am–2:30pm, 4:30pm–7pm" },
                  { day: "Sunday", hours: "Closed", closed: true },
                  { day: "Monday", hours: "Closed", closed: true },
                  { day: "Tuesday", hours: "Closed", closed: true },
                ].map(({ day, hours, closed }) => (
                  <div
                    key={day}
                    className="flex justify-between items-center py-2 border-b border-cream-300 last:border-0"
                  >
                    <span className="text-ink-600 font-medium">{day}</span>
                    <span
                      className={
                        closed
                          ? "text-stone-400"
                          : "text-crimson-600 font-medium"
                      }
                    >
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="border border-cream-300 p-8 bg-card">
              <span className="block w-10 h-[2px] bg-crimson-500 mb-5" />
              <h3 className="font-serif text-2xl font-bold text-ink-800 mb-6">
                Find Us
              </h3>
              <div className="space-y-4 font-outfit text-sm text-stone-500">
                <p className="font-medium text-ink-700">
                  Shop 20 Village Court
                  <br />
                  Te Mata Road
                  <br />
                  Havelock North 4130
                  <br />
                  New Zealand
                </p>
                <div className="pt-2">
                  <a
                    href="tel:+6468777766"
                    data-ocid="about.primary_button"
                    className="block font-medium text-crimson-500 hover:text-crimson-600 transition-colors mb-1"
                  >
                    +64 6 877 7766
                  </a>
                  <a
                    href="https://maps.google.com/?q=Shop+20+Village+Court,+Te+Mata+Road,+Havelock+North+4130"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="about.secondary_button"
                    className="inline-flex items-center gap-1 text-crimson-500 hover:text-crimson-600 transition-colors mt-2"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
