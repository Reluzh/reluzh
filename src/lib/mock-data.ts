
import type { Listing, GroceryItem, UserProfile } from '@/types';

export const mockListings: Listing[] = [
  {
    id: '1',
    name: 'Green Leaf Cafe',
    type: 'Cafe',
    address: '123 Main St, Anytown, USA',
    distance: '0.3 miles',
    rating: 4.7,
    ratingCount: 215,
    priceTier: '$$',
    prepTime: '25-35 min',
    imageUrl: '/assests/modern-cafe-interior.png',
    pickupTimes: 'Mon-Fri, 6 PM - 8 PM',
    category: 'Cafe',
    isFavorite: true,
    offers: [
      { id: 'o1', name: 'Spaghetti Carbonara', itemCategory: 'Popular', originalPrice: 15.00, discountedPrice: 12.99, quantityLeft: 5, description: 'Creamy pasta with bacon and parmesan.', imageUrl: '/assests/spaghetti-carbonara.png' },
      { id: 'o2', name: 'Margherita Pizza', itemCategory: 'New', originalPrice: 18.00, discountedPrice: 14.99, quantityLeft: 10, description: 'Classic pizza with tomato, mozzarella, and basil.', imageUrl: '/assests/margherita-pizza.png' },
      { id: 'o2b', name: 'Tiramisu', itemCategory: "Chef's Choice", originalPrice: 9.00, discountedPrice: 7.99, quantityLeft: 7, description: 'Coffee-flavored dessert with mascarpone cream.', imageUrl: '/assests/tiramisu-dessert.png'},
      { id: 'o2c', name: 'Avocado Toast', itemCategory: 'Popular', originalPrice: 10.00, discountedPrice: 8.50, quantityLeft: 8, description: 'Sourdough toast with fresh avocado and seasoning.', imageUrl: '/assests/avocado-toast.png' },
    ],
  },
  {
    id: '2',
    name: 'Harvest Grocers',
    type: 'Grocery Store',
    address: '456 Oak Ave, Anytown, USA',
    distance: '1.2 miles',
    rating: 4.2,
    ratingCount: 180,
    priceTier: '$',
    prepTime: 'N/A',
    imageUrl: '/assests/grocery-store-aisle.png',
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
    ratingCount: 305,
    priceTier: '$$',
    prepTime: '20-30 min',
    imageUrl: '/assests/pizzeria-oven.png',
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
    type: 'Bakery',
    address: '101 Baker St, Anytown, USA',
    distance: '2.1 miles',
    rating: 4.0,
    ratingCount: 95,
    priceTier: '$',
    prepTime: 'N/A',
    imageUrl: '/assests/bakery-display-case.png',
    pickupTimes: 'Mon-Sat, 4 PM - 5 PM',
    category: 'Bakery',
    isFavorite: false,
    offers: [
      { id: 'o6', name: 'Artisan Bread Loaves', originalPrice: 7.00, discountedPrice: 3.50, quantityLeft: 7, description: 'Freshly baked artisan bread from the morning.' },
    ],
  },
];

export const mockGroceryCategories = [
  { id: 'cat1', name: 'Fresh Produce', imageUrl: '/assests/fresh-produce.png' },
  { id: 'cat2', name: 'Pantry Staples', imageUrl: '/assests/pantry-staples.png' },
  { id: 'cat3', name: 'Dairy & Eggs', imageUrl: '/assests/dairy-eggs.png' },
  { id: 'cat4', name: 'Snacks', imageUrl: '/assests/snacks-category.png' },
];

export const mockPopularStores: Pick<Listing, 'id' | 'name' | 'imageUrl' | 'type'>[] = [
  { id: 'store1', name: 'Fresh Foods Market', type: 'Grocery Store', imageUrl: '/assests/popular-store-modern-grocery.png' },
  { id: 'store2', name: 'Quick Stop Groceries', type: 'Grocery Store', imageUrl: '/assests/popular-store-convenience.png' },
  { id: 'store3', name: 'Organic Oasis', type: 'Grocery Store', imageUrl: '/assests/popular-store-organic.png' },
  { id: 'store4', name: 'Daily Essentials', type: 'Grocery Store', imageUrl: '/assests/popular-store-supermarket.png' },
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
    imageUrl: '/assests/grocery-item-apples.png',
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
    imageUrl: '/assests/grocery-item-bread.png',
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
    imageUrl: '/assests/grocery-item-milk.png',
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
    imageUrl: '/assests/grocery-item-spinach.png',
    expiryDate: 'Use soon',
    description: 'Fresh spinach, slightly wilted.'
  }
];

export const mockUserProfile: UserProfile = {
  id: 'user123',
  name: 'Imane Nejmaoui',
  email: 'imane.nejmaoui@example.com',
  address: '100 Eco Lane, Green City, GC 54321',
  profilePictureUrl: '/assests/profile-imane-smiling.png',
};

export const mockFavoriteVendors: Listing[] = mockListings.filter(listing => listing.isFavorite);

