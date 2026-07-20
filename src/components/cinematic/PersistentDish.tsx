import { useEffect, useRef, useState } from "react";
import cake from "@/assets/hero-cake.png";
import chocolateBomb from "@/assets/menu/chocolate-bomb.png";
import sizzlingBrownie from "@/assets/menu/sizzling-brownie.png";
import clubSandwich from "@/assets/menu/club-sandwich.png";
import coleslawSandwich from "@/assets/menu/coleslaw-sandwich.png";
import bbqPaneerBurger from "@/assets/menu/bbq-paneer-burger.png";
import mexicanBurger from "@/assets/menu/mexican-burger.png";
import margheritaPizza from "@/assets/menu/margherita-pizza.png";
import hocExoticPizza from "@/assets/menu/hoc-exotic-pizza.png";
import arrabiataPasta from "@/assets/menu/arrabiata-pasta.png";
import whiteSaucePasta from "@/assets/menu/white-sauce-pasta.png";
import hakkaNoodles from "@/assets/menu/hakka-noodles.png";
import chilliPaneer from "@/assets/menu/chilli-paneer.png";

/**
 * Persistent focal dish that lives across sections.
 * Each section "owns" a dish; we crossfade between them at scroll thresholds
 * so the product never abruptly disappears — it morphs.
 */
// Cinematic tasting journey — each signature dish takes the spotlight, then
// morphs into the next. Vary framing (scale) and position for camera rhythm.
const dishes = [
  { src: cake,             p: 0.00, x: 0,   y: 0,    s: 0.62, rZ: 0 },   // hero — restrained
  { src: cake,             p: 0.08, x: 0,   y: -4,   s: 0.58, rZ: -3 },  // story handoff
  { src: clubSandwich,     p: 0.16, x: 18,  y: 4,    s: 0.70, rZ: 6 },   // sandwiches — medium
  { src: coleslawSandwich, p: 0.24, x: -14, y: -2,   s: 0.66, rZ: -5 },
  { src: bbqPaneerBurger,  p: 0.32, x: 16,  y: 5,    s: 0.78, rZ: 8 },   // burgers — heavier
  { src: mexicanBurger,    p: 0.40, x: -18, y: -3,   s: 0.72, rZ: -7 },
  { src: margheritaPizza,  p: 0.48, x: 14,  y: 4,    s: 0.86, rZ: 9 },   // pizza — centerpiece close-up
  { src: hocExoticPizza,   p: 0.56, x: -16, y: -4,   s: 0.80, rZ: -8 },
  { src: arrabiataPasta,   p: 0.64, x: 18,  y: 5,    s: 0.72, rZ: 6 },   // pasta — creamy medium
  { src: whiteSaucePasta,  p: 0.72, x: -16, y: -2,   s: 0.68, rZ: -6 },
  { src: hakkaNoodles,     p: 0.80, x: 16,  y: 4,    s: 0.74, rZ: 7 },   // east asian
  { src: chilliPaneer,     p: 0.86, x: -14, y: -3,   s: 0.70, rZ: -6 },
  { src: sizzlingBrownie,  p: 0.93, x: 10,  y: 2,    s: 0.82, rZ: 4 },   // dessert climax
  { src: chocolateBomb,    p: 1.00, x: 0,   y: -6,   s: 0.78, rZ: 0 },   // finale
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

export const PersistentDish = () => {
  const wrap = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  // Two layers to crossfade
  const aRef = useRef<HTMLImageElement>(null);
  const bRef = useRef<HTMLImageElement>(null);
  const [current, setCurrent] = useState({ a: dishes[0].src, b: dishes[0].src, layer: 0 });
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const menuEl = document.getElementById("menu");
    if (!menuEl) return;
    const io = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0, rootMargin: "-20% 0px -20% 0px" },
    );
    io.observe(menuEl);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);

    let lastSrc = dishes[0].src;
    let layer = 0;
    let crossfade = 1;
    let raf = 0;

    const loop = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, window.scrollY / Math.max(1, max)));

      // find segment
      let i = 0;
      for (; i < dishes.length - 1; i++) {
        if (p >= dishes[i].p && p <= dishes[i + 1].p) break;
      }
      const a = dishes[i];
      const b = dishes[Math.min(i + 1, dishes.length - 1)];
      const t = ease((p - a.p) / Math.max(0.0001, b.p - a.p));

      const x  = lerp(a.x, b.x, t);
      const y  = lerp(a.y, b.y, t);
      const s  = lerp(a.s, b.s, t);
      const rZ = lerp(a.rZ, b.rZ, t);

      // Determine target dish to show (closer segment endpoint owns it)
      const targetSrc = t < 0.5 ? a.src : b.src;
      if (targetSrc !== lastSrc) {
        // swap layers — put new src on the hidden one, then fade it in
        layer = 1 - layer;
        setCurrent((prev) =>
          layer === 0 ? { ...prev, a: targetSrc, layer } : { ...prev, b: targetSrc, layer }
        );
        lastSrc = targetSrc;
        crossfade = 0;
      }
      crossfade = Math.min(1, crossfade + 0.012);

      const rX = mouse.current.y * -6;
      const rY = mouse.current.x * 10;

      if (wrap.current) {
        wrap.current.style.transform = `translate3d(${x}vw, ${y}vh, 0) scale(${s})`;
      }
      if (tiltRef.current) {
        tiltRef.current.style.transform = `perspective(1400px) rotateX(${rX}deg) rotateY(${rY}deg) rotateZ(${rZ}deg)`;
      }
      if (aRef.current && bRef.current) {
        const visibleA = layer === 0 ? crossfade : 1 - crossfade;
        aRef.current.style.opacity = String(visibleA);
        bRef.current.style.opacity = String(1 - visibleA);
      }

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 hidden items-center justify-end pr-[6vw] transition-opacity duration-700 md:flex"
      style={{ opacity: hidden ? 0 : 1 }}
    >
      <div ref={wrap} className="will-change-transform">
        <div className="relative animate-float-slow">
          <div
            className="absolute inset-0 -z-10 bg-gradient-warm blur-3xl opacity-70"
            style={{ transform: "scale(1.15)" }}
          />
          <div ref={tiltRef} className="relative h-[32vh] w-[32vh] max-h-[30vw] max-w-[30vw] will-change-transform">
            <img
              ref={aRef}
              src={current.a}
              alt="Signature dish"
              width={520}
              height={520}
              className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.8)] transition-opacity duration-[1200ms] ease-out"
              style={{ filter: "drop-shadow(0 0 50px hsl(var(--copper-glow) / 0.28))" }}
            />
            <img
              ref={bRef}
              src={current.b}
              alt=""
              aria-hidden
              width={520}
              height={520}
              className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.8)] transition-opacity duration-[1200ms] ease-out"
              style={{ filter: "drop-shadow(0 0 50px hsl(var(--copper-glow) / 0.28))", opacity: 0 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};