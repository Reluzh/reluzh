
"use client";

import Link from 'next/link';
import Image from 'next/image'; 
import { usePathname } from 'next/navigation';
import { Home, Search, ShoppingBasket, ClipboardList, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/browse', label: 'Browse', icon: Search },
  { href: '/groceries', label: 'Groceries', icon: ShoppingBasket },
  { href: '/orders', label: 'Orders', icon: ClipboardList },
  { href: '/profile', label: 'Account', icon: User },
];

export default function DesktopNavbar() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex bg-card border-b border-border sticky top-0 z-40">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10"> {/* Equivalent to width/height 40px */}
            <Image 
              src="/assets/reboxit-logo.png" 
              alt="ReboxIt Logo" 
              layout="fill"
              objectFit="contain"
              className="group-hover:opacity-80 transition-opacity" 
            />
          </div>
          <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">ReboxIt</span>
        </Link>
        <div className="flex items-center space-x-6">
          {navItems.map((item) => {
            const displayLabel = item.href === '/profile' ? 'Account' : item.label;
            const isActive = pathname === item.href || (item.href === "/" && pathname.startsWith("/listing"));

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {displayLabel}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
