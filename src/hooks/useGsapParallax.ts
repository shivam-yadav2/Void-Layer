import { useEffect, useRef } from "react";
import { registerGSAP, gsap, ScrollTrigger } from "@/animations/gsap";

interface Options {
  y?: number;
  rotate?: number;
  scale?: number;
}

export function useGsapParallax<T extends HTMLElement>({
  y = -60,
  rotate = 0,
  scale = 1,
}: Options = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    registerGSAP();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 0, rotate: 0, scale: 1 },
        {
          y,
          rotate,
          scale,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        },
      );
    }, el);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, [y, rotate, scale]);

  return ref;
}
