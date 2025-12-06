import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SlidersHorizontal, Grid3X3, LayoutList, X } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products, categories } from '@/data/products';

type SortOption = 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [gridView, setGridView] = useState<'grid' | 'list'>('grid');

  const selectedCategory = searchParams.get('category');
  const showNew = searchParams.get('new') === 'true';

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (showNew) {
      filtered = filtered.filter((p) => p.isNew);
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered = filtered.filter((p) => p.isNew).concat(filtered.filter((p) => !p.isNew));
        break;
    }

    return filtered;
  }, [selectedCategory, showNew, sortBy]);

  const clearFilters = () => {
    setSearchParams({});
    setSortBy('featured');
  };

  const activeFiltersCount = (selectedCategory ? 1 : 0) + (showNew ? 1 : 0);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-4xl md:text-5xl">
            {selectedCategory
              ? categories.find((c) => c.id === selectedCategory)?.name || 'Products'
              : showNew
              ? 'New Arrivals'
              : 'All Products'}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {filteredProducts.length} products found
          </p>
        </div>

        {/* Filters Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {activeFiltersCount > 0 && (
                <Badge variant="neon" className="ml-1">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>

            {/* Active Filters */}
            {(selectedCategory || showNew) && (
              <div className="flex items-center gap-2">
                {selectedCategory && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    {categories.find((c) => c.id === selectedCategory)?.name}
                    <button
                      onClick={() => {
                        const newParams = new URLSearchParams(searchParams);
                        newParams.delete('category');
                        setSearchParams(newParams);
                      }}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {showNew && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    New Arrivals
                    <button
                      onClick={() => {
                        const newParams = new URLSearchParams(searchParams);
                        newParams.delete('new');
                        setSearchParams(newParams);
                      }}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                <button
                  onClick={clearFilters}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">Newest</option>
            </select>

            {/* View Toggle */}
            <div className="hidden items-center gap-1 rounded-lg border border-border p-1 md:flex">
              <button
                onClick={() => setGridView('grid')}
                className={`rounded-md p-2 ${gridView === 'grid' ? 'bg-muted' : ''}`}
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setGridView('list')}
                className={`rounded-md p-2 ${gridView === 'list' ? 'bg-muted' : ''}`}
              >
                <LayoutList className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Panel */}
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 rounded-xl border border-border bg-card p-6"
          >
            <h3 className="mb-4 font-semibold">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    const newParams = new URLSearchParams(searchParams);
                    if (selectedCategory === category.id) {
                      newParams.delete('category');
                    } else {
                      newParams.set('category', category.id);
                    }
                    setSearchParams(newParams);
                  }}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                    selectedCategory === category.id
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border hover:border-primary hover:text-primary'
                  }`}
                >
                  <span>{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Products Grid */}
        <div
          className={
            gridView === 'grid'
              ? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'flex flex-col gap-4'
          }
        >
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-xl text-muted-foreground">No products found</p>
            <Button variant="outline" onClick={clearFilters} className="mt-4">
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Products;
