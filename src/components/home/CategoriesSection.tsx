import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '@/data/products';

export function CategoriesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl">
            SHOP BY <span className="text-gradient-neon">CATEGORY</span>
          </h2>
          <p className="mt-2 text-muted-foreground">
            Find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/products?category=${category.id}`}>
                <div className="anime-card group cursor-pointer overflow-hidden">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-3 text-center">
                      <span className="text-2xl">{category.icon}</span>
                      <p className="mt-1 text-sm font-medium text-foreground">{category.name}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
