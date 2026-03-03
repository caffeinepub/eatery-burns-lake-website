import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChefHat, ExternalLink, Star } from "lucide-react";
import React from "react";

interface MenuItem {
  name: string;
  description?: string;
  badge?: "bestseller" | "chef";
  image?: string;
}

const starters: MenuItem[] = [
  {
    name: "Bruschetta",
    description: "Toasted bread with ripe tomatoes, fresh basil & olive oil",
  },
  {
    name: "Burrata Garden",
    description: "Fresh burrata with seasonal garden vegetables",
  },
  {
    name: "Ona's Mediterranean Bruschetta",
    description: "A special house recipe with Mediterranean flair",
  },
  {
    name: "Deep Fried Calamari",
    description: "Crispy golden calamari with lemon aioli",
  },
  {
    name: "Luxe Cheese Ball",
    description: "Premium cheese with crackers and house accompaniments",
  },
];

const pasta: MenuItem[] = [
  {
    name: "Napier Summer",
    description: "Fresh seasonal ingredients celebrating local NZ flavours",
  },
  {
    name: "Nero Rosato",
    description: "Black squid ink pasta with rose-infused sauce",
    badge: "chef",
  },
  {
    name: "Pork Belly Fettuccini",
    description:
      "Slow-braised pork belly in rich pan sauce with fresh fettuccini",
    badge: "bestseller",
    image: "/assets/generated/hero-pasta.dim_1400x800.jpg",
  },
  {
    name: "Bestie is Back",
    description:
      "A beloved returning classic — ask your server for today's special",
  },
  {
    name: "Seafood Spaghetti",
    description: "Prawns, mussels & calamari in white wine tomato sauce",
    image: "/assets/generated/seafood-pasta.dim_600x500.jpg",
  },
  {
    name: "Mama Drama",
    description: "A robust, rich pasta with layers of flavour and love",
  },
  {
    name: "Aglio E Mare",
    description:
      "Garlic and sea — spaghetti with prawns, garlic, olive oil & chilli",
  },
  {
    name: "Spaghetti Bolognese",
    description: "House-made slow-cooked Bolognese ragu, fresh spaghetti",
  },
  {
    name: "Fettuccini Carbonarax",
    description: "Creamy carbonara with pancetta, egg, pecorino & black pepper",
    image: "/assets/generated/carbonara.dim_600x500.jpg",
  },
  {
    name: "Lasagna",
    description: "Layered handmade pasta with slow-cooked ragu and béchamel",
  },
];

const sides: MenuItem[] = [
  {
    name: "House Salad",
    description: "Fresh seasonal greens with house dressing",
  },
  { name: "Lemon Pickle", description: "House-made preserved lemon pickle" },
  {
    name: "Garlic Butter Bread",
    description: "Toasted ciabatta with house garlic butter",
  },
  { name: "Fries", description: "Crispy golden fries with aioli" },
];

const desserts: MenuItem[] = [
  {
    name: "Tiramisu",
    description: "Classic mascarpone tiramisu with espresso-soaked ladyfingers",
    image: "/assets/generated/tiramisu.dim_600x500.jpg",
  },
  {
    name: "Chocolate Cake",
    description: "Rich dark chocolate cake with cream",
  },
  {
    name: "Crème Brûlée",
    description: "Silky vanilla custard with caramelised sugar crust",
  },
];

