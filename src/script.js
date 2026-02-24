// Thortech Landing Page Script for React
// Minimal JS for fade-in animations

import { useEffect } from "react";

export function useFadeInOnScroll() {
  useEffect(() => {
    const animatedEls = document.querySelectorAll('[data-animate]');
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    animatedEls.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
