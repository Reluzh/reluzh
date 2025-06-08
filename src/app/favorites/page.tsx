
"use client"; 

import { useState, useEffect } from 'react';
import VendorCard from '@/components/vendor-card';
import { mockFavoriteVendors as initialMockFavorites } from '@/lib/mock-data';
import type { Listing } from '@/types';
import { Button } from '@/components/ui/button';
import { HeartCrack, ShoppingBasket } from 'lucide-react';
import Link from 'next/link';

export default function FavoritesPage() {
  const [favoriteVendors, setFavoriteVendors] = useState<Listing[]>([]);

  useEffect(() => {
    setFavoriteVendors(initialMockFavorites);
  }, []);

  const handleRemoveFavorite = (vendorId: string) => {
    setFavoriteVendors(prevFavorites => prevFavorites.filter(vendor => vendor.id !== vendorId));
  };

  return (
    <div className="space-y-6">
      <header className="py-2">
          <h1 className="text-2xl font-bold text-foreground">Your Favorites</h1>
      </header>
      

      {favoriteVendors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          {favoriteVendors.map((vendor, index) => (
              <VendorCard vendor={vendor} onRemoveFavorite={handleRemoveFavorite} />
          ))}
        </div>
      ) : (
          <div className="text-center py-16 bg-card rounded-lg shadow-sm border">
            <HeartCrack className="h-20 w-20 text-muted-foreground mx-auto mb-5" />
            <h2 className="text-xl font-semibold text-primary mb-2">No Favorites Yet!</h2>
            <p className="text-muted-foreground mb-5 max-w-xs mx-auto">
              Start exploring and mark vendors as favorites to see them here.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md">
              <Link href="/">
                <ShoppingBasket className="mr-2 h-5 w-5" /> Discover Deals
              </Link>
            </Button>
          </div>
      )}
    </div>
  );
}
