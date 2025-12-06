export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isSale?: boolean;
  isHot?: boolean;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export const categories = [
  { id: 'action-figures', name: 'Action Figures', icon: '🎭' },
  { id: 'posters', name: 'Posters', icon: '🖼️' },
  { id: 'apparel', name: 'Apparel', icon: '👕' },
  { id: 'manga', name: 'Manga', icon: '📚' },
  { id: 'keychains', name: 'Keychains', icon: '🔑' },
  { id: 'accessories', name: 'Accessories', icon: '✨' },
  { id: 'stickers', name: 'Stickers', icon: '🏷️' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Naruto Uzumaki Premium Figure',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=400&h=400&fit=crop',
    category: 'action-figures',
    description: 'High-quality 25cm Naruto Shippuden figure with detailed finishing',
    rating: 4.8,
    reviews: 234,
    isSale: true,
    stock: 15
  },
  {
    id: '2',
    name: 'One Piece Luffy Hoodie',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    category: 'apparel',
    description: 'Premium cotton hoodie featuring Luffy Gear 5 design',
    rating: 4.9,
    reviews: 456,
    isHot: true,
    stock: 50
  },
  {
    id: '3',
    name: 'Attack on Titan Survey Corps Jacket',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
    category: 'apparel',
    description: 'Authentic Survey Corps green jacket with embroidered wings',
    rating: 4.7,
    reviews: 189,
    isNew: true,
    stock: 25
  },
  {
    id: '4',
    name: 'Demon Slayer Tanjiro Figure',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=400&h=400&fit=crop',
    category: 'action-figures',
    description: '18cm Tanjiro Kamado figure with water breathing effect base',
    rating: 4.6,
    reviews: 312,
    stock: 30
  },
  {
    id: '5',
    name: 'My Hero Academia Poster Set',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=400&fit=crop',
    category: 'posters',
    description: 'Set of 5 high-quality A3 posters featuring Class 1-A heroes',
    rating: 4.5,
    reviews: 567,
    isNew: true,
    stock: 100
  },
  {
    id: '6',
    name: 'Jujutsu Kaisen Gojo Figure',
    price: 99.99,
    originalPrice: 149.99,
    image: 'https://images.unsplash.com/photo-1609372332255-611485350f25?w=400&h=400&fit=crop',
    category: 'action-figures',
    description: 'Premium Gojo Satoru figure with Infinite Void effect',
    rating: 5.0,
    reviews: 89,
    isSale: true,
    isHot: true,
    stock: 10
  },
  {
    id: '7',
    name: 'Chainsaw Man Pochita Plush',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    category: 'accessories',
    description: 'Super soft 30cm Pochita plush toy - perfect cuddle buddy',
    rating: 4.9,
    reviews: 678,
    isHot: true,
    stock: 45
  },
  {
    id: '8',
    name: 'Dragon Ball Z Manga Box Set',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=400&fit=crop',
    category: 'manga',
    description: 'Complete Dragon Ball Z manga collection - volumes 1-26',
    rating: 4.8,
    reviews: 234,
    stock: 20
  },
  {
    id: '9',
    name: 'Anime Character Keychain Set',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop',
    category: 'keychains',
    description: 'Set of 6 popular anime character acrylic keychains',
    rating: 4.4,
    reviews: 890,
    isNew: true,
    stock: 200
  },
  {
    id: '10',
    name: 'Anime Sticker Pack Premium',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=400&h=400&fit=crop',
    category: 'stickers',
    description: '50 waterproof vinyl stickers featuring popular anime series',
    rating: 4.6,
    reviews: 1234,
    stock: 500
  },
  {
    id: '11',
    name: 'Spy x Family Anya T-Shirt',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    category: 'apparel',
    description: 'Kawaii Anya Forger print on premium cotton t-shirt',
    rating: 4.7,
    reviews: 456,
    isNew: true,
    stock: 75
  },
  {
    id: '12',
    name: 'Tokyo Revengers Mikey Figure',
    price: 75.99,
    originalPrice: 95.99,
    image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?w=400&h=400&fit=crop',
    category: 'action-figures',
    description: 'Detailed 22cm Manjiro Sano figure with bike accessory',
    rating: 4.5,
    reviews: 123,
    isSale: true,
    stock: 18
  }
];
