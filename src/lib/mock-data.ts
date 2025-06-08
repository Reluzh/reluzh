
import type { Listing, GroceryItem, UserProfile } from '@/types';

let imageCounter = 1; 

// Updated to return string | undefined
export function assignImagePath(originalPath?: string): string | undefined {
  // If an explicit /assets/ path is provided (e.g. for profile pic manually set), use it.
  if (originalPath && originalPath.startsWith('/assets/')) {
    return originalPath;
  }
  
  if (imageCounter <= 19) {
    const imageNumber = imageCounter++;
    return `/assets/im${imageNumber}.png`;
  }
  // Fallback to undefined if we've used up im1-im19.png
  return undefined; 
};


export const mockListings: Listing[] = [
  {
    id: '1',
    name: 'Green Leaf Cafe',
    type: 'Cafe',
    address: '12 Rue Al Moutanabbi, Gauthier, Casablanca',
    distance: '0.5 km',
    rating: 4.7,
    ratingCount: 215,
    priceTier: '$$',
    prepTime: '25-35 min',
    imageUrl: assignImagePath(), 
    pickupTimes: 'Mon-Fri, 6 PM - 8 PM',
    category: 'Cafe',
    isFavorite: true,
    offers: [
      { id: 'o1', name: 'Spaghetti Carbonara', itemCategory: 'Popular', originalPrice: 120, discountedPrice: 99, quantityLeft: 5, description: 'Pâtes crémeuses avec bacon et parmesan.', imageUrl: assignImagePath() },
      { id: 'o2', name: 'Pizza Margherita', itemCategory: 'New', originalPrice: 150, discountedPrice: 120, quantityLeft: 10, description: 'Pizza classique avec tomate, mozzarella et basilic.', imageUrl: assignImagePath() },
      { id: 'o2b', name: 'Tiramisu', itemCategory: "Chef's Choice", originalPrice: 70, discountedPrice: 55, quantityLeft: 7, description: 'Dessert au café avec crème mascarpone.', imageUrl: assignImagePath()},
      { id: 'o2c', name: 'Toast Avocat', itemCategory: 'Popular', originalPrice: 80, discountedPrice: 65, quantityLeft: 8, description: 'Pain au levain avec avocat frais et assaisonnement.', imageUrl: assignImagePath() },
    ],
  },
  {
    id: '2',
    name: 'Marché Central Grocers',
    type: 'Grocery Store',
    address: 'Marché Central, Boulevard Muhammad V, Casablanca',
    distance: '2 km',
    rating: 4.2,
    ratingCount: 180,
    priceTier: '$',
    prepTime: 'N/A',
    imageUrl: assignImagePath(),
    pickupTimes: 'Daily, 7 PM - 9 PM',
    category: 'Produce',
    isFavorite: false,
    offers: [
      { id: 'o3', name: 'Panier de Légumes Mixtes', originalPrice: 100, discountedPrice: 40, quantityLeft: 8, description: 'Légumes frais légèrement imparfaits.', imageUrl: assignImagePath() },
      { id: 'o4', name: 'Sac de Fruits Mûrs', originalPrice: 70, discountedPrice: 25, quantityLeft: 12, description: 'Parfait pour smoothies ou pâtisserie.', imageUrl: assignImagePath() },
    ],
  },
  {
    id: '3',
    name: 'Pizzeria Bella Napoli',
    type: 'Restaurant',
    address: '33 Rue Allal Ben Abdellah, Quartier Art Deco, Casablanca',
    distance: '1.3 km',
    rating: 4.8,
    ratingCount: 305,
    priceTier: '$$',
    prepTime: '20-30 min',
    imageUrl: assignImagePath(),
    pickupTimes: 'Tue-Sun, 8 PM - 9 PM',
    category: 'Italian',
    isFavorite: true,
    offers: [
      { id: 'o5', name: 'Parts de Pizza Fin de Journée', originalPrice: 30, discountedPrice: 10, quantityLeft: 15, description: 'Parts de pizza assorties.', imageUrl: assignImagePath() },
    ],
  },
  {
    id: '4',
    name: 'Boulangerie Amine',
    type: 'Bakery',
    address: '7 Angle Rue de Foucault et Rue Washington, Maârif, Casablanca',
    distance: '3.5 km',
    rating: 4.0,
    ratingCount: 95,
    priceTier: '$',
    prepTime: 'N/A',
    imageUrl: assignImagePath(),
    pickupTimes: 'Mon-Sat, 4 PM - 5 PM',
    category: 'Bakery',
    isFavorite: false,
    offers: [
      { id: 'o6', name: 'Pains Artisanaux', originalPrice: 50, discountedPrice: 25, quantityLeft: 7, description: 'Pain artisanal frais du matin.', imageUrl: assignImagePath() },
    ],
  },
];

