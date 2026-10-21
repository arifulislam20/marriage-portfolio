import { useEffect } from 'react';

/**
 * Hook to smoothly reveal stacked cards one by one as they scroll into view.
 * Creates the visual sensation of cards resting in layers and smoothly sliding
 * out one by one on scroll.
 */
export function useStackedScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    const checkAndObserve = () => {
      const cards = document.querySelectorAll('.stacked-card, .manuscript-registry-item, .theme-card');
      const windowHeight = window.innerHeight;
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        // If element is already in initial view on page load, reveal it
        if (rect.top < windowHeight * 0.9) {
          card.classList.add('is-revealed');
        }
        observer.observe(card);
      });
    };

    // Run on mount
    checkAndObserve();

    // Check again after brief delay to catch any images/fonts settling
    const timer = setTimeout(checkAndObserve, 150);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
}
