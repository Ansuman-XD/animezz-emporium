import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useStore } from '@/contexts/StoreContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useStore();

  if (cart.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto max-w-md"
          >
            <div className="mb-6 text-8xl">🛒</div>
            <h1 className="font-display text-3xl">Your Cart is Empty</h1>
            <p className="mt-4 text-muted-foreground">
              Looks like you haven't added any items yet. Start shopping and fill it up!
            </p>
            <Link to="/products">
              <Button variant="neon" size="lg" className="mt-8">
                <ShoppingBag className="h-5 w-5" />
                Start Shopping
              </Button>
            </Link>
          </motion.div>
        </div>
      </Layout>
    );
  }

  const shipping = cartTotal >= 50 ? 0 : 5.99;
  const total = cartTotal + shipping;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-4xl">Shopping Cart</h1>
        <p className="mt-2 text-muted-foreground">{cart.length} items in your cart</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 rounded-xl border border-border bg-card p-4"
                >
                  <Link to={`/product/${item.id}`} className="shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 rounded-lg object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between">
                      <div>
                        <Link
                          to={`/product/${item.id}`}
                          className="font-semibold hover:text-primary"
                        >
                          {item.name}
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          {item.category.replace('-', ' ')}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-lg border border-border">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-muted"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-muted"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="font-semibold text-primary">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={clearCart}
              className="mt-4 text-sm text-muted-foreground hover:text-destructive"
            >
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h2 className="font-display text-xl">Order Summary</h2>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-green-500">Free</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Add ${(50 - cartTotal).toFixed(2)} more for free shipping!
                  </p>
                )}
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <Link to="/checkout">
                <Button variant="neon" size="lg" className="mt-6 w-full">
                  Proceed to Checkout
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" className="mt-3 w-full">
                  Continue Shopping
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
