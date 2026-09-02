"use client";

import { useCallback, useRef, useState, type PointerEvent, type ReactNode } from "react";
import { HeroVisual } from "@/components/HeroVisual";

type Ping = {
  id: number;
  x: number;
  y: number;
};

type HeroFieldProps = {
  children: ReactNode;
};

export function HeroField({ children }: HeroFieldProps) {
  const rootRef = useRef<HTMLElement>(null);
  const [pings, setPings] = useState<Ping[]>([]);
  const idRef = useRef(0);

  const pointInField = useCallback((event: PointerEvent<HTMLElement>) => {
    const root = rootRef.current;
    if (!root) return null;
    const rect = root.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }, []);

  function handleDown(event: PointerEvent<HTMLElement>) {
    if (event.button !== 0) return;
    const point = pointInField(event);
    if (!point) return;

    const id = ++idRef.current;
    setPings((current) => [...current.slice(-4), { id, ...point }]);
    window.setTimeout(() => {
      setPings((current) => current.filter((ping) => ping.id !== id));
    }, 850);
  }

  return (
    <section
      ref={rootRef}
      className="relative isolate min-h-[72svh] overflow-hidden"
      onPointerDown={handleDown}
    >
      <HeroVisual />

      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
        {pings.map((ping) => (
          <span key={ping.id} className="hero-ping" style={{ left: ping.x, top: ping.y }}>
            <span className="hero-ping-core" />
            <span className="hero-ping-ring" />
            <span className="hero-ping-ring hero-ping-ring-delay" />
          </span>
        ))}
      </div>

      <div className="relative z-[2]">{children}</div>
    </section>
  );
}
