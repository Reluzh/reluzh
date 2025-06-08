
import type { Listing } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Heart, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ListingCardProps {
  listing: Listing;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl flex flex-col h-full border">
      <Link href={`/listing/${listing.id}`} className="block group">
        <div className="relative h-40 w-full">
          <Image
            src={listing.imageUrl}
            alt={listing.name}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300"
          />
           <Badge variant={listing.type === 'Restaurant' || listing.type === 'Cafe' || listing.type === 'Bakery' ? 'secondary' : 'outline'} className="absolute top-2 left-2 capitalize">
            {listing.type}
          </Badge>
        </div>
      </Link>
      <CardHeader className="pb-2 pt-4 px-4">
        <CardTitle className="font-bold text-lg leading-tight">
          <Link href={`/listing/${listing.id}`} className="hover:text-primary transition-colors">
            {listing.name}
          </Link>
        </CardTitle>
        <CardDescription className="flex items-center text-xs pt-0.5">
          <MapPin className="h-3 w-3 mr-1 text-muted-foreground" />
          {listing.address}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-1.5 px-4 pb-3 flex-grow">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center">
            <Star className="h-3.5 w-3.5 mr-0.5 text-yellow-500 fill-yellow-500" />
            {listing.rating.toFixed(1)} {listing.ratingCount ? `(${listing.ratingCount})` : ''}
          </div>
          {listing.priceTier && <span className="text-muted-foreground">{listing.priceTier}</span>}
        </div>
        {listing.offers.length > 0 && (
          <div className="text-xs">
            <p className="text-primary font-medium">
              {listing.offers.length} offer{listing.offers.length > 1 ? 's' : ''} available
            </p>
            {/* Example: showing price of first offer if exists */}
            {/* <p className="font-bold text-accent">${listing.offers[0].discountedPrice.toFixed(2)}</p> */}
          </div>
        )}
         <div className="flex items-center text-xs text-muted-foreground pt-1">
          <Clock className="h-3 w-3 mr-1" />
          Pickup: {listing.pickupTimes}
        </div>
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-0 flex justify-between items-center">
        <Link href={`/listing/${listing.id}`}>
          <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md w-full">View Details</Button>
        </Link>
        {/* Favorite button can be added back if state management is in place */}
        {/* <Button variant="ghost" size="icon" aria-label="Favorite" className="ml-2">
          <Heart className={`h-5 w-5 ${listing.isFavorite ? 'fill-accent text-accent' : 'text-muted-foreground'}`} />
        </Button> */}
      </CardFooter>
    </Card>
  );
};

export default ListingCard;
