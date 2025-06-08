
import { mockListings } from '@/lib/mock-data';
import type { Listing, OfferItem } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Star, Tag, Edit, MessageSquare, Info } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';

interface OfferDetailsPageProps {
  params: { id: string };
}

async function getListingDetails(id: string): Promise<Listing | undefined> {
  return mockListings.find(listing => listing.id === id);
}

const FeaturedItemCard: React.FC<{ item: OfferItem }> = ({ item }) => (
  <div className="flex items-center space-x-4 py-4">
    <div className="flex-grow">
      {item.itemCategory && <p className="text-xs font-medium text-primary uppercase tracking-wider">{item.itemCategory}</p>}
      <h4 className="font-semibold text-lg text-foreground">{item.name}</h4>
      {item.description && <p className="text-sm text-muted-foreground mt-1">{item.description}</p>}
      <p className="text-md font-bold text-accent mt-2">${item.discountedPrice.toFixed(2)}</p>
    </div>
    {item.imageUrl && (
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden shrink-0">
        <Image src={item.imageUrl} alt={item.name} layout="fill" objectFit="cover" data-ai-hint={item.dataAiHint || 'food item'} />
      </div>
    )}
  </div>
);

export default async function OfferDetailsPage({ params }: OfferDetailsPageProps) {
  const listing = await getListingDetails(params.id);

  if (!listing) {
    return (
        <div className="text-center py-10">
            <Alert variant="destructive">
                <Info className="h-4 w-4" />
                <AlertTitle>Not Found</AlertTitle>
                <AlertDescription>Listing not found. It might have been removed or the ID is incorrect.</AlertDescription>
            </Alert>
            <Button asChild variant="link" className="mt-4">
                <Link href="/">Go back to Home</Link>
            </Button>
        </div>
    );
  }

  const featuredItems = listing.offers.filter(o => o.itemCategory); // Assuming offers with itemCategory are "Featured"

  return (
    <div className="pb-4">
      <header className="py-3 flex items-center space-x-3 sticky top-0 bg-background z-10 -mx-4 px-4 border-b mb-2">
        <Link href="/" legacyBehavior>
          <a aria-label="Back to home" className="p-2 -ml-2 rounded-full hover:bg-muted">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </a>
        </Link>
        <h1 className="text-lg font-semibold text-foreground truncate">{listing.name}</h1>
      </header>

      <div className="relative h-56 sm:h-72 w-full rounded-xl overflow-hidden shadow-lg mb-4">
        <Image
          src={listing.imageUrl}
          alt={listing.name}
          layout="fill"
          objectFit="cover"
          priority
          data-ai-hint={listing.dataAiHint}
        />
      </div>

      <section className="mb-4 px-1">
        <h2 className="text-2xl font-bold text-foreground mb-1">{listing.name}</h2>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          <span>{listing.rating.toFixed(1)}</span>
          {listing.ratingCount && <span>({listing.ratingCount}+ ratings)</span>}
          {listing.priceTier && <span>· {listing.priceTier}</span>}
          {listing.prepTime && listing.type !== 'Grocery Store' && <span>· {listing.prepTime}</span>}
        </div>
      </section>

      <Tabs defaultValue="featured" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-muted rounded-lg">
          <TabsTrigger value="featured" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-md">Featured</TabsTrigger>
          <TabsTrigger value="menu" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-md">Menu</TabsTrigger>
          <TabsTrigger value="reviews" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-md">Reviews</TabsTrigger>
        </TabsList>
        
        <TabsContent value="featured" className="mt-4">
          <h3 className="text-xl font-semibold text-foreground mb-2">Featured Items</h3>
          {featuredItems.length > 0 ? (
            <div className="divide-y divide-border">
              {featuredItems.map(item => (
                <FeaturedItemCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>No Featured Items</AlertTitle>
              <AlertDescription>
                This vendor currently has no special featured items listed. Check the full menu or other offers.
              </AlertDescription>
            </Alert>
          )}
        </TabsContent>

        <TabsContent value="menu" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Full Menu</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">The full menu for {listing.name} will be displayed here.</p>
              {listing.offers.length > 0 ? (
                <div className="mt-4 space-y-3">
                  {listing.offers.map(offer => (
                    <div key={offer.id} className="p-3 border rounded-md bg-card">
                        <h4 className="font-medium">{offer.name}</h4>
                        {offer.description && <p className="text-xs text-muted-foreground">{offer.description}</p>}
                        <p className="text-sm font-semibold text-accent mt-1">${offer.discountedPrice.toFixed(2)} 
                        {offer.originalPrice !== offer.discountedPrice && <span className="text-xs line-through text-muted-foreground ml-2">${offer.originalPrice.toFixed(2)}</span>}
                        </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground mt-2">No current offers or menu items listed via ReboxIt.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Reviews</CardTitle>
              <Button variant="outline" size="sm"><Edit className="h-3.5 w-3.5 mr-1.5"/> Write Review</Button>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                    <div className="bg-muted rounded-full h-10 w-10 flex items-center justify-center text-muted-foreground text-sm shrink-0">U1</div>
                    <div>
                        <div className="flex items-center space-x-1">
                            <p className="font-semibold text-sm">Happy Customer</p>
                            <span className="text-xs text-muted-foreground">· 2 days ago</span>
                        </div>
                        <div className="flex items-center mt-0.5">
                            {[...Array(5)].map((_,i) => <Star key={i} className={`h-3.5 w-3.5 ${i < 4 ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground/50'}`}/>)}
                        </div>
                        <p className="text-sm text-foreground mt-1">Great food and amazing deal! Will definitely order again.</p>
                    </div>
                </div>
                <Separator/>
                <div className="flex items-start space-x-3">
                    <div className="bg-muted rounded-full h-10 w-10 flex items-center justify-center text-muted-foreground text-sm shrink-0">U2</div>
                    <div>
                        <div className="flex items-center space-x-1">
                            <p className="font-semibold text-sm">FoodieExplorer</p>
                            <span className="text-xs text-muted-foreground">· 1 week ago</span>
                        </div>
                        <div className="flex items-center mt-0.5">
                             {[...Array(5)].map((_,i) => <Star key={i} className={`h-3.5 w-3.5 ${i < 5 ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground/50'}`}/>)}
                        </div>
                        <p className="text-sm text-foreground mt-1">The surprise box was fantastic value for money. Highly recommend this place.</p>
                    </div>
                </div>
                 <Button variant="outline" className="w-full">Load More Reviews</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export async function generateStaticParams() {
  return mockListings.map(listing => ({
    id: listing.id,
  }));
}
