import GroceryItemCard from '@/components/grocery-item-card';
import { mockGroceryItems } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Filter, Search, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function GroceriesPage() {
  const categories = ['All', ...new Set(mockGroceryItems.map(item => item.category))];
  const vendors = ['All', ...new Set(mockGroceryItems.map(item => item.vendorName))];

  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <h1 className="text-4xl font-headline font-bold text-primary mb-2">Grocery Specials</h1>
        <p className="text-lg text-foreground/80">
          Find amazing deals on grocery items nearing their best-by dates. Help reduce waste!
        </p>
      </section>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <Card className="shadow-md rounded-lg p-6 sticky top-24">
            <h3 className="text-xl font-headline font-semibold text-primary mb-4 flex items-center">
              <Filter className="h-5 w-5 mr-2" /> Filters
            </h3>
            
            <div className="space-y-6">
              <div>
                <Label htmlFor="search-groceries" className="font-semibold mb-1 block">Search</Label>
                <div className="flex items-center border rounded-md px-2">
                  <Search className="text-muted-foreground h-4 w-4 mr-2" />
                  <Input id="search-groceries" type="text" placeholder="Search groceries..." className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 h-9 bg-transparent" />
                </div>
              </div>

              <div>
                <Label htmlFor="category-filter" className="font-semibold mb-1 block">Category</Label>
                <Select defaultValue="All">
                  <SelectTrigger id="category-filter" className="w-full rounded-md">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {categories.map(category => (
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
                      {vendors.map(vendor => (
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

              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-md">Apply</Button>
                <Button variant="outline" className="w-full rounded-md">
                  <X className="h-4 w-4 mr-2"/> Reset
                </Button>
              </div>
            </div>
          </Card>
        </aside>

        <main className="lg:col-span-3">
          {mockGroceryItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockGroceryItems.map((item) => (
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
        </main>
      </div>
    </div>
  );
}
