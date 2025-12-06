import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Package, Home } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const OrderConfirmation = () => {
  const orderNumber = `ANI-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mx-auto max-w-lg text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-500/10"
          >
            <CheckCircle className="h-12 w-12 text-green-500" />
          </motion.div>

          <h1 className="font-display text-4xl">
            Order <span className="text-gradient-neon">Confirmed!</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Thank you for your purchase. Your order has been placed successfully.
          </p>

          <div className="mt-8 rounded-xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground">Order Number</p>
            <p className="mt-1 font-display text-2xl text-primary">{orderNumber}</p>
            <p className="mt-4 text-sm text-muted-foreground">
              A confirmation email has been sent to your email address with your order details.
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Package className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="font-medium">Estimated Delivery</p>
                <p className="text-sm text-muted-foreground">3-5 Business Days</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link to="/profile">
              <Button variant="neon" size="lg">
                <Package className="h-5 w-5" />
                Track Order
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" size="lg">
                <Home className="h-5 w-5" />
                Back to Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default OrderConfirmation;
