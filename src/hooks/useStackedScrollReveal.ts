import { useEffect } from 'react';

/**
 * Hook to smoothly reveal cards from layers when scrolling into view,
 * and fold them back into stacked layers ("গুটিয়ে নেওয়া") when scrolling out of view.
 * Applies to ALL cards on the website AND the inner cards inside them.
 */
export function useStackedScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    // Observer for both outer and inner cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When card scrolls into view: emerge smoothly from stacked layers
            entry.target.classList.add('is-revealed');
          } else {
            // When card scrolls out of view: fold/tuck back into stacked layers ("গুটিয়ে নেওয়া")
            entry.target.classList.remove('is-revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -25px 0px',
      }
    );

    const observeAllCards = () => {
      // 1. All Outer Cards across all sections
      const outerSelectors = [
        '#hero > div > div.max-w-4xl > div:first-child', // Hero Hadith card
        '#hero .grid > div', // 4 quick stats cards
        '#details .grid:first-of-type > div', // 6 personal info attribute cards
        '#details .grid:last-of-type > div', // 2 address cards
        '#education .grid:first-of-type > div', // 2 education degree cards
        '#education > div > div.p-6.rounded-2xl', // exam board callout card
        '#professional > div > div.grid > div', // 2 main professional cards
        '#family > div > div.p-6.sm\\:p-7.rounded-2xl', // father's main card
        '#family .grid.grid-cols-1.md\\:grid-cols-2 > div', // mother & siblings cards
        '#faith .rounded-3xl', // faith centerpiece card
        '#intentions > div > div.p-6.sm\\:p-8.rounded-2xl', // desired qualities main card
        '#intentions .grid.grid-cols-1.md\\:grid-cols-2 > div', // future aspiration & financial cards
        '#gallery .rounded-3xl', // photo frame card
        '#contact .grid > div', // 2 contact cards
      ];

      // 2. All Inner Cards inside outer cards (কার্ড এর ভিতরের কার্ড)
      const innerSelectors = [
        '#family .grid.grid-cols-1.md\\:grid-cols-3 > div', // father's 3 inner cards (name, occupation, phone)
        '#education > div > div.p-6.rounded-2xl .grid > div', // 2 inner exam board cards
        '#professional .space-y-2\\.5 > div', // inner role/responsibility items
        '#professional .grid.grid-cols-1.sm\\:grid-cols-2 > div', // inner skill items
        '#professional .mt-6.pt-4', // professional service note card
        '#intentions > div > div.p-6.sm\\:p-8.rounded-2xl .grid:first-of-type > div', // inner quality cards
        '#intentions > div > div.p-6.sm\\:p-8.rounded-2xl .grid.grid-cols-1.sm\\:grid-cols-2 > div', // 5 inner expectation cards
        '#contact .p-4.rounded-xl.bg-gradient-to-r', // guardian phone CTA inner box
      ];

      const windowHeight = window.innerHeight;

      // Register Outer Cards
      const outerElements = document.querySelectorAll(outerSelectors.join(', '));
      outerElements.forEach((el, index) => {
        el.classList.add('stacked-card');
        // Add stagger class if inside a grid
        if (el.parentElement?.classList.contains('grid')) {
          el.classList.add(`stack-stagger-${(index % 6) + 1}`);
        }

        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
          el.classList.add('is-revealed');
        }
        observer.observe(el);
      });

      // Register Inner Cards (কার্ড এর ভিতরের কার্ড গুলো)
      const innerElements = document.querySelectorAll(innerSelectors.join(', '));
      innerElements.forEach((el, index) => {
        el.classList.add('stacked-inner-card');
        el.classList.add(`inner-stagger-${(index % 6) + 1}`);

        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
          el.classList.add('is-revealed');
        }
        observer.observe(el);
      });
    };

    observeAllCards();

    // Re-check after images/fonts settle
    const timer1 = setTimeout(observeAllCards, 150);
    const timer2 = setTimeout(observeAllCards, 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      observer.disconnect();
    };
  }, []);
}
