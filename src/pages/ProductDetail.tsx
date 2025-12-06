import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star, Minus, Plus, ChevronLeft, Truck, Shield, RotateCcw } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/products/ProductCard';
import { products } from '@/data/products';
import { useStore } from '@/contexts/StoreContext';
import { toast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useStore();

  const product = products.find((p) => p.id === id);
  const inWishlist = product ? isInWishlist(product.id) : false;

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <Link to="/products">
            <Button variant="outline" className="mt-4">
              Back to Shop
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to cart! 🛒",
      description: `${quantity}x ${product.name} has been added to your cart.`,
    });
  };

  const handleWishlistToggle = () => {
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
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary">
            Shop
          </Link>
          <span>/</span>
          <Link to={`/products?category=${product.category}`} className="hover:text-primary">
            {product.category.replace('-', ' ')}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link to="/products" className="mb-6 inline-flex items-center gap-2 text-sm hover:text-primary">
          <ChevronLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        {/* Product Details */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-card"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            {/* Badges */}
            <div className="absolute left-4 top-4 flex flex-col gap-2">
              {product.isNew && <Badge variant="new">NEW</Badge>}
              {product.isSale && <Badge variant="sale">SALE</Badge>}
              {product.isHot && <Badge variant="hot">🔥 HOT</Badge>}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {product.category.replace('-', ' ')}
            </p>
            <h1 className="mt-2 font-display text-3xl md:text-4xl">{product.name}</h1>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-muted'
                    }`}
                  />
                ))}
              </div>
              <span className="font-medium">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-center gap-4">
              <span className="font-display text-4xl text-primary">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.originalPrice && (
                <Badge variant="sale">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </Badge>
              )}
            </div>

            {/* Description */}
            <p className="mt-6 text-muted-foreground">{product.description}</p>

            {/* Stock */}
            <p className="mt-4">
              <span className="text-muted-foreground">Availability: </span>
              {product.stock > 0 ? (
                <span className="text-green-500">In Stock ({product.stock} available)</span>
              ) : (
                <span className="text-destructive">Out of Stock</span>
              )}
            </p>

            {/* Quantity & Add to Cart */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 rounded-lg border border-border">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 hover:bg-muted"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                  className="p-3 hover:bg-muted"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <Button variant="neon" size="lg" onClick={handleAddToCart} className="flex-1">
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleWishlistToggle}
                className={inWishlist ? 'text-primary' : ''}
              >
                <Heart className={`h-5 w-5 ${inWishlist ? 'fill-primary' : ''}`} />
              </Button>
            </div>

            {/* Features */}
            <div className="mt-8 grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">Free Shipping</p>
                  <p className="text-xs text-muted-foreground">Orders over $50</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">Authentic</p>
                  <p className="text-xs text-muted-foreground">Licensed merch</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <RotateCcw className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">Easy Returns</p>
                  <p className="text-xs text-muted-foreground">30-day policy</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-6 font-display text-2xl">You Might Also Like</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
