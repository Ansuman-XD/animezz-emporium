import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Package, Heart, Settings, LogOut, MapPin, CreditCard } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  // Mock order data
  const orders = [
    {
      id: 'ANI-X7K9M2',
      date: '2024-01-15',
      status: 'Delivered',
      total: 149.97,
      items: 3,
    },
    {
      id: 'ANI-P3N8L1',
      date: '2024-01-10',
      status: 'Shipped',
      total: 89.99,
      items: 1,
    },
    {
      id: 'ANI-R5T2Q8',
      date: '2024-01-05',
      status: 'Processing',
      total: 234.50,
      items: 5,
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-4xl">
          My <span className="text-gradient-neon">Account</span>
        </h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary/10 text-primary'
                    : 'hover:bg-muted'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                {tab.label}
              </button>
            ))}
            <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-destructive hover:bg-destructive/10 transition-colors">
              <LogOut className="h-5 w-5" />
              Sign Out
            </button>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h2 className="font-display text-xl mb-6">Profile Information</h2>
                <div className="flex flex-col items-center gap-6 mb-8 sm:flex-row">
                  <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center text-4xl">
                    🦊
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Anime Fan</h3>
                    <p className="text-muted-foreground">anime.fan@example.com</p>
                    <p className="text-sm text-muted-foreground mt-1">Member since January 2024</p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">First Name</label>
                    <Input defaultValue="Anime" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Last Name</label>
                    <Input defaultValue="Fan" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium">Email</label>
                    <Input type="email" defaultValue="anime.fan@example.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium">Phone</label>
                    <Input type="tel" defaultValue="+1 (555) 123-4567" />
                  </div>
                </div>

                <Button variant="neon" className="mt-6">
                  Save Changes
                </Button>
              </motion.div>
            )}

            {activeTab === 'orders' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h2 className="font-display text-xl">Order History</h2>
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="rounded-xl border border-border bg-card p-6"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold">{order.id}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(order.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                      <div className="text-right">
                        <span
                          className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                            order.status === 'Delivered'
                              ? 'bg-green-500/10 text-green-500'
                              : order.status === 'Shipped'
                              ? 'bg-blue-500/10 text-blue-500'
                              : 'bg-yellow-500/10 text-yellow-500'
                          }`}
                        >
                          {order.status}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                      <p className="text-sm text-muted-foreground">
                        {order.items} item{order.items > 1 ? 's' : ''}
                      </p>
                      <p className="font-semibold text-primary">${order.total.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'addresses' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-xl">Saved Addresses</h2>
                  <Button variant="outline">Add New</Button>
                </div>

                <div className="rounded-lg border border-primary bg-primary/5 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary mb-2">
                        Default
                      </span>
                      <p className="font-medium">Home</p>
                      <p className="text-muted-foreground mt-1">
                        123 Anime Street<br />
                        Tokyo, 10001<br />
                        Japan
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="rounded-xl border border-border bg-card p-6">
                  <h2 className="font-display text-xl mb-6">Preferences</h2>
                  <div className="space-y-4">
                    <label className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">
                          Receive updates about new products and sales
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="h-5 w-5 rounded accent-primary"
                      />
                    </label>
                    <label className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Order Updates</p>
                        <p className="text-sm text-muted-foreground">
                          Get notified about order status changes
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="h-5 w-5 rounded accent-primary"
                      />
                    </label>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                  <h2 className="font-display text-xl mb-6">Change Password</h2>
                  <div className="space-y-4 max-w-md">
                    <div>
                      <label className="mb-2 block text-sm font-medium">Current Password</label>
                      <Input type="password" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">New Password</label>
                      <Input type="password" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Confirm New Password</label>
                      <Input type="password" />
                    </div>
                    <Button variant="neon">Update Password</Button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
