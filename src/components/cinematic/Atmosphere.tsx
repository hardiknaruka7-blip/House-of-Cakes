import { useEffect, useRef } from "react";

/** Global cursor-following radial glow + grain overlay + drifting embers */
export const Atmosphere = () => {
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (glow.current) {
        glow.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, hsl(var(--copper-glow) / 0.10), transparent 55%)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const embers = Array.from({ length: 24 });

  return (
    <>
      <div ref={glow} className="pointer-events-none fixed inset-0 z-20 transition-[background] duration-300" />
      <div className="pointer-events-none fixed inset-0 z-[60] opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />
      <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
        {embers.map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-copper-glow/40 blur-[1px] animate-drift"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              animationDelay: `${(i % 6) * -3}s`,
              animationDuration: `${14 + (i % 5) * 3}s`,
              opacity: 0.4 + (i % 5) * 0.1,
            }}
          />
        ))}
      </div>
    </>
  );
};