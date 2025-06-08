"use client"; // For potential client-side state management of favorites

import { useState, useEffect } from 'react';
import VendorCard from '@/components/vendor-card';
import { mockFavoriteVendors as initialMockFavorites } from '@/lib/mock-data';
import type { Listing } from '@/types';
import { Button } from '@/components/ui/button';
import { HeartCrack, ShoppingBasket } from 'lucide-react';
import Link from 'next/link';
import ScrollAnimatedDiv from '@/components/scroll-animated-div';

export default function FavoritesPage() {
  const [favoriteVendors, setFavoriteVendors] = useState<Listing[]>([]);

  useEffect(() => {
    // In a real app, fetch from user's data or local storage
    setFavoriteVendors(initialMockFavorites);
  }, []);

  const handleRemoveFavorite = (vendorId: string) => {
    setFavoriteVendors(prevFavorites => prevFavorites.filter(vendor => vendor.id !== vendorId));
    // Here you would also update backend/local storage
  };

  return (
    <div className="space-y-8">
      <ScrollAnimatedDiv>
        <section className="text-center py-8">
          <h1 className="text-4xl font-headline font-bold text-primary mb-2">Your Favorite Spots</h1>
          <p className="text-lg text-foreground/80">
            Quick access to deals from the vendors you love.
          </p>
        </section>
      </ScrollAnimatedDiv>

      {favoriteVendors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteVendors.map((vendor, index) => (
            <ScrollAnimatedDiv key={vendor.id} delayMs={100 + index * 100}>
              <VendorCard vendor={vendor} onRemoveFavorite={handleRemoveFavorite} />
            </ScrollAnimatedDiv>
          ))}
        </div>
      ) : (
        <ScrollAnimatedDiv delayMs={100}>
          <div className="text-center py-16 bg-card rounded-lg shadow-md">
            <HeartCrack className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h2 className="text-2xl font-headline font-semibold text-primary mb-3">No Favorites Yet!</h2>
            <p className="text-muted-foreground mb-6">
              Start exploring and mark vendors as favorites to see them here.
            </p>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-md">
              <Link href="/">
                <ShoppingBasket className="mr-2 h-5 w-5" /> Discover Deals
              </Link>
            </Button>
          </div>
        </ScrollAnimatedDiv>
      )}
    </div>
  );
}
