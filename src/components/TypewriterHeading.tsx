import React, { useState, useEffect, useRef } from 'react';

interface TypewriterHeadingProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  speed?: number; // ms per grapheme
}

/**
 * Splits text into grapheme clusters so Bengali conjuncts (যুক্তাক্ষর)
 * and vowel signs (কার) never break or glitch during typing.
 */
function splitGraphemes(text: string): string[] {
  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    try {
      const segmenter = new (Intl as any).Segmenter('bn', { granularity: 'grapheme' });
      return Array.from(segmenter.segment(text), (s: any) => s.segment);
    } catch {
      // Fallback below
    }
  }
  // Safe Bengali regex fallback: base character + any combining marks
  const matches = text.match(/[\s\S][\u0981-\u09CD\u09D7]*/g);
  return matches || text.split('');
}

export const TypewriterHeading: React.FC<TypewriterHeadingProps> = ({
  text,
  as: Component = 'h2',
  className = '',
  speed = 32,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const [displayedCount, setDisplayedCount] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  // Split into Bengali grapheme units
  const graphemes = React.useMemo(() => splitGraphemes(text), [text]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || typeof IntersectionObserver === 'undefined') {
      setDisplayedCount(graphemes.length);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When scrolled into view, start typing
            setDisplayedCount(0);
            setIsTyping(true);
            setHasStarted(true);
          } else {
            // Reset when scrolled completely out of view so it types again when scrolled back
            setIsTyping(false);
            setHasStarted(false);
            setDisplayedCount(0);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [graphemes]);

  // Typing timer
  useEffect(() => {
    if (!isTyping || !hasStarted) return;

    if (displayedCount < graphemes.length) {
      const timer = setTimeout(() => {
        setDisplayedCount((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      // Typing finished: let cursor blink twice, then gracefully hide
      const finishTimer = setTimeout(() => {
        setIsTyping(false);
      }, 700);
      return () => clearTimeout(finishTimer);
    }
  }, [isTyping, hasStarted, displayedCount, graphemes.length, speed]);

  const displayedText = graphemes.slice(0, displayedCount).join('');
  const isFinished = displayedCount >= graphemes.length;

  return (
    <Component ref={containerRef} className={`relative inline-block ${className}`}>
      {/* On screen: display current typed text */}
      <span className="no-print">
        {displayedText}
        {/* Blinking emerald-gold cursor while typing */}
        {hasStarted && !isFinished && (
          <span
            className="inline-block w-[2px] h-[0.85em] bg-[#0E4331] ml-1 align-baseline animate-pulse"
            aria-hidden="true"
          />
        )}
      </span>

      {/* For printing: always render full text with zero delay */}
      <span className="hidden print:inline">{text}</span>
    </Component>
  );
};
