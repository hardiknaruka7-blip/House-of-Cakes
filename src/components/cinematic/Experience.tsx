import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const beats = [
  { k: "01", t: "Sourced",  d: "Heritage grain, farm dairy, single-origin chocolate." },
  { k: "02", t: "Slow Fire", d: "Wood-burning oven held at 480°C, day and night." },
  { k: "03", t: "Hand Plated", d: "Every dish composed by one pair of hands, never two." },
  { k: "04", t: "Carried in Silence", d: "Walked to the table under amber light. Set down without a word." },
];

export const Experience = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={ref} id="experience" className="relative py-[20vh]">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-24 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-copper/80">Interactive Highlight · 10</p>
          <h2 className="mt-6 font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[1] text-cream">
            Four <em className="text-copper">acts.</em>
            <br /> One ritual.
          </h2>
        </div>

        <div className="relative grid grid-cols-12 gap-6">
          <div className="relative col-span-1 md:col-span-2">
            <div className="sticky top-1/2 ml-2 h-[40vh] w-px bg-border/60 md:ml-6">
              <motion.div style={{ height: lineH }} className="w-px bg-gradient-to-b from-copper-glow to-copper" />
            </div>
          </div>
          <div className="col-span-11 space-y-[18vh] md:col-span-10">
            {beats.map((b, i) => (
              <motion.div
                key={b.k}
                initial={{ opacity: 0.2, x: 60, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ margin: "-30% 0px -30% 0px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-6 md:flex-row md:items-baseline md:gap-12"
              >
                <span className="font-serif text-5xl text-copper/70 md:text-6xl">{b.k}</span>
                <div className="max-w-xl">
                  <h3 className="font-serif text-3xl text-cream md:text-5xl">{b.t}</h3>
                  <p className="mt-4 text-base font-light leading-relaxed text-cream/65">{b.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};