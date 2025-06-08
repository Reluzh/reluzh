
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function BrowsePage() {
  return (
    <div className="space-y-6">
      <header className="py-4">
        <h1 className="text-2xl font-bold text-foreground">Browse</h1>
      </header>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for anything..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border bg-card focus-visible:ring-primary"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Browse by categories will be implemented here.</p>
          {/* Placeholder for category listings */}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>All Items</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">A list of all items or further discovery features will be here.</p>
          {/* Placeholder for all items or other discovery features */}
        </CardContent>
      </Card>
    </div>
  );
}
