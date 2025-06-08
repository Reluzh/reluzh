
"use client";

import Link from 'next/link';
import Image from 'next/image'; 
import { usePathname } from 'next/navigation';
import { Home, Search, ShoppingBasket, ClipboardList, User, LogIn } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';

const navItemsBase = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/browse', label: 'Browse', icon: Search },
  { href: '/groceries', label: 'Groceries', icon: ShoppingBasket },
  { href: '/orders', label: 'Orders', icon: ClipboardList },
  // Account/Login will be handled dynamically
];

export default function DesktopNavbar() {
  const pathname = usePathname();
  const { user, loading: authLoading } = useAuth();

  return (
    <nav className="hidden md:flex bg-card border-b border-border sticky top-0 z-40">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10"> 
            <Image 
              src="/assets/reboxit-logo.png" 
              alt="App Logo" 
              layout="fill"
              objectFit="contain"
              className="group-hover:opacity-80 transition-opacity" 
            />
          </div>
          <span className="font-bold text-lg transition-colors" style={{ color: '#339989' }}>ReboxIt</span>
        </Link>
        <div className="flex items-center space-x-6">
          {navItemsBase.map((item) => {
            const isActive = (item.href === "/" && (pathname === "/" || pathname.startsWith("/listing"))) || pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          {!authLoading && (
            user ? (
              <Link
                href="/profile"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === "/profile" ? "text-primary" : "text-muted-foreground"
                )}
              >
                Account
              </Link>
            ) : (
              <Link
                href="/login"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  (pathname === "/login" || pathname === "/signup") ? "text-primary" : "text-muted-foreground"
                )}
              >
                Login
              </Link>
            )
          )}
          {authLoading && <div className="text-sm text-muted-foreground">Loading...</div>}
        </div>
      </div>
    </nav>
  );
}
