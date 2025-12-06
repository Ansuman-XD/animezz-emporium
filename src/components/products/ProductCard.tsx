import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/products';
import { useStore } from '@/contexts/StoreContext';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useStore();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast({
      title: "Added to cart! 🛒",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist(product);
      toast({
        title: "Added to wishlist! ❤️",
        description: `${product.name} has been added to your wishlist.`,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={`/product/${product.id}`}>
        <div className="anime-card group cursor-pointer">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Badges */}
            <div className="absolute left-3 top-3 flex flex-col gap-2">
              {product.isNew && <Badge variant="new">NEW</Badge>}
              {product.isSale && <Badge variant="sale">SALE</Badge>}
              {product.isHot && <Badge variant="hot">🔥 HOT</Badge>}
            </div>

            {/* Quick Actions */}
            <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Button
                variant="secondary"
                size="icon"
                onClick={handleWishlistToggle}
                className="h-9 w-9 rounded-full"
              >
                <Heart
                  className={`h-4 w-4 ${inWishlist ? 'fill-primary text-primary' : ''}`}
                />
              </Button>
            </div>

            {/* Add to Cart Overlay */}
            <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-background/90 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
              <Button
                variant="neon"
                className="w-full"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {product.category.replace('-', ' ')}
            </p>
            <h3 className="mt-1 font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            
            {/* Rating */}
            <div className="mt-2 flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviews})</span>
            </div>

            {/* Price */}
            <div className="mt-2 flex items-center gap-2">
              <span className="text-lg font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
