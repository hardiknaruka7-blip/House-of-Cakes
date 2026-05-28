import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";

type Item = {
  name: string;
  desc?: string;
  hero?: boolean;
};

type Scene = {
  k: string;
  chapter: string;
  name: string;
  emphasis: string; // word(s) inside name to color copper
  tag: string;
  note: string;
  copy: string;
  overlay?: string; // huge cinematic overlay word
  align: "left" | "right";
  tone: string;
  items: Item[];
};

const scenes: Scene[] = [
  {
    k: "02",
    chapter: "Chapter Two",
    name: "Gourmet Sandwiches & Grills",
    emphasis: "Grills",
    tag: "Pressed · Artisan · Golden",
    note: "Toasted Comfort",
    copy: "Cast iron pressed until the crust whispers. Focaccia kissed with rosemary smoke, paneer charred over an open flame, thousand island folded in slow.",
    overlay: "Golden",
    align: "left",
    tone: "from-[hsl(28_60%_20%_/_0.35)]",
    items: [
      { name: "Veg Paneer Tandoori Grill", desc: "Capsicum, lettuce, iceberg, thousand island", hero: true },
      { name: "Focaccia Sandwich", desc: "Jalapeño, olives, basil, rosemary, thyme", hero: true },
      { name: "Club Sandwich" },
      { name: "Coleslaw Sandwich" },
      { name: "Paneer Sandwich" },
      { name: "Corn & Cheese Grill", desc: "Corn, onion, tomato, capsicum, mozzarella" },
      { name: "Classic Masala Grill", desc: "Potato, Indian spice" },
      { name: "French Sandwich", desc: "Kidney beans, lettuce sautéed in olive oil" },
      { name: "Hoc's Garlic Bread", desc: "Crisp, seasoned" },
    ],
  },
  {
    k: "03",
    chapter: "Chapter Three",
    name: "Burger Mania",
    emphasis: "Mania",
    tag: "Stacked · Bold · Indulgent",
    note: "Artisan Layers",
    copy: "Dramatic side light, floating layers, a brioche lacquered in its own glow. Built tall, eaten with two hands, photographed in shadow.",
    overlay: "Stacked",
    align: "right",
    tone: "from-[hsl(18_55%_18%_/_0.4)]",
    items: [
      { name: "Barbeque Paneer Burger", desc: "BBQ patty, iceberg, coleslaw", hero: true },
      { name: "Mexican Burger", desc: "Kidney bean patty, bell pepper, mushroom" },
      { name: "Hoc Veggie Burger", desc: "Beans, carrot, peas, potato, thousand island" },
      { name: "Veg Cheese Burger" },
    ],
  },
  {
    k: "04",
    chapter: "Centerpiece",
    name: "Signature Handcrafted Pizzas",
    emphasis: "Handcrafted",
    tag: "Fire-Baked · Slow Crafted · Signature",
    note: "Crafted in Fire",
    copy: "The room turns toward the oven. Molten cheese, herb particles in the air, leopard-spotted crust pulled at the exact second. The night's loudest silence.",
    overlay: "Fire",
    align: "left",
    tone: "from-[hsl(22_70%_25%_/_0.5)]",
    items: [
      { name: "Hoc Exotic Pizza", desc: "Signature house specialty", hero: true },
      { name: "Trio Pizza", desc: "Pesto, BBQ, peri peri — three sauces, one crust", hero: true },
      { name: "Pesto Cottage Cheese Pizza", desc: "Basil, olive oil, cottage cheese, olives", hero: true },
      { name: "Achari Paneer Tikka Pizza", desc: "Bell peppers, rosemary, oregano, basil", hero: true },
      { name: "Margherita Cheese Pizza", desc: "Layered cheese blend" },
      { name: "Peri Peri Paneer Pizza", desc: "Homemade peri peri, fresh vegetables" },
      { name: "Deluxe Veggie Pizza", desc: "Onion, capsicum, mushroom, paneer, corn, red paprika" },
      { name: "Otc Pizza", desc: "Onion, tomato, capsicum" },
    ],
  },
  {
    k: "05",
    chapter: "Chapter Five",
    name: "Artisan Pasta",
    emphasis: "Pasta",
    tag: "Creamy · Italian Soul · Slow Simmered",
    note: "Slow Simmered",
    copy: "Cream folded in low light. Basil torn by hand. The sauce reduced until it remembers itself.",
    overlay: "Slow",
    align: "right",
    tone: "from-[hsl(36_45%_25%_/_0.35)]",
    items: [
      { name: "Rose Sauce Pasta", desc: "Blend of red and white", hero: true },
      { name: "Pesto Sauce Pasta", desc: "Broccoli, bell peppers, sweet corn, basil", hero: true },
      { name: "Angry Arrabiata Pasta", desc: "Broccoli, zucchini, mushroom, baby corn, red sauce" },
      { name: "White Sauce Pasta" },
    ],
  },
  {
    k: "06",
    chapter: "Chapter Six",
    name: "Flavors of the East",
    emphasis: "East",
    tag: "Wok Fire · Street Heat · Fusion",
    note: "Modern Asian",
    copy: "A darker chapter. Wok flame leaping up the side, schezwan caught mid-toss, chilli oil glistening at the rim.",
    overlay: "Heat",
    align: "left",
    tone: "from-[hsl(0_55%_20%_/_0.4)]",
    items: [
      { name: "Chilli Paneer", desc: "Wok-tossed, chilli oil, spring onion", hero: true },
      { name: "Paneer Jal Jala", desc: "Smoky, layered, bright", hero: true },
      { name: "American Chopsy", desc: "Crisp noodle bed, saucy vegetables", hero: true },
      { name: "Singapuri Paneer Noodles" },
      { name: "Manchurian" },
      { name: "Hakka Noodles" },
      { name: "Veg Chowmein" },
      { name: "Honey Chilli Potato" },
    ],
  },
  {
    k: "07a",
    chapter: "Interlude",
    name: "Indulgent Rolls & Wraps",
    emphasis: "Wraps",
    tag: "Handcrafted · Social · Layered",
    note: "Quiet Comfort",
    copy: "Folded slow, wrapped tight. The food you reach for between scenes.",
    align: "right",
    tone: "from-[hsl(28_40%_18%_/_0.3)]",
    items: [
      { name: "Paneer Kathi Roll" },
      { name: "Punjabi Chana Masala Roll" },
      { name: "Paneer Spinach Roll" },
      { name: "Vegetable Cheese Roll" },
    ],
  },
  {
    k: "07b",
    chapter: "Interlude",
    name: "The Snack Bar",
    emphasis: "Snack",
    tag: "Loaded · Crispy · Shared",
    note: "For The Table",
    copy: "Cheese pulled in long strands. Low light, loud company.",
    align: "left",
    tone: "from-[hsl(28_40%_18%_/_0.3)]",
    items: [
      { name: "Peri Peri Nachos" },
      { name: "Cheese Nachos" },
    ],
  },
  {
    k: "07c",
    chapter: "Interlude",
    name: "Wok-Tossed Rice",
    emphasis: "Rice",
    tag: "Aromatic · Smoky · Fusion",
    note: "Bowls",
    copy: "Steam rising in cinematic columns. Grains separate, glossy, alive.",
    align: "right",
    tone: "from-[hsl(28_40%_18%_/_0.3)]",
    items: [
      { name: "Veg Fried Rice" },
      { name: "Schezwan Fried Rice" },
      { name: "Paneer Fried Rice" },
    ],
  },
  {
    k: "07d",
    chapter: "Interlude",
    name: "Curated Combo Treats",
    emphasis: "Combo",
    tag: "Paired · Considered · Complete",
    note: "Designed Together",
    copy: "Two plates, one rhythm. Pairings designed for satisfaction.",
    align: "left",
    tone: "from-[hsl(28_40%_18%_/_0.3)]",
    items: [
      { name: "Fried Rice + Manchurian" },
      { name: "Noodles + Chilli Paneer" },
    ],
  },
  {
    k: "08",
    chapter: "Final Course",
    name: "Rich & Tempting Desserts",
    emphasis: "Desserts",
    tag: "Warm Decadence · Chocolate Theatre",
    note: "Melt Into Luxury",
    copy: "The lights drop a half-stop. Molten chocolate breaks open, vanilla ice melts into the dark. The room exhales.",
    overlay: "Melt",
    align: "right",
    tone: "from-[hsl(22_75%_22%_/_0.55)]",
    items: [
      { name: "Chocolate Bomb", desc: "Chocolate shell, brownie, fudge, ice cream", hero: true },
      { name: "Sizzling Brownie", desc: "Vanilla ice cream, chocolate fudge", hero: true },
    ],
  },
];

