import ListingCard from '@/components/listing-card';
import { mockListings } from '@/lib/mock-data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Search, MapPin } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-8 bg-card rounded-lg shadow-md">
        <h1 className="text-4xl font-headline font-bold text-primary mb-2">Save Food, Save Money, Save the Planet</h1>
        <p className="text-lg text-foreground/80">
          Discover delicious surplus food from your favorite local spots at amazing prices.
        </p>
      </section>

      <section className="p-4 sm:p-6 bg-card rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-grow flex items-center border rounded-md px-3 py-1.5">
            <Search className="text-muted-foreground h-5 w-5 mr-2" />
            <Input 
              type="text" 
              placeholder="Search by item, restaurant, or grocery store..." 
              className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 h-9 bg-transparent text-base"
            />
          </div>
          <div className="flex items-center border rounded-md px-3 py-1.5">
            <MapPin className="text-muted-foreground h-5 w-5 mr-2" />
            <Input 
              type="text" 
              placeholder="Enter your location" 
              className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 h-9 bg-transparent text-base"
              defaultValue="Anytown, USA"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-primary" />
            <span className="font-semibold">Filters:</span>
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px] rounded-md">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="restaurant">Restaurants</SelectItem>
              <SelectItem value="grocery">Grocery Stores</SelectItem>
              <SelectItem value="bakery">Bakeries</SelectItem>
              <SelectItem value="cafe">Cafes</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="distance">
            <SelectTrigger className="w-full sm:w-[180px] rounded-md">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="distance">Distance</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="price">Price</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="w-full sm:w-auto rounded-md">Apply Filters</Button>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-headline font-semibold text-primary mb-6">Nearby Deals</h2>
        {mockListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-8">No listings found matching your criteria. Try expanding your search!</p>
        )}
      </section>
    </div>
  );
}
