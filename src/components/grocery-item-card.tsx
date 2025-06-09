
import type { GroceryItem } from '@/types';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tag, ShoppingCart, CalendarDays, Store } from 'lucide-react';

interface GroceryItemCardProps {
  item: GroceryItem;
}

const GroceryItemCard: React.FC<GroceryItemCardProps> = ({ item }) => {
  const discountPercentage = item.originalPrice > 0 ? Math.round(((item.originalPrice - item.discountedPrice) / item.originalPrice) * 100) : 0;

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg flex flex-col">
      {item.imageUrl && (
        <div className="relative h-40 w-full">
          <Image
            src={item.imageUrl}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
      )}
      <CardHeader className="pb-2">
        <CardTitle className="font-headline text-lg">{item.name}</CardTitle>
        <CardDescription className="text-xs flex items-center">
          <Store className="h-3 w-3 mr-1 text-muted-foreground" /> {item.vendorName}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 flex-grow pb-2">
        <div className="flex justify-between items-baseline">
          <p className="text-2xl font-bold text-accent">{item.discountedPrice.toFixed(0)} MAD</p>
          <p className="text-sm text-muted-foreground line-through">{item.originalPrice.toFixed(0)} MAD</p>
        </div>
        {discountPercentage > 0 && 
            <Badge variant="destructive" className="text-xs">
            {discountPercentage}% DE RÉDUCTION
            </Badge>
        }
        <p className="text-sm text-muted-foreground flex items-center">
          <Tag className="h-4 w-4 mr-1" /> Catégorie: {item.category}
        </p>
        {item.expiryDate && (
          <p className="text-sm text-muted-foreground flex items-center">
            <CalendarDays className="h-4 w-4 mr-1" /> {item.expiryDate}
          </p>
        )}
         {item.description && <p className="text-xs text-muted-foreground pt-1">{item.description}</p>}
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-md">
          <ShoppingCart className="mr-2 h-4 w-4" /> Ajouter au Panier
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GroceryItemCard;
