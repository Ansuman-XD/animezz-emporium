import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,46,99,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,46,99,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container relative mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              New Collection Dropped!
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl leading-tight md:text-7xl lg:text-8xl"
          >
            <span className="text-foreground">YOUR </span>
            <span className="text-gradient-neon">ANIME</span>
            <br />
            <span className="text-foreground">PARADISE</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Discover exclusive anime merchandise from your favorite series. 
            Action figures, apparel, manga & more – all in one place.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/products">
              <Button variant="neon" size="xl" className="group">
                Shop Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/products?category=action-figures">
              <Button variant="outline" size="xl">
                View Figures
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16"
          >
            <div className="text-center">
              <p className="font-display text-3xl text-primary md:text-4xl">10K+</p>
              <p className="text-sm text-muted-foreground">Products</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl text-secondary md:text-4xl">50K+</p>
              <p className="text-sm text-muted-foreground">Happy Fans</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl text-accent md:text-4xl">100+</p>
              <p className="text-sm text-muted-foreground">Anime Series</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-10 top-1/3 hidden text-6xl lg:block"
      >
        ⚔️
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute right-10 top-1/2 hidden text-6xl lg:block"
      >
        🔮
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        className="absolute bottom-1/4 left-1/4 hidden text-5xl lg:block"
      >
        ⭐
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4.5, repeat: Infinity }}
        className="absolute bottom-1/3 right-1/4 hidden text-5xl lg:block"
      >
        🌸
      </motion.div>
    </section>
  );
}
