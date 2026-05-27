import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";

type Scene = {
  k: string;
  chapter: string;
  name: string;
  tag: string;
  note: string;
  copy: string;
  align: "left" | "right";
  tone: string; // background tint
};

const scenes: Scene[] = [
  {
    k: "02",
    chapter: "Chapter Two",
    name: "Sandwiches & Grills",
    tag: "Toasted · Golden · Smoky",
    note: "08 — 14 €",
    copy: "Sourdough pressed on cast iron until the crust whispers. Aged comté, smoked brisket, slow-confit tomato.",
    align: "left",
    tone: "from-[hsl(28_60%_20%_/_0.35)]",
  },
  {
    k: "03",
    chapter: "Chapter Three",
    name: "The Burgers",
    tag: "Stacked · Moody · Heavy",
    note: "16 — 22 €",
    copy: "Dry-aged patties, charred bone marrow butter, a brioche bun lacquered in beef fat. Eaten with two hands.",
    align: "right",
    tone: "from-[hsl(18_55%_18%_/_0.4)]",
  },
  {
    k: "04",
    chapter: "Centerpiece",
    name: "The Pizzas",
    tag: "Wood Fire · 480°C · 90 sec",
    note: "18 — 26 €",
    copy: "The room turns toward the oven. Leopard-spotted crust, San Marzano, fior di latte torn by hand. The night's loudest silence.",
    align: "left",
    tone: "from-[hsl(22_70%_25%_/_0.45)]",
  },
  {
    k: "05",
    chapter: "Chapter Five",
    name: "The Pastas",
    tag: "Creamy · Slow · Elegant",
    note: "19 — 28 €",
    copy: "Tonnarelli rolled at dusk, finished tableside in a wheel of pecorino. Black truffle, brown butter, restraint.",
    align: "right",
    tone: "from-[hsl(36_45%_25%_/_0.35)]",
  },
  {
    k: "06",
    chapter: "Chapter Six",
    name: "East Asian Flavors",
    tag: "Punchy · Bright · Dark Rhythm",
    note: "14 — 22 €",
    copy: "Tonkotsu pulled for 18 hours. Chili crisp made on the line. Bao steamed three minutes before you sit down.",
    align: "left",
    tone: "from-[hsl(0_55%_20%_/_0.4)]",
  },
  {
    k: "07",
    chapter: "Supporting Chapters",
    name: "Rolls · Wraps · Rice · Combos",
    tag: "Hand-held · Late Night · Quiet",
    note: "from 09 €",
    copy: "Cold drinks, hot snacks, the small things you reach for between scenes — wraps, bowls, rice plates, sharing combos.",
    align: "right",
    tone: "from-[hsl(28_40%_18%_/_0.3)]",
  },
  {
    k: "08",
    chapter: "Final Course",
    name: "Desserts",
    tag: "Warm Chocolate · Dark Luxury",
    note: "09 — 16 €",
    copy: "The lights drop a half-stop. Molten chocolate, gold leaf, raspberry coulis. The room exhales.",
    align: "left",
    tone: "from-[hsl(22_75%_22%_/_0.5)]",
  },
];

function SceneBlock({ s, i }: { s: Scene; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const metaY = useTransform(scrollYProgress, [0, 1], [120, -120]);

  return (
    <div
      ref={ref}
      className={`relative grid min-h-[95vh] grid-cols-12 items-center gap-6 px-6 md:px-12 ${
        s.align === "right" ? "md:text-right" : ""
      }`}
    >
      {/* tone wash */}
      <div
        className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b ${s.tone} via-transparent to-transparent`}
      />
      <motion.div
        style={{ y: titleY }}
        className={`col-span-12 md:col-span-7 ${s.align === "right" ? "md:col-start-6" : ""}`}
      >
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.45em] text-copper/80">
            {s.chapter} · {s.k}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <h3 className="mt-8 font-serif text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.95] text-cream text-balance">
            {s.name.split(" ").map((w, idx) =>
              idx === 1 ? <em key={idx} className="text-copper">{w} </em> : <span key={idx}>{w} </span>
            )}
          </h3>
        </Reveal>
        <Reveal delay={0.4}>
          <p
            className={`mt-8 max-w-md text-base font-light leading-relaxed text-cream/65 ${
              s.align === "right" ? "md:ml-auto" : ""
            }`}
          >
            {s.copy}
          </p>
        </Reveal>
        <motion.div
          style={{ y: metaY }}
          className={`mt-10 flex items-center gap-6 text-[10px] uppercase tracking-[0.4em] text-cream/45 ${
            s.align === "right" ? "md:justify-end" : ""
          }`}
        >
          <span className="text-copper/80">{s.tag}</span>
          <span className="h-px w-12 bg-copper/40" />
          <span>{s.note}</span>
        </motion.div>
      </motion.div>
      {/* focal column reserved for persistent dish */}
      <div
        className={`hidden md:block md:col-span-5 ${s.align === "right" ? "md:col-start-1 md:row-start-1" : ""}`}
        aria-hidden
      />
    </div>
  );
}

export const Menu = () => (
  <section id="menu" className="relative py-[10vh]">
    <div className="mx-auto max-w-7xl px-6 md:px-12">
      <div className="mb-[12vh] max-w-2xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-copper/80">The Menu</p>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="mt-6 font-serif text-[clamp(2.8rem,7vw,6rem)] leading-[0.95] text-cream">
            Seven chapters, <em className="text-copper">one room.</em>
          </h2>
        </Reveal>
      </div>
    </div>
    <div className="relative mx-auto max-w-7xl">
      {scenes.map((s, i) => (
        <SceneBlock key={s.k} s={s} i={i} />
      ))}
    </div>
  </section>
);