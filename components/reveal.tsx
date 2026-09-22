'use client';

import { useEffect, useRef, type ElementType } from 'react';

/**
 * Subtle scroll-reveal that adds an `in` class when the element
 * enters the viewport. CSS handles the transition (see globals.css).
 * Respects prefers-reduced-motion: in that case, the element is
 * immediately shown.
 */
export function Reveal({
  children,
  delay = 0,
  as: As = 'div',
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      el.classList.add('in');
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add('in'), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <As ref={ref} className={`reveal ${className ?? ''}`}>
      {children}
    </As>
  );
}
