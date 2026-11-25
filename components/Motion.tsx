"use client";

import { useEffect } from "react";

/**
 * Adds `.in` to animated elements (.reveal, .flow, .pipeline, .delta) the
 * first time they scroll into view. All motion lives in CSS and is gated by
 * `prefers-reduced-motion`, so this component only flips a class.
 */
export default function Motion() {
  useEffect(() => {
    const targets = document.querySelectorAll(".reveal, .flow, .pipeline, .delta, .hx-steps");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("in"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" },
    );
    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}
