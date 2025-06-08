
import type { SVGProps } from 'react';

export const ReboxItLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="40"
    height="40"
    aria-label="ReboxIt Logo"
    {...props}
  >
    {/* Background */}
    <rect width="100" height="100" rx="20" fill="hsl(var(--primary))" />

    {/* Box outline (front face and top flaps indicating an open box) */}
    <path
      d="M25 75 L25 45 L75 45 L75 75 Z M25 45 L50 30 L75 45"
      stroke="hsl(var(--primary-foreground))"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Leaf shape inside the box. Tip at (50,42), base around (50,55) */}
    <path
      d="M50 42 C40 47 40 55 45 55 C47 52 53 52 55 55 C60 55 60 47 50 42 Z"
      fill="hsl(var(--primary-foreground))"
    />
  </svg>
);
