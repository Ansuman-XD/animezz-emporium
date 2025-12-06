import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/products/ProductCard';
import { products } from '@/data/products';

export function TrendingSection() {
  const trendingProducts = products.filter(p => p.isHot || p.rating >= 4.8).slice(0, 4);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">
              <span className="text-gradient-neon">TRENDING</span> NOW
            </h2>
            <p className="mt-2 text-muted-foreground">
              Most popular items this week
            </p>
          </div>
          <Link to="/products">
            <Button variant="outline" className="hidden md:flex">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trendingProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/products">
            <Button variant="outline">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
