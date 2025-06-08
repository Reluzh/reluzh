import type { SVGProps } from 'react';

export const ResQBoxLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="40"
    height="40"
    aria-label="ResQBox Logo"
    {...props}
  >
    <rect width="100" height="100" rx="20" fill="hsl(var(--primary))" />
    <path
      d="M30 70 Q50 90 70 70 M30 70 L30 40 Q30 20 50 20 Q70 20 70 40 L70 70 M50 20 L50 55 M35 50 L65 50"
      stroke="hsl(var(--primary-foreground))"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M40 55 A10 10 0 0 1 60 55"
      stroke="hsl(var(--primary-foreground))"
      strokeWidth="6"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);
