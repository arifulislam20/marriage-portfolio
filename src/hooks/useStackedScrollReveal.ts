import { useEffect } from 'react';

/**
 * Universal hook to smoothly reveal cards from layers when scrolling into view,
 * and fold them back into stacked layers ("গুটিয়ে নেওয়া") when scrolling out of view.
 * Works on ALL cards (.stacked-card) and ALL inner cards (.stacked-inner-card).
 */
export function useStackedScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Emerges smoothly from stacked layer
            entry.target.classList.add('is-revealed');
          } else {
            // Folds back smoothly into stacked layer ("গুটিয়ে নেওয়া")
            entry.target.classList.remove('is-revealed');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '10px 0px -15px 0px',
      }
    );

    const observeAll = () => {
      const allCards = document.querySelectorAll('.stacked-card, .stacked-inner-card');
      const windowHeight = window.innerHeight;

      allCards.forEach((card) => {
        // If element is already in initial view on page load, reveal immediately
        const rect = card.getBoundingClientRect();
        if (rect.top < windowHeight * 0.95 && rect.bottom > 0) {
          card.classList.add('is-revealed');
        }
        observer.observe(card);
      });
    };

    observeAll();

    // Re-check after images/fonts settle
    const timer1 = setTimeout(observeAll, 100);
    const timer2 = setTimeout(observeAll, 400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      observer.disconnect();
    };
  }, []);
}
