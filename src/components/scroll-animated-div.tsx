
"use client";

// This component is not actively used in the new design for the main pages.
// It can be kept for potential use on other pages or removed if no longer needed.
// For now, keeping the code as is.

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
            if (triggerOnce && element) { 
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            // setIsInView(false); 
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
        !isInView && 'opacity-0', 
        isInView && animationClass, 
        className
      )}
      style={{ animationDelay: isInView && delayMs > 0 ? `${delayMs}ms` : undefined }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedDiv;
