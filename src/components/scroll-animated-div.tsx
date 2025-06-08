"use client";

import { useRef, useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimatedDivProps extends PropsWithChildren {
  className?: string;
  animationClass?: string;
  delayMs?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

const ScrollAnimatedDiv: React.FC<ScrollAnimatedDivProps> = ({
  children,
  className,
  animationClass = 'animate-fade-in-up',
  delayMs = 0,
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (triggerOnce && element) { // check element again for safety
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            // setIsInView(false); // Optional: Reset if it scrolls out of view and triggerOnce is false
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, triggerOnce]);

  return (
    <div
      ref={ref}
      className={cn(
        !isInView && 'opacity-0', // Keep it hidden if not in view or before animation starts
        isInView && animationClass, // Apply animation class when in view
        className
      )}
      style={{ animationDelay: isInView && delayMs > 0 ? `${delayMs}ms` : undefined }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedDiv;
