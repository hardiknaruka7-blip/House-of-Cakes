import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { menuCategories } from "@/data/menu";

const MenuPage = () => {
  const [active, setActive] = useState(menuCategories[0].k);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    menuCategories.forEach((c) => {
      const el = document.getElementById(`cat-${c.k}`);
      if (!el) return;
      const io = new IntersectionObserver(
        ([e]) => e.isIntersecting && setActive(c.k),
        { rootMargin: "-40% 0px -55% 0px" },
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
    <Helmet>
      <title>Menu — House of Cakes</title>
      <meta name="description" content="Forty-six signature dishes: sandwiches, burgers, pizzas, pasta, East Asian plates and a chocolate finale, at House of Cakes in Paris." />
      <link rel="canonical" href="https://houseofcakes.lovable.app/menu" />
      <meta property="og:title" content="Menu — House of Cakes" />
      <meta property="og:description" content="Forty-six signature dishes, plated slow and served warm." />
      <meta property="og:url" content="https://houseofcakes.lovable.app/menu" />
    </Helmet>
    <main className="min-h-screen bg-background text-cream">
      {/* top bar */}
      <header className="sticky top-0 z-40 border-b border-cream/10 bg-ink/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
          <Link to="/" className="font-serif text-xl tracking-[0.35em] text-cream">
            HOUSE<span className="text-copper"> · </span>OF<span className="text-copper"> · </span>CAKES
          </Link>
          <Link
            to="/"
            className="text-[10px] uppercase tracking-[0.35em] text-cream/70 transition-colors hover:text-copper"
          >
            ← Back to Home
          </Link>
        </nav>
      </header>

      {/* hero */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-24 text-center md:pt-32">
        <p className="text-[10px] uppercase tracking-[0.5em] text-copper/80">The Menu</p>
        <h1 className="mt-6 font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-cream">
          Our <em className="italic text-copper">Menu</em>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-cream/60 md:text-base">
          A curated selection of forty-six signature dishes — crafted slow, plated with intention, served warm.
        </p>
        <div className="mx-auto mt-10 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-copper/40" />
          <span className="h-1.5 w-1.5 rotate-45 bg-copper" />
          <span className="h-px w-16 bg-copper/40" />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-32 md:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[220px_1fr] lg:gap-20">
          {/* sidebar */}
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-copper/70">Chapters</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 lg:flex-col lg:gap-2">
              {menuCategories.map((c) => (
                <li key={c.k}>
                  <a
                    href={`#cat-${c.k}`}
                    className={`block text-xs uppercase tracking-[0.2em] transition-colors ${
                      active === c.k ? "text-copper" : "text-cream/50 hover:text-cream"
                    }`}
                  >
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* categories */}
          <div className="space-y-24">
            {menuCategories.map((c) => (
              <section
                key={c.k}
                id={`cat-${c.k}`}
                className="scroll-mt-28 animate-fade-in"
              >
                <div className="mb-8 border-b border-cream/10 pb-6">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-copper/70">
                    {c.chapter}
                  </p>
                  <h2 className="mt-3 font-serif text-3xl leading-tight text-cream md:text-4xl">
                    {c.name}
                  </h2>
                  <p className="mt-3 max-w-xl text-[11px] uppercase tracking-[0.3em] text-cream/40">
                    {c.tag}
                  </p>
                </div>

                <ul className="grid grid-cols-1 gap-x-12 gap-y-1 md:grid-cols-2">
                  {c.items.map((it) => (
                    <li
                      key={it.id}
                      className="group border-b border-cream/5 py-5 transition-colors hover:border-copper/30"
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-serif text-lg text-cream/85 transition-colors group-hover:text-copper-glow md:text-xl">
                          {it.name}
                        </h3>
                        <span className="shrink-0 border-b border-dashed border-transparent font-serif text-base text-cream/50 transition-all duration-500 group-hover:text-copper group-hover:opacity-100">
                          {it.price}
                        </span>
                      </div>
                      {it.ingredients && (
                        <p className="mt-1 max-w-md text-xs font-light leading-relaxed text-cream/45">
                          {it.ingredients}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>

      <footer className="border-t border-cream/10 py-10 text-center text-[10px] uppercase tracking-[0.4em] text-cream/40">
        House of Cakes · Crafted Slow
      </footer>
    </main>
    </>
  );
};

export default MenuPage;