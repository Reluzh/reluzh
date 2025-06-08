import type { Listing, GroceryItem, UserProfile } from '@/types';

export const mockListings: Listing[] = [
  {
    id: '1',
    name: 'Green Leaf Cafe',
    type: 'Restaurant',
    address: '123 Main St, Anytown, USA',
    distance: '0.3 miles',
    rating: 4.5,
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'modern cafe',
    pickupTimes: 'Mon-Fri, 6 PM - 8 PM',
    category: 'Cafe',
    isFavorite: true,
    offers: [
      { id: 'o1', name: 'Surplus Sandwich Box', originalPrice: 12.00, discountedPrice: 5.00, quantityLeft: 5, description: 'Assortment of daily fresh sandwiches.' },
      { id: 'o2', name: 'Day-Old Pastries', originalPrice: 8.00, discountedPrice: 3.00, quantityLeft: 10, description: 'Delicious pastries from yesterday.' },
    ],
  },
  {
    id: '2',
    name: 'Harvest Grocers',
    type: 'Grocery Store',
    address: '456 Oak Ave, Anytown, USA',
    distance: '1.2 miles',
    rating: 4.2,
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'grocery store',
    pickupTimes: 'Daily, 7 PM - 9 PM',
    category: 'Produce',
    isFavorite: false,
    offers: [
      { id: 'o3', name: 'Mixed Vegetable Box', originalPrice: 15.00, discountedPrice: 6.00, quantityLeft: 8, description: 'Slightly imperfect but fresh veggies.' },
      { id: 'o4', name: 'Overripe Fruit Bag', originalPrice: 10.00, discountedPrice: 4.00, quantityLeft: 12, description: 'Perfect for smoothies or baking.' },
    ],
  },
  {
    id: '3',
    name: 'Mama Mia Pizzeria',
    type: 'Restaurant',
    address: '789 Pine Rd, Anytown, USA',
    distance: '0.8 miles',
    rating: 4.8,
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'pizzeria interior',
    pickupTimes: 'Tue-Sun, 8 PM - 9 PM',
    category: 'Italian',
    isFavorite: true,
    offers: [
      { id: 'o5', name: 'End-of-Day Pizza Slices', originalPrice: 4.00, discountedPrice: 1.50, quantityLeft: 15, description: 'Assorted pizza slices.' },
    ],
  },
  {
    id: '4',
    name: 'City Bakery',
    type: 'Restaurant',
    address: '101 Baker St, Anytown, USA',
    distance: '2.1 miles',
    rating: 4.0,
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'bakery display',
    pickupTimes: 'Mon-Sat, 4 PM - 5 PM',
    category: 'Bakery',
    isFavorite: false,
    offers: [
      { id: 'o6', name: 'Artisan Bread Loaves', originalPrice: 7.00, discountedPrice: 3.50, quantityLeft: 7, description: 'Freshly baked artisan bread from the morning.' },
    ],
  },
];

export const mockGroceryItems: GroceryItem[] = [
  {
    id: 'g1',
    vendorId: '2',
    vendorName: 'Harvest Grocers',
    name: 'Organic Apples',
    originalPrice: 3.99,
    discountedPrice: 1.99,
    quantityLeft: 20,
    category: 'Fruits',
    imageUrl: 'https://placehold.co/300x200.png',
    dataAiHint: 'apples fruit',
    expiryDate: '3 days left',
    description: 'A bag of slightly bruised organic apples.'
  },
  {
    id: 'g2',
    vendorId: '2',
    vendorName: 'Harvest Grocers',
    name: 'Whole Wheat Bread',
    originalPrice: 4.50,
    discountedPrice: 2.00,
    quantityLeft: 10,
    category: 'Bakery',
    imageUrl: 'https://placehold.co/300x200.png',
    dataAiHint: 'bread loaf',
    expiryDate: 'Best by tomorrow',
    description: 'Fresh whole wheat bread, near expiry.'
  },
  {
    id: 'g3',
    vendorId: 'v_corner_mart',
    vendorName: 'Corner Mart',
    name: 'Milk Gallon',
    originalPrice: 3.50,
    discountedPrice: 1.75,
    quantityLeft: 5,
    category: 'Dairy',
    imageUrl: 'https://placehold.co/300x200.png',
    dataAiHint: 'milk carton',
    expiryDate: '2 days left',
    description: 'Gallon of 2% milk.'
  },
  {
    id: 'g4',
    vendorId: 'v_fresh_farms',
    vendorName: 'Fresh Farms',
    name: 'Spinach Bunch',
    originalPrice: 2.99,
    discountedPrice: 1.00,
    quantityLeft: 15,
    category: 'Vegetables',
    imageUrl: 'https://placehold.co/300x200.png',
    dataAiHint: 'spinach leaves',
    expiryDate: 'Use soon',
    description: 'Fresh spinach, slightly wilted.'
  }
];

export const mockUserProfile: UserProfile = {
  id: 'user123',
  name: 'Alex Green',
  email: 'alex.green@example.com',
  address: '100 Eco Lane, Anytown, USA',
  profilePictureUrl: 'https://placehold.co/100x100.png',
  dataAiHint: 'profile person'
};

export const mockFavoriteVendors: Listing[] = mockListings.filter(listing => listing.isFavorite);
