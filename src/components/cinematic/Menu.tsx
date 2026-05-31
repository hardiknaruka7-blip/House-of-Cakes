import { useMemo, useState } from "react";
import { Reveal } from "./Reveal";
import { menuCategories, type MenuCategory, type MenuItem } from "@/data/menu";

function CategoryBlock({ cat }: { cat: MenuCategory }) {
  const [activeId, setActiveId] = useState(cat.items[0].id);
  const active = useMemo(
    () => cat.items.find((i) => i.id === activeId) ?? cat.items[0],
    [activeId, cat.items],
  );
  const right = cat.align === "right";

  return (
    <div className="relative py-[10vh] md:py-[14vh]">
      <div
        className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b ${cat.tone} via-transparent to-transparent`}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* category header */}
        <div className={`mb-12 max-w-3xl ${right ? "md:ml-auto md:text-right" : ""}`}>
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.45em] text-copper/80">
              {cat.chapter} · {cat.k}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="mt-5 font-serif text-[clamp(2rem,5vw,4.25rem)] leading-[0.95] text-cream text-balance">
              {cat.name.split(" ").map((w, i) => {
                const norm = w.toLowerCase().replace(/[^a-z]/g, "");
                const isEm = cat.emphasis.toLowerCase().includes(norm) && norm.length > 0;
                return isEm ? (
                  <em key={i} className="font-serif italic text-copper">{w} </em>
                ) : (
                  <span key={i}>{w} </span>
                );
              })}
            </h3>
          </Reveal>
          <Reveal delay={0.2}>
            <p className={`mt-5 max-w-md text-[14px] font-light leading-relaxed text-cream/60 ${right ? "md:ml-auto" : ""}`}>
              {cat.copy}
            </p>
          </Reveal>
          <div className={`mt-6 flex flex-wrap items-center gap-5 text-[10px] uppercase tracking-[0.4em] text-cream/45 ${right ? "md:justify-end" : ""}`}>
            <span className="text-copper/80">{cat.tag}</span>
            <span className="h-px w-10 bg-copper/40" />
            <span>{cat.note}</span>
          </div>
        </div>

        {/* split: selector | hero preview */}
        <div className={`grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12 ${right ? "md:[direction:rtl]" : ""}`}>
          {/* selector panel */}
          <div className={`md:col-span-5 [direction:ltr]`}>
            <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-copper/60">Select a dish</p>
            <ul className="border-t border-cream/10">
              {cat.items.map((it) => {
                const isActive = it.id === active.id;
                return (
                  <li key={it.id} className="border-b border-cream/10">
                    <button
                      type="button"
                      onClick={() => setActiveId(it.id)}
                      onMouseEnter={() => setActiveId(it.id)}
                      aria-pressed={isActive}
                      className="group flex w-full items-baseline justify-between gap-4 py-4 text-left transition-all duration-500"
                    >
                      <span
                        className={`font-serif leading-tight transition-all duration-500 ${
                          isActive
                            ? "translate-x-2 text-copper-glow text-xl md:text-2xl"
                            : "text-cream/55 group-hover:text-cream/85 text-lg md:text-xl"
                        }`}
                      >
                        {it.name}
                      </span>
                      <span
                        className={`shrink-0 font-serif text-sm transition-colors duration-500 ${
                          isActive ? "text-copper" : "text-cream/35"
                        }`}
                      >
                        {it.price}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* hero preview */}
          <div className="md:col-span-7 [direction:ltr]">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-cream/10 bg-ink/40 p-6 md:p-10">
              {/* atmospheric glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-gradient-warm opacity-40 blur-3xl"
              />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink/60">
                {cat.items.map((it) => {
                  const isActive = it.id === active.id;
                  return (
                    <img
                      key={it.id}
                      src={it.image}
                      alt={it.name}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? "scale(1)" : "scale(1.04)",
                        filter: isActive ? "blur(0px) brightness(1)" : "blur(6px) brightness(0.8)",
                      }}
                    />
                  );
                })}
                {/* vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              </div>

              {/* meta */}
              <div key={active.id} className="mt-6 animate-fade-in">
                <div className="flex items-baseline justify-between gap-6">
                  <h4 className="font-serif text-2xl text-cream md:text-3xl">{active.name}</h4>
                  <span className="font-serif text-xl text-copper">{active.price}</span>
                </div>
                <p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-cream/70">
                  {active.description}
                </p>
                {active.ingredients && (
                  <p className="mt-4 text-[10px] uppercase tracking-[0.35em] text-cream/40">
                    {active.ingredients}
                  </p>
                )}
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href="#reserve"
                    className="rounded-full bg-gradient-bronze px-6 py-3 text-[10px] uppercase tracking-[0.3em] text-ink shadow-glow transition-transform duration-500 hover:scale-[1.03]"
                  >
                    Reserve to taste
                  </a>
                  {active.hero && (
                    <span className="text-[10px] uppercase tracking-[0.4em] text-copper/70">
                      Signature
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Menu = () => (
  <section id="menu" className="relative py-[10vh]">
    <div className="mx-auto max-w-7xl px-6 md:px-12">
      <div className="mb-[10vh] max-w-3xl">
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
            Tap any dish — the stage transforms into its exact cinematic portrait. Forty-six plates, forty-six close-ups.
          </p>
        </Reveal>
      </div>
    </div>
    <div className="relative">
      {menuCategories.map((cat) => (
        <CategoryBlock key={cat.k} cat={cat} />
      ))}
    </div>
  </section>
);