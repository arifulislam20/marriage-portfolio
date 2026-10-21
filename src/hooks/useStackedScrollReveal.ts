import { useEffect } from 'react';

/**
 * Hook to smoothly reveal cards from layers when scrolling into view,
 * and fold them back into stacked layers ("গুটিয়ে নেওয়া") when scrolling out of view.
 */
export function useStackedScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When card scrolls into view: emerge smoothly from stacked layers
            entry.target.classList.add('is-revealed');
          } else {
            // When card scrolls out of view: fold/tuck back into stacked layers ("গুটিয়ে নেওয়া")
            // Only fold back if element has scrolled past a reasonable threshold
            entry.target.classList.remove('is-revealed');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    const observeCards = () => {
      // Find cards across all sections
      const cardSelectors = [
        '#hero .rounded-2xl',
        '#details .rounded-xl',
        '#details .rounded-2xl',
        '#education .rounded-2xl',
        '#professional .rounded-2xl',
        '#family .rounded-2xl',
        '#family .rounded-xl',
        '#faith .rounded-3xl',
        '#intentions .rounded-2xl',
        '#gallery .rounded-3xl',
        '#contact .rounded-2xl',
      ];

      const cards = document.querySelectorAll(cardSelectors.join(', '));
      const windowHeight = window.innerHeight;

      cards.forEach((card) => {
        card.classList.add('stacked-card');

        // If card is already in view on page load, reveal it right away
        const rect = card.getBoundingClientRect();
        if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
          card.classList.add('is-revealed');
        }

        observer.observe(card);
      });
    };

    observeCards();

    // Check again after fonts/images load
    const timer = setTimeout(observeCards, 200);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
}
