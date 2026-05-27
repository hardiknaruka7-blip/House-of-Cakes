import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Reveal } from "./Reveal";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";

const items = [
  { img: p1, name: "Noir Espresso", note: "Single origin · Ethiopia", price: "06" },
  { img: p2, name: "Velvet Latte", note: "Triple-layered · house oat", price: "08" },
  { img: p3, name: "Caramel Glacé", note: "Aged caramel · cold drip", price: "09" },
];

function Card({ img, name, note, price, i }: typeof items[number] & { i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    setTilt({
      x: ((e.clientY - r.top) / r.height - 0.5) * -10,
      y: ((e.clientX - r.left) / r.width - 0.5) * 12,
    });
  };
  return (
    <Reveal delay={i * 0.15}>
      <motion.div
        ref={ref}
        data-cursor-hover
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        whileHover={{ y: -8 }}
        style={{ transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        className="group relative overflow-hidden rounded-md border border-border/40 bg-card/40 backdrop-blur-sm transition-shadow duration-500 hover:shadow-product"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={img}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
          <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            style={{ background: "radial-gradient(circle at 50% 30%, hsl(var(--copper-glow) / 0.35), transparent 60%)" }}
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-copper/80">{note}</p>
            <h3 className="mt-2 font-serif text-3xl text-cream">{name}</h3>
          </div>
          <span className="font-serif text-2xl text-copper">€{price}</span>
        </div>
      </motion.div>
    </Reveal>
  );
}

export const Menu = () => (
  <section id="menu" className="relative py-[18vh]">
    <div className="mx-auto max-w-7xl px-6 md:px-12">
      <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-copper/80">Chapter Two</p>
          <h2 className="mt-6 font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[1] text-cream">
            The <em className="text-copper">signature</em> three
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="max-w-sm text-sm font-light leading-relaxed text-cream/60">
            A tasting trio. Each drink composed like a piece of music —
            with intent, restraint, and one perfect crescendo.
          </p>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((it, i) => <Card key={it.name} {...it} i={i} />)}
      </div>
    </div>
  </section>
);