const drinks: MenuItem[] = [
  { name: "Rosé", description: "Selection of NZ and international rosé wines" },
  {
    name: "Sparkling",
    description: "Prosecco and sparkling wine by glass or bottle",
  },
  {
    name: "White Wine",
    description: "Curated selection of whites — Sauvignon Blanc, Pinot Gris",
  },
  {
    name: "Dessert Wine",
    description: "Sweet wines to complement your dessert",
  },
  {
    name: "Red Wine",
    description: "Italian and NZ reds — Chianti, Pinot Noir and more",
  },
  {
    name: "Beer & Cider",
    description: "Local and imported beers, refreshing ciders",
  },
];

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="group flex gap-4 py-4 px-5 border-b border-ivory-300/60 last:border-0 menu-item-hover transition-colors duration-200 hover:bg-terracotta-500/[0.03]">
      {item.image && (
        <div className="flex-shrink-0 w-[72px] h-[72px] overflow-hidden shadow-warm">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex-1 min-w-0 py-0.5">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <h4 className="font-heading text-espresso-800 font-semibold text-[0.975rem] leading-snug">
            {item.name}
          </h4>
          {item.badge === "bestseller" && (
            <Badge className="bg-terracotta-500/90 text-ivory-50 text-[0.65rem] px-2 py-0.5 rounded-[2px] font-body font-semibold gap-1 leading-none h-auto">
              <Star size={9} className="fill-gold-300 text-gold-300" />
              Best Seller
            </Badge>
          )}
          {item.badge === "chef" && (
            <Badge className="bg-olive-600/90 text-ivory-50 text-[0.65rem] px-2 py-0.5 rounded-[2px] font-body font-semibold gap-1 leading-none h-auto">
              <ChefHat size={9} />
              Chef's Special
            </Badge>
          )}
        </div>
        {item.description && (
          <p className="font-body text-espresso-400 text-[0.82rem] leading-relaxed">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
}

function MenuList({ items }: { items: MenuItem[] }) {
  return (
    <div>
      {items.map((item) => (
        <MenuCard key={item.name} item={item} />
      ))}
    </div>
  );
}

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 md:py-28 bg-ivory-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-terracotta-300" />
            <span className="font-body text-terracotta-500 text-xs font-semibold tracking-[0.35em] uppercase">
              Fresh &amp; Handmade Daily
            </span>
            <div className="h-px w-8 bg-terracotta-300" />
          </div>
          <h2 className="font-heading text-espresso-800 text-4xl md:text-5xl font-bold leading-tight">
            Our <span className="italic text-terracotta-500">Menu</span>
          </h2>
          <p className="font-body text-espresso-400 text-base mt-3 max-w-md mx-auto leading-relaxed">
            Every pasta handmade to order. Ask your server about tonight's
            seasonal specials.
          </p>
        </div>

        {/* Tabs — underline style, not toolbar */}
        <Tabs defaultValue="pasta">
          {/* Underline tab list */}
          <div className="relative mb-0">
            <TabsList className="w-full flex h-auto gap-0 bg-transparent p-0 border-b-2 border-ivory-300 rounded-none overflow-x-auto justify-start">
              {[
                {
                  value: "starters",
                  label: "Starters",
                  ocid: "menu.starters.tab",
                },
                {
                  value: "pasta",
                  label: "Chef's Pasta",
                  ocid: "menu.pasta.tab",
                },
                {
                  value: "sides",
                  label: "Salads & Sides",
                  ocid: "menu.sides.tab",
                },
                {
                  value: "desserts",
                  label: "Desserts",
                  ocid: "menu.desserts.tab",
                },
                { value: "drinks", label: "Drinks", ocid: "menu.drinks.tab" },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  data-ocid={tab.ocid}
                  value={tab.value}
                  className={[
                    "font-body font-medium text-sm tracking-wide px-5 py-3 rounded-none",
                    "text-espresso-400 hover:text-espresso-700 transition-colors duration-200",
                    "border-b-2 border-transparent -mb-[2px]",
                    "data-[state=active]:border-terracotta-500 data-[state=active]:text-terracotta-600",
                    "data-[state=active]:font-semibold bg-transparent",
                    "whitespace-nowrap flex-shrink-0",
                  ].join(" ")}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Tab panels */}
          <div className="bg-ivory-50 shadow-warm border border-ivory-300 border-t-0">
            <TabsContent value="starters" className="p-0 m-0">
              <MenuList items={starters} />
            </TabsContent>

            <TabsContent value="pasta" className="p-0 m-0">
              {/* Chef's notice — high contrast amber banner */}
              <div className="flex items-center gap-2.5 px-5 py-3 bg-terracotta-500/10 border-b border-terracotta-200">
                <ChefHat
                  size={13}
                  className="text-terracotta-600 flex-shrink-0"
                />
                <span className="font-body text-terracotta-700 text-xs font-semibold tracking-wider uppercase">
                  Pasta made fresh daily — ask about seasonal specials
                </span>
              </div>
              <MenuList items={pasta} />
            </TabsContent>

            <TabsContent value="sides" className="p-0 m-0">
              <MenuList items={sides} />
            </TabsContent>

            <TabsContent value="desserts" className="p-0 m-0">
              <MenuList items={desserts} />
            </TabsContent>

            <TabsContent value="drinks" className="p-0 m-0">
              <MenuList items={drinks} />
            </TabsContent>
          </div>
        </Tabs>

        {/* View full menu CTA */}
        <div className="text-center mt-10">
          <a
            data-ocid="menu.facebook.button"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border border-terracotta-400 text-terracotta-600 hover:bg-terracotta-500 hover:text-ivory-50 hover:border-terracotta-500 font-body font-medium text-sm px-7 py-2.5 h-auto rounded-none tracking-wide transition-all duration-200 gap-2"
            >
              View Full Menu on Facebook
              <ExternalLink size={14} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
