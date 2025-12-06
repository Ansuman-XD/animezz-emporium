import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import { categories } from '@/data/products';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl text-gradient-neon mb-4">ANIMEZZ</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your ultimate destination for authentic anime merchandise. From action figures to apparel, we bring your favorite characters to life.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.slice(0, 5).map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/products?category=${category.id}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe for exclusive drops, anime news & special offers!
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
              />
              <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Animezz. All rights reserved. Made with 💖 for anime fans.
          </p>
        </div>
      </div>
    </footer>
  );
}
