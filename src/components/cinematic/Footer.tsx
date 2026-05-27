export const Footer = () => (
  <footer className="relative border-t border-border/40 bg-ink/80 py-16">
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-4 md:px-12">
      <div className="md:col-span-2">
        <p className="font-serif text-2xl tracking-[0.3em] text-cream">
          MAISON<span className="text-copper">.</span>NOIR
        </p>
        <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-cream/55">
          A nocturnal coffee ceremony.
          Twelve seats. After sundown only.
        </p>
      </div>
      <div>
        <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-copper/80">Address</p>
        <p className="text-sm font-light leading-relaxed text-cream/70">
          12 Rue de l'Ombre<br />75004 Paris
        </p>
      </div>
      <div>
        <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-copper/80">Hours</p>
        <p className="text-sm font-light leading-relaxed text-cream/70">
          Wed–Sun · 18:00 → 23:00
        </p>
      </div>
    </div>
    <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-border/30 px-6 pt-8 text-[10px] uppercase tracking-[0.3em] text-cream/40 md:flex-row md:px-12">
      <span>© {new Date().getFullYear()} Maison Noir</span>
      <span>Crafted in low light</span>
    </div>
  </footer>
);