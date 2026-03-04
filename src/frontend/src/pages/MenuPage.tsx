import { Badge } from "@/components/ui/badge";
import { Phone, Star } from "lucide-react";

const MENU_CATEGORIES = [
  {
    name: "Dumplings",
    items: [
      {
        name: "Pork Wonton",
        price: "$15.00",
        description: "Pan-fried or steamed wontons filled with seasoned pork",
      },
      {
        name: "Vegetarian Dumplings",
        price: "$15.00",
        description: "Freshly made dumplings with seasonal vegetables",
      },
    ],
  },
  {
    name: "Bao",
    items: [
      {
        name: "Bao",
        price: "$10.00",
        description: "Soft steamed bao bun with your choice of filling",
      },
    ],
  },
  {
    name: "Ramen",
    items: [
      {
        name: "Ramen",
        price: "$19.00",
        description: "Rich, slow-cooked broth with noodles and fresh toppings",
      },
    ],
  },
];

const FAVORITES = [
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

export default function MenuPage() {
  return (
    <div className="pt-16 bg-cream-100 min-h-screen">
      {/* Page header */}
      <div className="bg-cream-200 border-b border-cream-300 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-outfit text-xs text-crimson-500 tracking-widest uppercase mb-2">
            What We Serve
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink-800 mb-3">
            Our Menu
          </h1>
          <span className="accent-line-center block mb-4" />
          <p className="font-outfit text-sm text-stone-500">
            Everything freshly made daily in Havelock North
          </p>
        </div>
      </div>

      {/* Ordering banner */}
      <div className="bg-ink-800 py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-outfit text-sm text-cream-200 text-center">
            Order by phone —{" "}
            <a
              href="tel:+6468777766"
              data-ocid="menu.primary_button"
              className="font-semibold text-crimson-400 hover:text-crimson-300 transition-colors"
            >
              Call +64 6 877 7766
            </a>{" "}
            <span className="mx-2 text-stone-600">|</span>
            <span className="text-stone-400">Pickup only</span>
          </p>
        </div>
      </div>

      {/* Menu categories */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid gap-10 md:gap-14">
          {MENU_CATEGORIES.map((cat, catIdx) => (
            <section key={cat.name} data-ocid={`menu.panel.${catIdx + 1}`}>
              <div className="flex items-center gap-4 mb-6">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink-800 whitespace-nowrap">
                  {cat.name}
                </h2>
                <div className="flex-1 h-[1px] bg-cream-300" />
              </div>

              <div className="grid gap-3">
                {cat.items.map((item, itemIdx) => (
                  <div
                    key={item.name}
                    data-ocid={`menu.item.${catIdx * 10 + itemIdx + 1}`}
                    className="flex items-start justify-between gap-4 bg-card border border-cream-300 px-5 py-4 hover:border-crimson-200 hover:bg-crimson-50/30 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-base font-semibold text-ink-800">
                        {item.name}
                      </h3>
                      <p className="font-outfit text-sm text-stone-400 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                    <span className="font-serif text-base font-bold text-crimson-500 shrink-0">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Divider */}
        <div className="my-16 flex items-center gap-4">
          <div className="flex-1 h-[1px] bg-cream-300" />
          <div className="w-2 h-2 bg-crimson-400 rotate-45" />
          <div className="flex-1 h-[1px] bg-cream-300" />
        </div>

        {/* Customer Favorites */}
        <section>
          <div className="text-center mb-10">
            <p className="font-outfit text-xs text-crimson-500 tracking-widest uppercase mb-2">
              Most Ordered
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink-800 mb-3">
              Customer Favorites
            </h2>
            <span className="accent-line-center block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {FAVORITES.map((item, i) => (
              <div
                key={item.name}
                data-ocid={`favorites.item.${i + 1}`}
                className="group relative bg-card border border-cream-300 overflow-hidden card-hover"
              >
                <div className="absolute top-3 left-3 z-10">
                  <Badge className="bg-crimson-500 text-cream-50 font-outfit text-[10px] tracking-wide px-2 py-0.5 rounded-none border-0 flex items-center gap-1">
                    <Star className="w-2.5 h-2.5 fill-current" />
                    Popular
                  </Badge>
                </div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-base font-semibold text-ink-800 mb-1">
                    {item.name}
                  </h3>
                  <p className="font-outfit text-sm text-stone-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Order CTA */}
        <div className="mt-16 bg-ink-800 p-8 md:p-10 text-center">
          <h3 className="font-serif text-2xl font-bold text-cream-50 mb-2">
            Ready to order?
          </h3>
          <p className="font-outfit text-sm text-stone-400 mb-5">
            Call us to place your order for pickup
          </p>
          <a
            href="tel:+6468777766"
            data-ocid="menu.secondary_button"
            className="inline-flex items-center gap-2 bg-crimson-500 hover:bg-crimson-600 text-cream-50 font-outfit font-medium px-8 py-3 text-sm tracking-wide transition-colors"
          >
            <Phone className="w-4 h-4" />
            +64 6 877 7766
          </a>
        </div>
      </div>
    </div>
  );
}
