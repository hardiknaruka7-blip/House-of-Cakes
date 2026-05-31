import { useEffect, useRef, useState } from "react";
import cake from "@/assets/hero-cake.png";
import sandwich from "@/assets/dish-sandwich.png";
import burger from "@/assets/dish-burger.png";
import pizza from "@/assets/dish-pizza.png";
import pasta from "@/assets/dish-pasta.png";
import asian from "@/assets/dish-asian.png";
import dessert from "@/assets/dish-dessert.png";

/**
 * Persistent focal dish that lives across sections.
 * Each section "owns" a dish; we crossfade between them at scroll thresholds
 * so the product never abruptly disappears — it morphs.
 */
const dishes = [
  { src: cake,     p: 0.00, x: 0,   y: 0,    s: 1.0,  rZ: 0 },   // hero
  { src: cake,     p: 0.12, x: 0,   y: -6,   s: 0.9,  rZ: -4 },  // story handoff
  { src: sandwich, p: 0.22, x: 22,  y: 4,    s: 0.85, rZ: 8 },   // sandwiches
  { src: burger,   p: 0.34, x: -20, y: -2,   s: 0.95, rZ: -6 },  // burgers
  { src: pizza,    p: 0.46, x: 18,  y: 6,    s: 1.05, rZ: 10 },  // pizzas (centerpiece)
  { src: pasta,    p: 0.58, x: -18, y: 4,    s: 0.85, rZ: -8 },  // pasta
  { src: asian,    p: 0.70, x: 20,  y: -2,   s: 0.9,  rZ: 8 },   // east asian
  { src: dessert,  p: 0.85, x: -10, y: 0,    s: 1.0,  rZ: -6 },  // dessert finale
  { src: dessert,  p: 1.0,  x: 0,   y: -8,   s: 0.9,  rZ: 0 },   // reserve
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
      crossfade = Math.min(1, crossfade + 0.04);

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
            className="absolute inset-0 -z-10 bg-gradient-warm blur-3xl"
            style={{ transform: "scale(1.6)" }}
          />
          <div ref={tiltRef} className="relative h-[46vh] w-[46vh] will-change-transform">
            <img
              ref={aRef}
              src={current.a}
              alt="Signature dish"
              width={520}
              height={520}
              className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_60px_60px_rgba(0,0,0,0.85)] transition-opacity duration-700"
              style={{ filter: "drop-shadow(0 0 80px hsl(var(--copper-glow) / 0.35))" }}
            />
            <img
              ref={bRef}
              src={current.b}
              alt=""
              aria-hidden
              width={520}
              height={520}
              className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_60px_60px_rgba(0,0,0,0.85)] transition-opacity duration-700"
              style={{ filter: "drop-shadow(0 0 80px hsl(var(--copper-glow) / 0.35))", opacity: 0 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};