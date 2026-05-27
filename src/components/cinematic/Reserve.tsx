import { Reveal } from "./Reveal";

export const Reserve = () => (
  <section id="reserve" className="relative overflow-hidden py-[22vh]">
    <div className="absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-warm blur-3xl" />
      <div className="absolute inset-0 bg-gradient-vignette" />
    </div>
    <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.4em] text-copper/90">Final Act · 12</p>
      </Reveal>
      <Reveal delay={0.15}>
        <h2 className="mt-6 font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.95] text-cream text-balance">
          Sit with us
          <br />
          <em className="text-copper">after dark.</em>
        </h2>
      </Reveal>
      <Reveal delay={0.4}>
        <p className="mx-auto mt-8 max-w-lg text-base font-light leading-relaxed text-cream/70">
          Twenty-four seats. Two seatings. One cake at a time.
          Reserve before the candles are lit.
        </p>
      </Reveal>
      <Reveal delay={0.6}>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <a
            href="#"
            className="group relative overflow-hidden rounded-full bg-gradient-bronze px-10 py-5 text-xs uppercase tracking-[0.35em] text-ink animate-pulse-glow transition-transform duration-500 hover:scale-105"
          >
            <span className="relative z-10">Reserve a seat</span>
          </a>
          <a
            href="mailto:hello@houseofcakes.cafe"
            className="group flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-cream/80 hover:text-copper"
          >
            <span className="h-px w-10 bg-copper transition-all duration-500 group-hover:w-16" />
            Private events
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);