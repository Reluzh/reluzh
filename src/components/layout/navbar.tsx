import Link from 'next/link';
import { ResQBoxLogo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart, User, Search, Home } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <ResQBoxLogo />
          <span className="text-2xl font-headline font-bold text-primary">ResQBox</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-2 border rounded-md px-2 py-1 flex-grow max-w-md">
           <Search className="text-muted-foreground h-5 w-5" />
           <Input type="search" placeholder="Search for food, restaurants..." className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 h-8 bg-transparent"/>
        </div>

        <nav className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" size="icon" asChild className="md:hidden">
            <Link href="/search-mobile"> {/* Placeholder for mobile search page or modal */}
              <Search className="h-6 w-6" />
              <span className="sr-only">Search</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild className="hidden sm:flex">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" /> Listings
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/groceries">
              <ShoppingBag className="mr-0 sm:mr-2 h-5 w-5" /> <span className="hidden sm:inline">Groceries</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/favorites">
              <Heart className="mr-0 sm:mr-2 h-5 w-5" /> <span className="hidden sm:inline">Favorites</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/profile">
              <User className="mr-0 sm:mr-2 h-5 w-5" /> <span className="hidden sm:inline">Profile</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
