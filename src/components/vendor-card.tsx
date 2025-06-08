
import type { Listing } from '@/types'; // Using Listing as it contains vendor info and offers
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Heart, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface VendorCardProps {
  vendor: Listing; // Using Listing as it has all necessary vendor fields
  onRemoveFavorite?: (vendorId: string) => void;
}

const VendorCard: React.FC<VendorCardProps> = ({ vendor, onRemoveFavorite }) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <Link href={`/listing/${vendor.id}`} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={vendor.imageUrl}
            alt={vendor.name}
            layout="fill"
            objectFit="cover"
          />
           <Badge variant={vendor.type === 'Restaurant' ? 'secondary' : 'outline'} className="absolute top-2 left-2">
            {vendor.type}
          </Badge>
        </div>
      </Link>
      <CardHeader>
        <CardTitle className="font-headline text-xl">
          <Link href={`/listing/${vendor.id}`} className="hover:text-primary transition-colors">
            {vendor.name}
          </Link>
        </CardTitle>
        <CardDescription className="flex items-center text-sm">
          <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
          {vendor.address}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <p className="text-muted-foreground">{vendor.offers.length} active offer(s)</p>
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1 text-yellow-500 fill-yellow-500" />
            {vendor.rating.toFixed(1)}
          </div>
        </div>
        <p className="text-xs text-muted-foreground">Last pickup available: {vendor.pickupTimes}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Link href={`/listing/${vendor.id}`} passHref>
          <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md">
             <Eye className="mr-2 h-4 w-4" /> View
          </Button>
        </Link>
        {onRemoveFavorite && (
          <Button variant="outline" size="icon" onClick={() => onRemoveFavorite(vendor.id)} aria-label="Remove from favorites" className="text-destructive border-destructive hover:bg-destructive/10 rounded-md">
            <Heart className="h-5 w-5 fill-destructive" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default VendorCard;
