export interface Vendor {
  id: string;
  name: string;
  type: 'Restaurant' | 'Grocery Store';
  address: string;
  distance: string; // e.g., "0.5 miles"
  rating: number; // 1-5
  imageUrl: string;
  dataAiHint?: string;
  isFavorite?: boolean;
}

export interface OfferItem {
  id: string;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  quantityLeft: number;
  description?: string;
  imageUrl?: string;
  dataAiHint?: string;
}

export interface Listing extends Vendor {
  offers: OfferItem[];
  pickupTimes: string; // e.g., "5 PM - 7 PM"
  category?: string; // e.g. "Bakery", "Produce", "Meals"
}

export interface GroceryItem extends OfferItem {
  vendorId: string;
  vendorName: string;
  category: 'Fruits' | 'Vegetables' | 'Bakery' | 'Dairy' | 'Pantry' | 'Frozen';
  expiryDate?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  address?: string;
  profilePictureUrl?: string;
  dataAiHint?: string;
}
