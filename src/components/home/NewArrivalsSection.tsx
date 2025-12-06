import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/products/ProductCard';
import { products } from '@/data/products';

export function NewArrivalsSection() {
  const newProducts = products.filter(p => p.isNew).slice(0, 4);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">
              NEW <span className="text-gradient-neon">ARRIVALS</span>
            </h2>
            <p className="mt-2 text-muted-foreground">
              Fresh drops you don't want to miss
            </p>
          </div>
          <Link to="/products?new=true">
            <Button variant="outline" className="hidden md:flex">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/products?new=true">
            <Button variant="outline">
              View New Arrivals
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
