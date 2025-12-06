import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useStore } from '@/contexts/StoreContext';
import { toast } from '@/hooks/use-toast';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useStore();

  const handleAddToCart = (product: typeof wishlist[0]) => {
    addToCart(product);
    toast({
      title: "Added to cart! 🛒",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleRemove = (productId: string, productName: string) => {
    removeFromWishlist(productId);
    toast({
      title: "Removed from wishlist",
      description: `${productName} has been removed from your wishlist.`,
    });
  };

  if (wishlist.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto max-w-md"
          >
            <div className="mb-6 text-8xl">💖</div>
            <h1 className="font-display text-3xl">Your Wishlist is Empty</h1>
            <p className="mt-4 text-muted-foreground">
              Save your favorite items here for later. Start exploring and add some anime merch!
            </p>
            <Link to="/products">
              <Button variant="neon" size="lg" className="mt-8">
                <Heart className="h-5 w-5" />
                Explore Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-4xl">
          My <span className="text-gradient-neon">Wishlist</span>
        </h1>
        <p className="mt-2 text-muted-foreground">{wishlist.length} items saved</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishlist.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="anime-card"
            >
              <Link to={`/product/${item.id}`}>
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </Link>
              <div className="p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {item.category.replace('-', ' ')}
                </p>
                <Link to={`/product/${item.id}`}>
                  <h3 className="mt-1 font-semibold hover:text-primary line-clamp-2">
                    {item.name}
                  </h3>
                </Link>
                <p className="mt-2 text-lg font-bold text-primary">
                  ${item.price.toFixed(2)}
                </p>
                <div className="mt-4 flex gap-2">
                  <Button
                    variant="neon"
                    className="flex-1"
                    onClick={() => handleAddToCart(item)}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleRemove(item.id, item.name)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Wishlist;
