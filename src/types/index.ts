
import type { Timestamp } from 'firebase/firestore';

export interface Vendor {
  id: string;
  name: string;
  type: 'Restaurant' | 'Grocery Store' | 'Bakery' | 'Cafe';
  address: string;
  distance: string; // e.g., "0.5 miles"
  rating: number; // 1-5
  imageUrl: string | undefined;
  isFavorite?: boolean;
}

export interface OfferItem {
  id: string;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  quantityLeft: number;
  description?: string;
  imageUrl?: string | undefined;
  itemCategory?: string; // e.g., "Popular", "New", "Chef's Choice" for restaurant items
}

export interface Listing extends Vendor {
  offers: OfferItem[];
  pickupTimes: string; // e.g., "5 PM - 7 PM"
  category?: string; // e.g. "Bakery", "Produce", "Meals"
  ratingCount?: number;
  priceTier?: string; // e.g., "$$"
  prepTime?: string; // e.g., "25-35 min"
}

export interface GroceryItem extends OfferItem {
  vendorId: string;
  vendorName: string;
  category: 'Fruits' | 'Vegetables' | 'Bakery' | 'Dairy' | 'Pantry' | 'Frozen' | 'Drinks' | 'Snacks';
  expiryDate?: string;
}

export interface UserProfile { // This was the mock user profile type
  id: string;
  name: string;
  email: string;
  address?: string;
  profilePictureUrl?: string | undefined; 
}

// New type for users stored in Firestore
export interface FirestoreUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL?: string | null;
  createdAt: Timestamp; // Using Firestore Timestamp
}
