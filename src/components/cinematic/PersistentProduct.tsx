import { useEffect, useRef } from "react";
import heroCup from "@/assets/hero-cup.png";

/**
 * Persistent hero product that lives across sections.
 * Reads scroll progress + cursor proximity to morph position, scale, rotation, glow.
 */
export const PersistentProduct = () => {
  const wrap = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);

    // Keyframe map: scroll progress (0–1) → translate/scale/rotate
    const states = [
      { p: 0.0,  x: 0,   y: 0,   s: 1.0, rZ: 0,   o: 1 },   // hero
      { p: 0.14, x: 0,   y: -10, s: 0.95, rZ: -4, o: 0.85 },
      { p: 0.28, x: 30,  y: 5,   s: 0.55, rZ: 12, o: 0.7 }, // story
      { p: 0.45, x: -25, y: -5,  s: 0.65, rZ: -10,o: 0.85 }, // menu
      { p: 0.6,  x: 20,  y: 10,  s: 0.5,  rZ: 14, o: 0.55 }, // ambience
      { p: 0.75, x: 0,   y: 0,   s: 1.05, rZ: -6, o: 1 },    // experience
      { p: 0.88, x: -15, y: 5,   s: 0.4,  rZ: 8,  o: 0.5 },  // voices
      { p: 1.0,  x: 0,   y: -20, s: 0.85, rZ: 0,  o: 0.95 }, // reserve
    ];

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const interp = (p: number) => {
      for (let i = 0; i < states.length - 1; i++) {
        const a = states[i], b = states[i + 1];
        if (p >= a.p && p <= b.p) {
          const t = (p - a.p) / (b.p - a.p);
          // ease
          const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
          return {
            x: lerp(a.x, b.x, e),
            y: lerp(a.y, b.y, e),
            s: lerp(a.s, b.s, e),
            rZ: lerp(a.rZ, b.rZ, e),
            o: lerp(a.o, b.o, e),
          };
        }
      }
      return states[states.length - 1];
    };

    let raf = 0;
    const loop = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, window.scrollY / Math.max(1, max)));
      const st = interp(p);
      const rX = mouse.current.y * -8;
      const rY = mouse.current.x * 12;
      if (wrap.current) {
        wrap.current.style.transform = `translate3d(${st.x}vw, ${st.y}vh, 0) scale(${st.s})`;
        wrap.current.style.opacity = String(st.o);
      }
      if (img.current) {
        img.current.style.transform = `perspective(1200px) rotateX(${rX}deg) rotateY(${rY}deg) rotateZ(${st.rZ}deg)`;
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
    <div className="pointer-events-none fixed inset-0 z-30 hidden items-center justify-center md:flex">
      <div ref={wrap} className="will-change-transform" style={{ transition: "opacity 0.6s ease" }}>
        <div className="relative animate-float-slow">
          {/* glow halo */}
          <div className="absolute inset-0 -z-10 bg-gradient-warm blur-3xl" style={{ transform: "scale(1.6)" }} />
          <img
            ref={img}
            src={heroCup}
            alt="Signature copper cup"
            width={520}
            height={520}
            className="h-[42vh] w-auto drop-shadow-[0_60px_60px_rgba(0,0,0,0.85)] will-change-transform"
            style={{ filter: "drop-shadow(0 0 80px hsl(var(--copper-glow) / 0.35))" }}
          />
        </div>
      </div>
    </div>
  );
};