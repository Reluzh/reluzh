
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, ShoppingBasket, ClipboardList, User, LogIn } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';

const navItemsBase = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/browse', label: 'Browse', icon: Search },
  { href: '/groceries', label: 'Groceries', icon: ShoppingBasket },
  { href: '/orders', label: 'Orders', icon: ClipboardList },
];

export default function BottomNavbar() {
  const pathname = usePathname();
  const { user, loading: authLoading } = useAuth();

  const finalNavItems = [...navItemsBase];

  if (!authLoading) {
    if (user) {
      finalNavItems.push({ href: '/profile', label: 'Account', icon: User });
    } else {
      finalNavItems.push({ href: '/login', label: 'Account', icon: LogIn });
    }
  }

  // If auth is loading, we might show a placeholder or fewer items.
  // For simplicity, if loading, we'll show base items + a generic placeholder or the login icon.
  if (authLoading) {
    const accountItemPlaceholder = { href: '/login', label: 'Account', icon: User }; // Default to User icon, will navigate to login if clicked before auth resolves
     finalNavItems.push(accountItemPlaceholder);
  }


  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-card border-t border-border flex justify-around items-center shadow-top z-50 md:hidden">
      {finalNavItems.map((item) => {
        // Special active check for login tab to include signup page
        const isActive = (item.href === '/login' && (pathname === '/login' || pathname === '/signup')) || pathname === item.href;
        
        return (
          <Link
            key={item.label + item.href} // Ensure key is unique if labels/hrefs might repeat during loading
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center text-xs font-medium h-full w-full transition-colors",
              isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <item.icon className={cn("h-6 w-6 mb-0.5", isActive ? "text-primary" : "")} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
