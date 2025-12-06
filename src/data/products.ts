import narutoFigure from '@/assets/products/naruto-figure.jpg';
import animeHoodie from '@/assets/products/anime-hoodie.jpg';
import aotJacket from '@/assets/products/aot-jacket.jpg';
import tanjiroFigure from '@/assets/products/tanjiro-figure.jpg';
import animePoster from '@/assets/products/anime-poster.jpg';
import gojoFigure from '@/assets/products/gojo-figure.jpg';
import pochitaPlush from '@/assets/products/pochita-plush.jpg';
import mangaCollection from '@/assets/products/manga-collection.jpg';
import animeKeychains from '@/assets/products/anime-keychains.jpg';
import animeStickers from '@/assets/products/anime-stickers.jpg';
import animeTshirt from '@/assets/products/anime-tshirt.jpg';
import luffyFigure from '@/assets/products/luffy-figure.jpg';
import zoroFigure from '@/assets/products/zoro-figure.jpg';
import gonFigure from '@/assets/products/gon-figure.jpg';
import killuaFigure from '@/assets/products/killua-figure.jpg';
import lightFigure from '@/assets/products/light-figure.jpg';
import lFigure from '@/assets/products/l-figure.jpg';
import erenFigure from '@/assets/products/eren-figure.jpg';
import leviFigure from '@/assets/products/levi-figure.jpg';
import nezukoFigure from '@/assets/products/nezuko-figure.jpg';
import sukunaFigure from '@/assets/products/sukuna-figure.jpg';
import itachiFigure from '@/assets/products/itachi-figure.jpg';

// Category images
import actionFiguresImg from '@/assets/categories/action-figures.jpg';
import postersImg from '@/assets/categories/posters.jpg';
import apparelImg from '@/assets/categories/apparel.jpg';
import mangaImg from '@/assets/categories/manga.jpg';
import keychainsImg from '@/assets/categories/keychains.jpg';
import accessoriesImg from '@/assets/categories/accessories.jpg';
import stickersImg from '@/assets/categories/stickers.jpg';

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

export interface Category {
  id: string;
  name: string;
  icon: string;
  image: string;
}

export const categories: Category[] = [
  { id: 'action-figures', name: 'Action Figures', icon: '🎭', image: actionFiguresImg },
  { id: 'posters', name: 'Posters', icon: '🖼️', image: postersImg },
  { id: 'apparel', name: 'Apparel', icon: '👕', image: apparelImg },
  { id: 'manga', name: 'Manga', icon: '📚', image: mangaImg },
  { id: 'keychains', name: 'Keychains', icon: '🔑', image: keychainsImg },
  { id: 'accessories', name: 'Accessories', icon: '✨', image: accessoriesImg },
  { id: 'stickers', name: 'Stickers', icon: '🏷️', image: stickersImg },
];

