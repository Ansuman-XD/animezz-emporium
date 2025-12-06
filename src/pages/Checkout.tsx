import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, Truck, ChevronLeft, Lock } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useStore } from '@/contexts/StoreContext';
import { toast } from '@/hooks/use-toast';
import { formatPrice } from '@/data/products';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useStore();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const shipping = cartTotal >= 2000 ? 0 : 199;
  const total = cartTotal + shipping;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    clearCart();
    toast({
      title: "Order placed successfully! 🎉",
      description: "Thank you for your purchase. You'll receive a confirmation email shortly.",
    });
    navigate('/order-confirmation');
  };

  if (cart.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl">Your cart is empty</h1>
          <p className="mt-4 text-muted-foreground">
            Add some items before checking out.
          </p>
          <Link to="/products">
            <Button variant="neon" className="mt-8">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Link to="/cart" className="mb-6 inline-flex items-center gap-2 text-sm hover:text-primary">
          <ChevronLeft className="h-4 w-4" />
          Back to Cart
        </Link>

        <h1 className="font-display text-4xl">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {/* Left Column - Forms */}
            <div className="space-y-8">
              {/* Shipping Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Truck className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl">Shipping Information</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">First Name</label>
                    <Input placeholder="John" required />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium">Email</label>
                    <Input type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium">Phone</label>
                    <Input type="tel" placeholder="+1 (555) 000-0000" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium">Address</label>
                    <Input placeholder="123 Anime Street" required />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">City</label>
                    <Input placeholder="Tokyo" required />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Postal Code</label>
                    <Input placeholder="10001" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium">Country</label>
                    <select className="w-full rounded-lg border border-border bg-card px-4 py-2 focus:border-primary focus:outline-none">
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="JP">Japan</option>
                      <option value="IN">India</option>
                    </select>
                  </div>
                </div>
              </motion.div>

              {/* Payment Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl">Payment Details</h2>
                </div>

                <div className="grid gap-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Card Number</label>
                    <Input placeholder="4242 4242 4242 4242" required />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">Expiry Date</label>
                      <Input placeholder="MM/YY" required />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">CVV</label>
                      <Input placeholder="123" required />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Cardholder Name</label>
                    <Input placeholder="John Doe" required />
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Lock className="h-4 w-4" />
                  Your payment information is secure and encrypted
                </div>
              </motion.div>
            </div>

            {/* Right Column - Order Summary */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="sticky top-24 rounded-xl border border-border bg-card p-6"
              >
                <h2 className="font-display text-xl mb-6">Order Summary</h2>

                {/* Items */}
                <div className="max-h-64 space-y-4 overflow-auto">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-medium line-clamp-1">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-3 border-t border-border pt-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-500">Free</span>
                      ) : (
                        formatPrice(shipping)
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-3 font-semibold">
                    <span>Total</span>
                    <span className="text-primary text-xl">{formatPrice(total)}</span>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="neon"
                  size="lg"
                  className="mt-6 w-full"
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Processing...' : `Pay ${formatPrice(total)}`}
                </Button>
              </motion.div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Checkout;
