"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset = 100): string {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: `-${offset}px 0px -40% 0px`, threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids, offset]);

  return active;
}
