import { Reveal } from "./Reveal";

const quotes = [
  { q: "It felt less like a café and more like a confession.", a: "Vogue Living" },
  { q: "Every cup is staged like a film still — and tastes like one too.", a: "Monocle" },
  { q: "The most beautiful thirty minutes of my week.", a: "Eliza R., regular" },
];

export const Voices = () => (
  <section id="voices" className="relative py-[20vh]">
    <div className="mx-auto max-w-6xl px-6 md:px-12">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.4em] text-copper/80">Chapter Five</p>
      </Reveal>
      <Reveal delay={0.15}>
        <h2 className="mt-6 font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[1] text-cream">
          What they <em className="text-copper">whisper.</em>
        </h2>
      </Reveal>

      <div className="mt-24 space-y-24">
        {quotes.map((qu, i) => (
          <Reveal key={qu.a} delay={i * 0.2}>
            <figure className={`max-w-3xl ${i % 2 ? "ml-auto text-right" : ""}`}>
              <blockquote className="font-serif text-3xl leading-tight text-cream/90 md:text-5xl">
                <span className="text-copper">"</span>{qu.q}<span className="text-copper">"</span>
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.3em] text-cream/50">
                — {qu.a}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);