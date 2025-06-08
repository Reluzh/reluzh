import type { Listing } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Tag, Clock, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ListingCardProps {
  listing: Listing;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <Link href={`/listing/${listing.id}`} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={listing.imageUrl}
            alt={listing.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={listing.dataAiHint}
          />
        </div>
      </Link>
      <CardHeader>
        <CardTitle className="font-headline text-xl">
          <Link href={`/listing/${listing.id}`} className="hover:text-primary transition-colors">
            {listing.name}
          </Link>
        </CardTitle>
        <CardDescription className="flex items-center text-sm">
          <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
          {listing.address} - {listing.distance}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <Badge variant={listing.type === 'Restaurant' ? 'secondary' : 'outline'}>
            {listing.type}
          </Badge>
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1 text-yellow-500 fill-yellow-500" />
            {listing.rating.toFixed(1)}
          </div>
        </div>
        {listing.offers.slice(0, 1).map(offer => (
          <div key={offer.id} className="text-sm">
            <p className="font-semibold text-primary">{offer.name}</p>
            <p>
              <span className="line-through text-muted-foreground">${offer.originalPrice.toFixed(2)}</span>
              <span className="font-bold text-accent ml-2">${offer.discountedPrice.toFixed(2)}</span>
            </p>
          </div>
        ))}
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="h-4 w-4 mr-1" />
          Pickup: {listing.pickupTimes}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Link href={`/listing/${listing.id}`} passHref>
          <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">View Offers</Button>
        </Link>
        <Button variant="ghost" size="icon" aria-label="Favorite">
          <Heart className={`h-5 w-5 ${listing.isFavorite ? 'fill-accent text-accent' : 'text-muted-foreground'}`} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ListingCard;
