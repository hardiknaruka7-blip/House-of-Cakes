import { useEffect, useRef, useState } from "react";

export const Cursor = () => {
  const ring = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      const el = e.target as HTMLElement;
      setHover(!!el.closest("a, button, [data-cursor-hover]"));
    };
    let raf = 0;
    const loop = () => {
      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) scale(${hover ? 1.8 : 1})`;
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
    <div
      ref={ring}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-8 w-8 rounded-full border border-copper/70 transition-[transform] duration-300 ease-out md:block"
      style={{
        background: "radial-gradient(circle, hsl(var(--copper-glow) / 0.18), transparent 70%)",
        boxShadow: hover
          ? "0 0 50px hsl(var(--copper-glow) / 0.55)"
          : "0 0 24px hsl(var(--copper-glow) / 0.3)",
      }}
    />
  );
};