
import ListingCard from '@/components/listing-card';
import { mockListings } from '@/lib/mock-data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Search, MapPin,SlidersHorizontal } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <header className="py-2">
        {/* Simplified header, design for home page list wasn't provided, so keeping it functional */}
        <h1 className="text-2xl font-bold text-foreground">Discover Deals</h1>
      </header>

      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search restaurants, items..." 
                className="w-full pl-10 pr-4 py-3 rounded-lg border bg-card focus-visible:ring-primary text-base"
              />
            </div>
            <div className="relative sm:w-auto w-full">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                type="text" 
                placeholder="Anytown, USA" 
                className="w-full pl-10 pr-4 py-3 rounded-lg border bg-card focus-visible:ring-primary text-base sm:min-w-[180px]"
              />
            </div>
             <Button variant="outline" className="h-12 px-3 rounded-lg bg-card flex-shrink-0">
                <SlidersHorizontal className="h-5 w-5"/>
                <span className="sr-only">Filters</span>
            </Button>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">Nearby Deals</h2>
        {mockListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
            {mockListings.map((listing, index) => (
                <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
            <p className="text-center text-muted-foreground py-8">No listings found. Try adjusting your search or location!</p>
        )}
      </section>
    </div>
  );
}
