import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import storyCake from "@/assets/story-cake.jpg";
import storyBeans from "@/assets/story-beans.jpg";

export const Story = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.15]);

  return (
    <section ref={ref} id="story" className="relative py-[20vh]">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-6 md:px-12">
        <div className="col-span-12 md:col-span-5">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-copper/80">Chapter One</p>
            <h2 className="mt-6 font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[1] text-cream">
              A kitchen <em className="text-copper">that whispers.</em>
            </h2>
            <p className="mt-8 max-w-md text-base font-light leading-relaxed text-cream/70">
              House of Cakes began as a single oven and a stubborn idea —
              that fast food could be plated like a film still. We bake,
              braise, and pipe by hand. Nothing leaves the pass without
              a story behind it.
            </p>
            <p className="mt-10 text-[10px] uppercase tracking-[0.3em] text-cream/45">
              — Twelve dishes. One menu. Re-written each season.
            </p>
          </Reveal>
        </div>

        <motion.div style={{ y: y1 }} className="col-span-7 md:col-span-4 md:col-start-7">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-cinematic">
            <motion.img
              src={storyCake}
              alt="Pastry chef piping chocolate onto a cake"
              loading="lazy"
              style={{ scale }}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
          </div>
        </motion.div>

        <motion.div style={{ y: y2 }} className="col-span-5 md:col-span-3 md:col-start-10 md:mt-32">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-cinematic">
            <motion.img
              src={storyBeans}
              alt="Macro detail of texture and crumb"
              loading="lazy"
              style={{ scale }}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </div>
          <Reveal delay={0.3}>
            <p className="mt-8 text-xs uppercase tracking-[0.3em] text-cream/60">
              — Hand finished. 220°C. Six grams of salt.
            </p>
          </Reveal>
        </motion.div>
      </div>
    </section>
  );
};