export const mockGroceryCategories: {id: string; name: string; imageUrl: string | undefined}[] = [
  { id: 'cat1', name: 'Fruits & Légumes Frais', imageUrl: assignImagePath() },
  { id: 'cat2', name: 'Épicerie', imageUrl: assignImagePath() },
  { id: 'cat3', name: 'Produits Laitiers & Oeufs', imageUrl: assignImagePath() },
  { id: 'cat4', name: 'Snacks & Confiseries', imageUrl: assignImagePath() },
];

export const mockPopularStores: Pick<Listing, 'id' | 'name' | 'imageUrl' | 'type'>[] = [
  { id: 'store1', name: 'Aswak Assalam', type: 'Grocery Store', imageUrl: assignImagePath() }, 
  { id: 'store2', name: 'Carrefour Market Anfa', type: 'Grocery Store', imageUrl: assignImagePath() },
  { id: 'store3', name: 'La Vie Claire Triangle d\'Or', type: 'Grocery Store', imageUrl: assignImagePath() },
  { id: 'store4', name: 'BIM Sidi Moumen', type: 'Grocery Store', imageUrl: assignImagePath() },
];


export const mockGroceryItems: GroceryItem[] = [
  {
    id: 'g1',
    vendorId: '2',
    vendorName: 'Marché Central Grocers',
    name: 'Pommes Bio',
    originalPrice: 30,
    discountedPrice: 15,
    quantityLeft: 20,
    category: 'Fruits',
    imageUrl: assignImagePath(),
    expiryDate: 'Reste 3 jours',
    description: 'Un sac de pommes bio légèrement abîmées.'
  },
  {
    id: 'g2',
    vendorId: '2',
    vendorName: 'Marché Central Grocers',
    name: 'Pain Complet',
    originalPrice: 25,
    discountedPrice: 12,
    quantityLeft: 10,
    category: 'Bakery',
    imageUrl: assignImagePath(),
    expiryDate: 'À consommer de préférence avant demain',
    description: 'Pain complet frais, proche de la date d\'expiration.'
  },
  {
    id: 'g3',
    vendorId: 'v_hanout_al_hay',
    vendorName: 'Hanout Al Hay',
    name: 'Lait 1L', 
    originalPrice: 12,
    discountedPrice: 8,
    quantityLeft: 5,
    category: 'Dairy',
    imageUrl: assignImagePath(),
    expiryDate: 'Reste 2 jours',
    description: 'Brique de lait UHT 1 litre.'
  },
  {
    id: 'g4',
    vendorId: 'v_mazraa_al_baraka',
    vendorName: 'Mazraa Al Baraka',
    name: 'Botte d\'Épinards',
    originalPrice: 15,
    discountedPrice: 7,
    quantityLeft: 15,
    category: 'Vegetables',
    imageUrl: assignImagePath(), 
    expiryDate: 'À utiliser rapidement',
    description: 'Épinards frais, légèrement flétris.'
  }
];

export const mockUserProfile: UserProfile = {
  id: 'user123',
  name: 'Imane Nejmaoui',
  email: 'imane.nejmaoui@example.com',
  address: 'Appt 5, 20 Rue de la Paix, Maârif, Casablanca',
  profilePictureUrl: '/assets/im1.jpg', 
};

export const mockFavoriteVendors: Listing[] = mockListings.filter(listing => listing.isFavorite);
