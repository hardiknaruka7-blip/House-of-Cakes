import { useEffect, useRef, useState } from "react";

export const Cursor = () => {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      const el = e.target as HTMLElement;
      setHover(!!el.closest("a, button, [data-cursor-hover]"));
    };
    let raf = 0;
    const loop = () => {
      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.12;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) scale(${hover ? 1.6 : 1})`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", move);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
    };
  }, [hover]);

  return (
    <>
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-10 w-10 rounded-full border border-copper/60 transition-[transform,opacity] duration-200 ease-out md:block"
        style={{
          background: hover
            ? "radial-gradient(circle, hsl(var(--copper-glow) / 0.35), transparent 70%)"
            : "radial-gradient(circle, hsl(var(--copper-glow) / 0.15), transparent 70%)",
          boxShadow: hover
            ? "0 0 40px hsl(var(--copper-glow) / 0.6), inset 0 0 20px hsl(var(--copper) / 0.3)"
            : "0 0 24px hsl(var(--copper-glow) / 0.3)",
        }}
      />
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-1.5 w-1.5 rounded-full bg-copper-glow md:block"
        style={{ boxShadow: "0 0 12px hsl(var(--copper-glow))" }}
      />
    </>
  );
};