import { mockListings } from '@/lib/mock-data';
import type { Listing, OfferItem } from '@/types';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Clock, ShoppingCart, Heart, CheckCircle, Info } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface OfferDetailsPageProps {
  params: { id: string };
}

// Helper function to simulate fetching data
async function getListingDetails(id: string): Promise<Listing | undefined> {
  return mockListings.find(listing => listing.id === id);
}

const OfferItemCard: React.FC<{ item: OfferItem }> = ({ item }) => (
  <Card className="shadow-sm hover:shadow-md transition-shadow rounded-lg">
    {item.imageUrl && (
      <div className="relative h-40 w-full rounded-t-lg overflow-hidden">
        <Image src={item.imageUrl} alt={item.name} layout="fill" objectFit="cover" data-ai-hint={item.dataAiHint || 'food item'} />
      </div>
    )}
    <CardHeader>
      <CardTitle className="text-lg font-headline">{item.name}</CardTitle>
      {item.description && <CardDescription>{item.description}</CardDescription>}
    </CardHeader>
    <CardContent className="space-y-2">
      <p className="text-xl">
        <span className="text-muted-foreground line-through mr-2">${item.originalPrice.toFixed(2)}</span>
        <span className="font-bold text-accent">${item.discountedPrice.toFixed(2)}</span>
      </p>
      <p className="text-sm text-primary">
        <TagIcon className="inline h-4 w-4 mr-1" /> 
        {Math.round(((item.originalPrice - item.discountedPrice) / item.originalPrice) * 100)}% off
      </p>
      <p className="text-sm text-muted-foreground">
        <CheckCircle className="inline h-4 w-4 mr-1 text-green-500" /> 
        {item.quantityLeft} left in stock
      </p>
    </CardContent>
    <CardFooter>
      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-md">
        <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
      </Button>
    </CardFooter>
  </Card>
);

// Simple Tag icon if lucide-react Tag is not what's intended
const TagIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
    <line x1="7" y1="7" x2="7.01" y2="7"></line>
  </svg>
);


export default async function OfferDetailsPage({ params }: OfferDetailsPageProps) {
  const listing = await getListingDetails(params.id);

  if (!listing) {
    return <div className="text-center py-10">Listing not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="overflow-hidden shadow-xl rounded-lg">
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src={listing.imageUrl}
            alt={listing.name}
            layout="fill"
            objectFit="cover"
            priority
            data-ai-hint={listing.dataAiHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h1 className="text-4xl font-headline font-bold">{listing.name}</h1>
            <Badge variant={listing.type === 'Restaurant' ? 'default' : 'secondary'} className="mt-2 text-sm">{listing.type}</Badge>
          </div>
           <Button variant="outline" size="icon" aria-label="Favorite" className="absolute top-4 right-4 bg-card/80 hover:bg-card text-primary border-primary">
             <Heart className={`h-6 w-6 ${listing.isFavorite ? 'fill-accent text-accent' : ''}`} />
           </Button>
        </div>
        
        <CardContent className="p-6 space-y-6">
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 mt-0.5 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-muted-foreground">{listing.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Star className="h-5 w-5 mt-0.5 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold">Rating</h3>
                <p className="text-muted-foreground">{listing.rating.toFixed(1)} / 5.0</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="h-5 w-5 mt-0.5 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold">Pickup Times</h3>
                <p className="text-muted-foreground">{listing.pickupTimes}</p>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h2 className="text-2xl font-headline font-semibold text-primary mb-4">Available Offers</h2>
            {listing.offers.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {listing.offers.map(offer => (
                  <OfferItemCard key={offer.id} item={offer} />
                ))}
              </div>
            ) : (
               <Alert>
                 <Info className="h-4 w-4" />
                 <AlertTitle>No Current Offers</AlertTitle>
                 <AlertDescription>
                   This vendor currently has no surplus items listed. Check back later!
                 </AlertDescription>
               </Alert>
            )}
          </div>
          
          <Separator />

          <div>
            <h2 className="text-2xl font-headline font-semibold text-primary mb-4">About {listing.name}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {listing.name} is a beloved {listing.type.toLowerCase()} in Anytown, known for its commitment to quality and community. 
              By participating in ResQBox, they are helping reduce food waste and offering great deals to savvy customers like you. 
              Support local businesses and sustainability by grabbing a ResQBox today!
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return mockListings.map(listing => ({
    id: listing.id,
  }));
}
