import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Shield, 
  Truck, 
  RefreshCw, 
  Star,
  Zap,
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Gamepad2,
  Tablet
} from 'lucide-react';
import { useProductStore } from '../store';
import { mockProducts, mockCategories } from '../data/mockData';
import ProductCard from '../components/product/ProductCard';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const HomePage: React.FC = () => {
  const { products, categories, setProducts, setCategories } = useProductStore();

  useEffect(() => {
    // Initialize with mock data
    setProducts(mockProducts);
    setCategories(mockCategories);
  }, [setProducts, setCategories]);

  const featuredProducts = products.filter(product => product.featured).slice(0, 6);
  const categoryIcons = {
    'Smartphones': Smartphone,
    'Laptops': Laptop,
    'Audio & Headphones': Headphones,
    'Smart Watches': Watch,
    'Gaming Consoles': Gamepad2,
    'Tablets': Tablet,
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <Badge variant="warning" size="lg" className="bg-warning-500/20 text-warning-300 border border-warning-500/30">
                  🔥 Limited Time: Up to 60% OFF
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Premium Tech,
                  <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
                    {' '}Unbeatable Prices
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Discover certified refurbished electronics with full warranty. 
                  Save money without compromising on quality.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button size="xl" className="group">
                    Shop Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/categories">
                  <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white hover:text-primary-900">
                    Browse Categories
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-sm text-gray-300">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">99.8%</div>
                  <div className="text-sm text-gray-300">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-gray-300">Support</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Premium Electronics"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-success-500 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Certified Quality</div>
                      <div className="text-sm text-gray-300">30-Day Warranty</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose TechVault?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're not just another electronics store. We're your trusted partner in finding premium tech at unbeatable prices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Quality Guaranteed',
                description: 'Every device undergoes rigorous testing and comes with our quality guarantee.',
                color: 'text-success-600',
                bg: 'bg-success-50',
              },
              {
                icon: Truck,
                title: 'Free Shipping',
                description: 'Fast, free shipping on all orders over $50. Get your tech delivered quickly.',
                color: 'text-primary-600',
                bg: 'bg-primary-50',
              },
              {
                icon: RefreshCw,
                title: '30-Day Returns',
                description: 'Not satisfied? Return any item within 30 days for a full refund.',
                color: 'text-accent-600',
                bg: 'bg-accent-50',
              },
              {
                icon: Star,
                title: 'Expert Support',
                description: '24/7 customer support from our team of tech experts.',
                color: 'text-warning-600',
                bg: 'bg-warning-50',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-6 h-full">
                  <div className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find exactly what you're looking for in our carefully curated categories.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.slice(0, 6).map((category, index) => {
              const IconComponent = categoryIcons[category.name as keyof typeof categoryIcons] || Zap;
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/products?category=${category.slug}`}>
                    <Card hover className="text-center p-6 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {category.productCount} items
                      </p>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Products
              </h2>
              <p className="text-gray-600">
                Hand-picked deals you don't want to miss
              </p>
            </div>
            <Link to="/products">
              <Button variant="outline" className="group">
                View All
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Upgrade Your Tech?
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Join thousands of satisfied customers who've found their perfect device at TechVault. 
              Start browsing now and discover your next favorite gadget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="xl" variant="secondary">
                  Start Shopping Now
                </Button>
              </Link>
              <Link to="/register">
                <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Create Account
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;