export const products: Product[] = [
  // Jujutsu Kaisen
  {
    id: '1',
    name: 'Gojo Satoru Premium Figure',
    price: 7499,
    originalPrice: 9999,
    image: gojoFigure,
    category: 'action-figures',
    description: 'Premium 25cm Gojo Satoru figure with Infinite Void effect base',
    rating: 5.0,
    reviews: 342,
    isSale: true,
    isHot: true,
    stock: 10
  },
  {
    id: '2',
    name: 'Sukuna King of Curses Figure',
    price: 8499,
    image: sukunaFigure,
    category: 'action-figures',
    description: 'Detailed 28cm Sukuna figure with domain expansion effect',
    rating: 4.9,
    reviews: 189,
    isNew: true,
    stock: 15
  },
  // Demon Slayer
  {
    id: '3',
    name: 'Tanjiro Kamado Water Breathing Figure',
    price: 5999,
    image: tanjiroFigure,
    category: 'action-figures',
    description: '22cm Tanjiro figure with water breathing effect base',
    rating: 4.8,
    reviews: 456,
    isHot: true,
    stock: 25
  },
  {
    id: '4',
    name: 'Nezuko Kamado Premium Figure',
    price: 5499,
    originalPrice: 6999,
    image: nezukoFigure,
    category: 'action-figures',
    description: '20cm Nezuko figure in demon form with bamboo accessory',
    rating: 4.9,
    reviews: 523,
    isSale: true,
    stock: 20
  },
  // One Piece
  {
    id: '5',
    name: 'Monkey D. Luffy Gear 5 Figure',
    price: 8999,
    image: luffyFigure,
    category: 'action-figures',
    description: '30cm Luffy Gear 5 Nika form with special effects',
    rating: 5.0,
    reviews: 678,
    isNew: true,
    isHot: true,
    stock: 12
  },
  {
    id: '6',
    name: 'Roronoa Zoro Three Sword Style Figure',
    price: 7999,
    image: zoroFigure,
    category: 'action-figures',
    description: '28cm Zoro figure with all three swords and Enma effect',
    rating: 4.9,
    reviews: 445,
    isHot: true,
    stock: 18
  },
  // Hunter x Hunter
  {
    id: '7',
    name: 'Gon Freecss Nen Awakening Figure',
    price: 6499,
    image: gonFigure,
    category: 'action-figures',
    description: '25cm Gon figure with Jajanken attack effect',
    rating: 4.7,
    reviews: 234,
    stock: 30
  },
  {
    id: '8',
    name: 'Killua Zoldyck Lightning Figure',
    price: 6999,
    originalPrice: 8499,
    image: killuaFigure,
    category: 'action-figures',
    description: '24cm Killua figure with Godspeed lightning effects',
    rating: 4.8,
    reviews: 312,
    isSale: true,
    stock: 22
  },
  // Death Note
  {
    id: '9',
    name: 'Light Yagami with Death Note Figure',
    price: 4999,
    image: lightFigure,
    category: 'action-figures',
    description: '22cm Light Yagami figure with Death Note replica accessory',
    rating: 4.6,
    reviews: 198,
    stock: 35
  },
  {
    id: '10',
    name: 'L Lawliet Detective Figure',
    price: 5499,
    image: lFigure,
    category: 'action-figures',
    description: '20cm L figure in iconic sitting pose with cake accessory',
    rating: 4.8,
    reviews: 267,
    isNew: true,
    stock: 28
  },
  // Attack on Titan
  {
    id: '11',
    name: 'Eren Yeager Founding Titan Figure',
    price: 9999,
    image: erenFigure,
    category: 'action-figures',
    description: '35cm Eren with ODM gear and Attack Titan transformation',
    rating: 4.9,
    reviews: 389,
    isHot: true,
    stock: 8
  },
  {
    id: '12',
    name: 'Levi Ackerman Captain Figure',
    price: 7499,
    originalPrice: 8999,
    image: leviFigure,
    category: 'action-figures',
    description: '26cm Levi figure with Survey Corps cape and dual blades',
    rating: 5.0,
    reviews: 567,
    isSale: true,
    isHot: true,
    stock: 14
  },
  // Naruto
  {
    id: '13',
    name: 'Naruto Uzumaki Sage Mode Figure',
    price: 6999,
    originalPrice: 8999,
    image: narutoFigure,
    category: 'action-figures',
    description: '25cm Naruto Shippuden figure with Rasengan effect',
    rating: 4.8,
    reviews: 423,
    isSale: true,
    stock: 20
  },
  {
    id: '14',
    name: 'Itachi Uchiha Akatsuki Figure',
    price: 7999,
    image: itachiFigure,
    category: 'action-figures',
    description: '27cm Itachi figure with Susanoo effect base',
    rating: 4.9,
    reviews: 345,
    isNew: true,
    stock: 16
  },
  // Apparel
  {
    id: '15',
    name: 'Anime Neon Streetwear Hoodie',
    price: 2999,
    image: animeHoodie,
    category: 'apparel',
    description: 'Premium cotton hoodie with neon anime character print',
    rating: 4.7,
    reviews: 456,
    isHot: true,
    stock: 50
  },
  {
    id: '16',
    name: 'Attack on Titan Survey Corps Jacket',
    price: 4999,
    image: aotJacket,
    category: 'apparel',
    description: 'Authentic Survey Corps green jacket with embroidered wings',
    rating: 4.8,
    reviews: 234,
    stock: 25
  },
  {
    id: '17',
    name: 'Anime Character Print T-Shirt',
    price: 1499,
    originalPrice: 1999,
    image: animeTshirt,
    category: 'apparel',
    description: 'Premium cotton t-shirt with vibrant anime character print',
    rating: 4.6,
    reviews: 567,
    isSale: true,
    stock: 75
  },
  // Posters
  {
    id: '18',
    name: 'Neon Anime Poster Set',
    price: 1299,
    image: animePoster,
    category: 'posters',
    description: 'Set of 5 high-quality A3 posters with neon cyberpunk anime art',
    rating: 4.5,
    reviews: 678,
    isNew: true,
    stock: 100
  },
  // Manga
  {
    id: '19',
    name: 'Manga Collection Box Set',
    price: 8999,
    originalPrice: 11999,
    image: mangaCollection,
    category: 'manga',
    description: 'Complete manga collection box set - 26 volumes',
    rating: 4.9,
    reviews: 234,
    isSale: true,
    stock: 20
  },
  // Keychains
  {
    id: '20',
    name: 'Anime Character Keychain Set',
    price: 899,
    image: animeKeychains,
    category: 'keychains',
    description: 'Set of 8 cute chibi anime character acrylic keychains',
    rating: 4.4,
    reviews: 890,
    isNew: true,
    stock: 200
  },
  // Accessories
  {
    id: '21',
    name: 'Pochita Chainsaw Man Plush',
    price: 1999,
    image: pochitaPlush,
    category: 'accessories',
    description: 'Super soft 30cm Pochita plush toy - perfect cuddle buddy',
    rating: 4.9,
    reviews: 789,
    isHot: true,
    stock: 45
  },
  // Stickers
  {
    id: '22',
    name: 'Anime Sticker Pack Premium',
    price: 599,
    image: animeStickers,
    category: 'stickers',
    description: '50 waterproof vinyl stickers featuring popular anime characters',
    rating: 4.6,
    reviews: 1234,
    stock: 500
  },
];

// Currency formatter for INR
export const formatPrice = (price: number): string => {
  return `₹${price.toLocaleString('en-IN')}`;
};
