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
                <div className="anime-card flex flex-col items-center p-6 text-center">
                  <span className="text-4xl">{category.icon}</span>
                  <span className="mt-3 text-sm font-medium">{category.name}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
