import { Reveal } from "./Reveal";

export const Hero = () => {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* layered background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(28_60%_18%_/_0.55),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-vignette" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-32 md:grid-cols-12 md:px-12">
        <div className="md:col-span-7">
          <Reveal delay={0.1}>
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-copper/90">
              — House of Cakes · Est. 2014
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <h1 className="font-serif text-[clamp(3.2rem,9vw,8.5rem)] leading-[0.95] text-cream text-balance">
              Plated in
              <br />
              <span className="italic text-copper">low light.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.55}>
            <p className="mt-8 max-w-md text-base font-light leading-relaxed text-cream/70">
              A slow ceremony of butter, smoke, and chocolate.
              Sandwiches, pizzas, pastas, ramen — and a cake finale,
              served only by hand.
            </p>
          </Reveal>
          <Reveal delay={0.8}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#reserve"
                className="group relative overflow-hidden rounded-full bg-gradient-bronze px-8 py-4 text-xs uppercase tracking-[0.3em] text-ink shadow-glow transition-all duration-500 hover:scale-[1.03]"
              >
                <span className="relative z-10">Reserve a table</span>
              </a>
              <a
                href="#menu"
                className="group flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-cream/80 transition-colors hover:text-copper"
              >
                <span className="h-px w-10 bg-copper transition-all duration-500 group-hover:w-16" />
                See the menu
              </a>
            </div>
          </Reveal>
          <Reveal delay={1.0}>
            <div className="mt-16 grid max-w-md grid-cols-3 gap-6 text-[10px] uppercase tracking-[0.3em] text-cream/45">
              <div><span className="block text-copper/80">01 ·</span> Slow fire</div>
              <div><span className="block text-copper/80">02 ·</span> Hand plated</div>
              <div><span className="block text-copper/80">03 ·</span> After dusk</div>
            </div>
          </Reveal>
        </div>

        {/* right column spacer — the persistent product floats here */}
        <div className="md:col-span-5 md:h-[60vh]" aria-hidden />
      </div>

      {/* scroll cue */}
      <Reveal delay={1.2} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-cream/50">
          Scroll
          <span className="h-10 w-px animate-pulse bg-gradient-to-b from-copper to-transparent" />
        </div>
      </Reveal>
    </section>
  );
};