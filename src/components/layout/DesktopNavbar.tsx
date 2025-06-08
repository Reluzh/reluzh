
"use client";

import Link from 'next/link';
import Image from 'next/image'; // Import next/image
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
          <Image 
            src="/assets/reboxit-logo.png" // Changed from /assets/leaf.png
            alt="ReboxIt Logo" 
            width={32} // Corresponds to h-8 w-8, adjust if the new logo aspect ratio is different
            height={32} // Corresponds to h-8 w-8, adjust if the new logo aspect ratio is different
            className="group-hover:opacity-80 transition-opacity" 
          />
          <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">ReboxIt</span>
        </Link>
        <div className="flex items-center space-x-6">
          {navItems.map((item) => {
            // The "Account" label for /profile page is more common than "Profile"
            const displayLabel = item.href === '/profile' ? 'Account' : item.label;
            const isActive = pathname === item.href || (item.href === "/" && pathname.startsWith("/listing")); // Highlight Home if on listing detail

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {/* Example to include icons, can be enabled if desired */}
                {/* <item.icon className={cn("h-5 w-5 mr-1 inline-block", isActive ? "text-primary" : "text-muted-foreground")} /> */}
                {displayLabel}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
