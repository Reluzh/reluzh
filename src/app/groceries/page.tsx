
"use client";

import { useState } from 'react';
import GroceryItemCard from '@/components/grocery-item-card';
import { mockGroceryItems, mockGroceryCategories, mockPopularStores } from '@/lib/mock-data';
import type { GroceryItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ShoppingCart, Filter, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet"
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const FilterChip: React.FC<{ label: string; selected?: boolean; onClick?: () => void }> = ({ label, selected, onClick }) => (
  <Button
    variant={selected ? "default" : "outline"}
    size="sm"
    onClick={onClick}
    className={cn(
        "rounded-full h-8 text-sm",
        selected ? "bg-primary text-primary-foreground" : "bg-card text-foreground border-border hover:bg-muted"
    )}
  >
    {label}
  </Button>
);

export default function GroceriesPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>("Featured");
  const allCategories = ['All', ...new Set(mockGroceryItems.map(item => item.category))];
  const allVendors = ['All', ...new Set(mockGroceryItems.map(item => item.vendorName))];


  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between py-2">
        <h1 className="text-2xl font-bold text-foreground">Groceries</h1>
        <Button variant="ghost" size="icon">
          <ShoppingCart className="h-6 w-6" />
          <span className="sr-only">Cart</span>
        </Button>
      </header>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search groceries..."
          className="w-full pl-10 pr-4 py-3 rounded-lg border-0 bg-muted focus-visible:ring-primary text-base"
        />
      </div>

      <div className="flex space-x-2 overflow-x-auto pb-2 -mx-4 px-4">
        {["Featured", "Deals", "Ready in 30 min", "Pickup"].map(chip => (
          <FilterChip 
            key={chip} 
            label={chip} 
            selected={activeFilter === chip} 
            onClick={() => setActiveFilter(chip)}
          />
        ))}
         <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="rounded-full h-8 text-sm bg-card text-foreground border-border hover:bg-muted ml-auto flex-shrink-0">
                    <Filter className="h-4 w-4 mr-1.5"/> All Filters
                </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>
                    Refine your grocery search.
                </SheetDescription>
                </SheetHeader>
                <div className="space-y-6 py-4">
                    <div>
                      <Label htmlFor="category-filter" className="font-semibold mb-1 block">Category</Label>
                      <Select defaultValue="All">
                        <SelectTrigger id="category-filter" className="w-full rounded-md">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {allCategories.map(category => (
                              <SelectItem key={category} value={category}>{category}</SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="vendor-filter" className="font-semibold mb-1 block">Store</Label>
                      <Select defaultValue="All">
                        <SelectTrigger id="vendor-filter" className="w-full rounded-md">
                          <SelectValue placeholder="Select store" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {allVendors.map(vendor => (
                              <SelectItem key={vendor} value={vendor}>{vendor}</SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="font-semibold mb-2 block">Price Range</Label>
                      <div className="flex gap-2">
                        <Input type="number" placeholder="Min" className="w-1/2 rounded-md" />
                        <Input type="number" placeholder="Max" className="w-1/2 rounded-md" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="in-stock" defaultChecked />
                        <Label htmlFor="in-stock" className="font-normal">Only show in-stock items</Label>
                      </div>
                    </div>
                </div>
                <SheetFooter className="gap-2 sm:flex-col">
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-md">Apply Filters</Button>
                    <SheetClose asChild>
                        <Button variant="outline" className="w-full rounded-md">
                        <X className="h-4 w-4 mr-2"/> Reset & Close
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
      </div>
      

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-3">Featured</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {mockGroceryCategories.map(category => (
            <Link href={`/groceries/category/${category.id}`} key={category.id} className="block group">
              <Card className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image src={category.imageUrl} alt={category.name} layout="fill" objectFit="cover" className="rounded-t-lg group-hover:scale-105 transition-transform" data-ai-hint={category.dataAiHint}/>
                </div>
                <CardContent className="p-3">
                  <p className="font-medium text-sm text-center text-foreground truncate">{category.name}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-3">Popular Stores</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {mockPopularStores.map(store => (
             <Link href={`/listing/${store.id}`} key={store.id} className="block group"> {/* Assuming store IDs match listing IDs */}
              <Card className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image src={store.imageUrl} alt={store.name} layout="fill" objectFit="cover" className="rounded-t-lg group-hover:scale-105 transition-transform" data-ai-hint={store.dataAiHint}/>
                </div>
                <CardContent className="p-3">
                  <p className="font-medium text-sm text-center text-foreground truncate">{store.name}</p>
                   <Badge variant="outline" className="text-xs block w-fit mx-auto mt-1">{store.type}</Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {activeFilter === "Deals" && ( /* Example: Conditionally show items if "Deals" is selected */
        <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Current Deals</h2>
            {mockGroceryItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {mockGroceryItems.map((item, index) => (
                    <GroceryItemCard key={item.id} item={item} />
                ))}
            </div>
            ) : (
            <Card className="shadow-md rounded-lg">
                <CardContent className="p-10 text-center text-muted-foreground">
                <p>No grocery items found matching your criteria. Try adjusting your filters!</p>
                </CardContent>
            </Card>
            )}
        </section>
      )}
    </div>
  );
}