function MenuItem({ item, idx }: { item: Item; idx: number }) {
  return (
    <Reveal delay={0.05 + idx * 0.04} y={20}>
      <div className="group relative cursor-default border-b border-cream/8 py-5">
        <div className="flex items-baseline justify-between gap-6">
          <h4
            className={`font-serif leading-tight text-cream transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 group-hover:text-copper-glow ${
              item.hero ? "text-2xl md:text-[2rem]" : "text-lg md:text-xl text-cream/85"
            }`}
          >
            {item.name}
          </h4>
          {item.hero && (
            <span className="shrink-0 text-[9px] uppercase tracking-[0.4em] text-copper/70">Signature</span>
          )}
        </div>
        {item.desc && (
          <p className="mt-2 max-w-xl text-[11px] uppercase tracking-[0.22em] text-cream/40 transition-colors duration-700 group-hover:text-cream/65">
            {item.desc}
          </p>
        )}
        {/* slow reveal underline */}
        <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-copper/60 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
      </div>
    </Reveal>
  );
}

function SceneBlock({ s }: { s: Scene }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const overlayY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 0.05, 0.05, 0]);

  const right = s.align === "right";
  const heroes = s.items.filter((i) => i.hero);
  const rest = s.items.filter((i) => !i.hero);

  return (
    <div ref={ref} className="relative py-[10vh] md:py-[14vh]">
      {/* tone wash */}
      <div
        className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b ${s.tone} via-transparent to-transparent`}
      />
      {/* giant editorial overlay word */}
      {s.overlay && (
        <motion.div
          style={{ y: overlayY, opacity: overlayOpacity }}
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 top-[25%] z-0 select-none font-serif text-[clamp(8rem,20vw,20rem)] leading-none text-copper/30 ${
            right ? "text-left pl-[2vw]" : "text-right pr-[2vw]"
          }`}
        >
          {s.overlay}
        </motion.div>
      )}

      <div
        className={`relative z-10 mx-auto grid max-w-7xl grid-cols-12 gap-x-8 gap-y-10 px-6 md:px-12 ${
          right ? "md:text-right" : ""
        }`}
      >
        {/* HEADER COLUMN */}
        <div className={`col-span-12 md:col-span-7 ${right ? "md:col-start-6" : ""}`}>
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.45em] text-copper/80">
              {s.chapter} · {s.k}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <h3 className="mt-6 font-serif text-[clamp(2.2rem,5.5vw,4.75rem)] leading-[0.95] text-cream text-balance">
              {s.name.split(" ").map((w, i) => {
                const isEm = s.emphasis.toLowerCase().includes(w.toLowerCase().replace(/[^a-z]/g, ""));
                return isEm ? (
                  <em key={i} className="font-serif italic text-copper">
                    {w}{" "}
                  </em>
                ) : (
                  <span key={i}>{w} </span>
                );
              })}
            </h3>
          </Reveal>
          <Reveal delay={0.25}>
            <p
              className={`mt-6 max-w-md text-[15px] font-light leading-relaxed text-cream/65 ${
                right ? "md:ml-auto" : ""
              }`}
            >
              {s.copy}
            </p>
          </Reveal>
          <div
            className={`mt-8 flex flex-wrap items-center gap-6 text-[10px] uppercase tracking-[0.4em] text-cream/45 ${
              right ? "md:justify-end" : ""
            }`}
          >
            <span className="text-copper/80">{s.tag}</span>
            <span className="h-px w-12 bg-copper/40" />
            <span>{s.note}</span>
          </div>
        </div>

        {/* reserve focal column for persistent dish */}
        <div
          className={`hidden md:block md:col-span-5 ${right ? "md:col-start-1 md:row-start-1" : ""}`}
          aria-hidden
        />

        {/* ITEM COLUMN — asymmetric */}
        <div
          className={`col-span-12 ${
            right ? "md:col-span-7 md:col-start-1" : "md:col-span-7 md:col-start-6"
          } md:mt-6`}
        >
          {heroes.length > 0 && (
            <div className="mb-6 text-left">
              <Reveal>
                <p className="mb-3 text-[10px] uppercase tracking-[0.45em] text-copper/60">
                  Visual Focus · Signature
                </p>
              </Reveal>
              {heroes.map((it, i) => (
                <MenuItem key={it.name} item={it} idx={i} />
              ))}
            </div>
          )}
          {rest.length > 0 && (
            <div className="mt-8 text-left">
              <Reveal>
                <p className="mb-3 text-[10px] uppercase tracking-[0.45em] text-cream/35">
                  The Full Chapter
                </p>
              </Reveal>
              {rest.map((it, i) => (
                <MenuItem key={it.name} item={it} idx={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const Menu = () => (
  <section id="menu" className="relative py-[10vh]">
    <div className="mx-auto max-w-7xl px-6 md:px-12">
      <div className="mb-[14vh] max-w-3xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-copper/80">The Curated Menu</p>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="mt-6 font-serif text-[clamp(2.8rem,7.5vw,6.5rem)] leading-[0.92] text-cream">
            Ten chapters, <em className="italic text-copper">one long evening.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.35}>
          <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-cream/60">
            Read it like a film. Each course is a scene — paced slow, lit warm, photographed close. The signatures are the close-ups.
          </p>
        </Reveal>
      </div>
    </div>
    <div className="relative">
      {scenes.map((s) => (
        <SceneBlock key={s.k} s={s} />
      ))}
    </div>
  </section>
);