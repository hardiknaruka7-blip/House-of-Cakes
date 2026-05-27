import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import amb1 from "@/assets/ambience-1.jpg";
import amb2 from "@/assets/ambience-2.jpg";

export const Ambience = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref} id="ambience" className="relative overflow-hidden py-[18vh]">
      <div className="relative h-[110vh] w-full">
        <motion.img
          src={amb1}
          alt="Café interior at golden hour"
          loading="lazy"
          style={{ scale, y }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/30 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,hsl(28_70%_30%_/_0.4),transparent_60%)]" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.4em] text-copper/90">Chapter Three</p>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="mt-6 max-w-2xl font-serif text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.95] text-cream text-balance">
                A room <em className="text-copper">lit only</em> by what's warm.
              </h2>
            </Reveal>
            <Reveal delay={0.5}>
              <p className="mt-8 max-w-md text-base font-light leading-relaxed text-cream/70">
                Tungsten, copper, candlelight. We dim the world until
                only the cup remains.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-[-15vh] grid max-w-7xl grid-cols-12 gap-6 px-6 md:px-12">
        <Reveal className="col-span-12 md:col-span-7 md:col-start-6">
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm shadow-cinematic">
            <img src={amb2} alt="Café sunset" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};