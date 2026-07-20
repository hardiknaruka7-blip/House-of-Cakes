import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { id: "hero", label: "House" },
  { id: "story", label: "Story" },
  { id: "menu", label: "Menu" },
  { id: "ambience", label: "Ambience" },
  { id: "experience", label: "Highlight" },
  { id: "voices", label: "Voices" },
  { id: "reserve", label: "Reserve" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let cur = "hero";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = l.id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-border/40 bg-ink/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        <a href="#hero" className="font-serif text-xl tracking-[0.35em] text-cream">
          HOUSE<span className="text-copper"> · </span>OF<span className="text-copper"> · </span>CAKES
        </a>
        <ul className="hidden gap-10 md:flex">
          {links.slice(1, -1).map((l) => (
            <li key={l.id}>
              {l.id === "menu" ? (
                <Link
                  to="/menu"
                  className="group relative text-xs uppercase tracking-[0.25em] text-cream/70 transition-colors hover:text-cream"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-copper transition-all duration-500 group-hover:w-full" />
                </Link>
              ) : (
                <a
                  href={`#${l.id}`}
                  className={`group relative text-xs uppercase tracking-[0.25em] transition-colors ${
                    active === l.id ? "text-copper" : "text-cream/70 hover:text-cream"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-copper transition-all duration-500 ${
                      active === l.id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              )}
            </li>
          ))}
        </ul>
        <a
          href="#reserve"
          className="group relative overflow-hidden rounded-full border border-copper/40 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cream transition-all duration-500 hover:border-copper hover:shadow-glow"
        >
          <span className="relative z-10">Reserve</span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-bronze opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
        </a>
      </nav>
    </header>
  );
};