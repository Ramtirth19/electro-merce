import { Product, Category, Order } from '../store';

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Smartphones',
    slug: 'smartphones',
    description: 'Premium refurbished smartphones with warranty',
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 45,
  },
  {
    id: '2',
    name: 'Laptops',
    slug: 'laptops',
    description: 'High-performance laptops for work and gaming',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    productCount: 32,
  },
  {
    id: '3',
    name: 'Tablets',
    slug: 'tablets',
    description: 'Versatile tablets for productivity and entertainment',
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 28,
  },
  {
    id: '4',
    name: 'Gaming Consoles',
    slug: 'gaming-consoles',
    description: 'Latest gaming consoles and accessories',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 18,
  },
  {
    id: '5',
    name: 'Audio & Headphones',
    slug: 'audio-headphones',
    description: 'Premium audio equipment and headphones',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 56,
  },
  {
    id: '6',
    name: 'Smart Watches',
    slug: 'smart-watches',
    description: 'Advanced smartwatches and fitness trackers',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 24,
  },
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 14 Pro Max',
    description: 'Flagship smartphone with A16 Bionic chip, ProRAW camera system, and Dynamic Island. Fully tested and certified refurbished.',
    price: 899,
    originalPrice: 1099,
    condition: 'excellent',
    category: 'Smartphones',
    brand: 'Apple',
    images: [
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    specifications: {
      'Display': '6.7" Super Retina XDR',
      'Storage': '256GB',
      'RAM': '6GB',
      'Camera': '48MP Triple Camera',
      'Battery': '4323mAh',
      'OS': 'iOS 16',
    },
    inStock: true,
    stockCount: 12,
    rating: 4.8,
    reviewCount: 234,
    featured: true,
    createdAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    name: 'MacBook Pro 16" M2',
    description: 'Professional laptop with M2 Pro chip, stunning Liquid Retina XDR display, and all-day battery life. Perfect for creators and developers.',
    price: 1899,
    originalPrice: 2499,
    condition: 'excellent',
    category: 'Laptops',
    brand: 'Apple',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    specifications: {
      'Processor': 'Apple M2 Pro',
      'Display': '16.2" Liquid Retina XDR',
      'Storage': '512GB SSD',
      'RAM': '16GB',
      'Graphics': 'M2 Pro GPU',
      'Battery': 'Up to 22 hours',
    },
    inStock: true,
    stockCount: 8,
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    createdAt: '2024-01-14T15:30:00Z',
  },
  {
    id: '3',
    name: 'Samsung Galaxy S23 Ultra',
    description: 'Ultimate Android flagship with S Pen, 200MP camera, and premium build quality. Thoroughly inspected and warranty included.',
    price: 799,
    originalPrice: 1199,
    condition: 'good',
    category: 'Smartphones',
    brand: 'Samsung',
    images: [
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    specifications: {
      'Display': '6.8" Dynamic AMOLED 2X',
      'Storage': '256GB',
      'RAM': '12GB',
      'Camera': '200MP Quad Camera',
      'Battery': '5000mAh',
      'OS': 'Android 13',
    },
    inStock: true,
    stockCount: 15,
    rating: 4.7,
    reviewCount: 189,
    featured: true,
    createdAt: '2024-01-13T09:15:00Z',
  },
  {
    id: '4',
    name: 'iPad Pro 12.9" M2',
    description: 'Most advanced iPad with M2 chip, Liquid Retina XDR display, and Apple Pencil support. Perfect for creative professionals.',
    price: 899,
    originalPrice: 1099,
    condition: 'excellent',
    category: 'Tablets',
    brand: 'Apple',
    images: [
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    specifications: {
      'Processor': 'Apple M2',
      'Display': '12.9" Liquid Retina XDR',
      'Storage': '256GB',
      'RAM': '8GB',
      'Camera': '12MP + 10MP Ultra Wide',
      'Battery': 'Up to 10 hours',
    },
    inStock: true,
    stockCount: 6,
    rating: 4.8,
    reviewCount: 98,
    featured: false,
    createdAt: '2024-01-12T14:20:00Z',
  },
  {
    id: '5',
    name: 'PlayStation 5',
    description: 'Next-gen gaming console with ultra-high speed SSD, ray tracing, and 3D audio. Includes DualSense controller.',
    price: 449,
    originalPrice: 499,
    condition: 'good',
    category: 'Gaming Consoles',
    brand: 'Sony',
    images: [
      'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    specifications: {
      'CPU': 'AMD Zen 2',
      'GPU': 'AMD RDNA 2',
      'Storage': '825GB SSD',
      'RAM': '16GB GDDR6',
      'Resolution': 'Up to 8K',
      'Ray Tracing': 'Hardware accelerated',
    },
    inStock: true,
    stockCount: 4,
    rating: 4.9,
    reviewCount: 267,
    featured: true,
    createdAt: '2024-01-11T11:45:00Z',
  },
  {
    id: '6',
    name: 'AirPods Pro 2nd Gen',
    description: 'Premium wireless earbuds with active noise cancellation, spatial audio, and adaptive transparency.',
    price: 199,
    originalPrice: 249,
    condition: 'excellent',
    category: 'Audio & Headphones',
    brand: 'Apple',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    specifications: {
      'Driver': 'Custom high-excursion',
      'Noise Cancellation': 'Active',
      'Battery': 'Up to 6 hours',
      'Charging Case': 'Up to 30 hours',
      'Water Resistance': 'IPX4',
      'Connectivity': 'Bluetooth 5.3',
    },
    inStock: true,
    stockCount: 20,
    rating: 4.6,
    reviewCount: 145,
    featured: false,
    createdAt: '2024-01-10T16:30:00Z',
  },
  {
    id: '7',
    name: 'Apple Watch Series 8',
    description: 'Advanced health and fitness tracking with ECG, blood oxygen monitoring, and crash detection.',
    price: 329,
    originalPrice: 399,
    condition: 'good',
    category: 'Smart Watches',
    brand: 'Apple',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    specifications: {
      'Display': '45mm Always-On Retina',
      'Health': 'ECG, Blood Oxygen, Temperature',
      'Fitness': 'GPS, Cellular optional',
      'Battery': 'Up to 18 hours',
      'Water Resistance': '50 meters',
      'OS': 'watchOS 9',
    },
    inStock: true,
    stockCount: 11,
    rating: 4.7,
    reviewCount: 203,
    featured: false,
    createdAt: '2024-01-09T13:15:00Z',
  },
  {
    id: '8',
    name: 'Dell XPS 13 Plus',
    description: 'Ultra-premium Windows laptop with 12th Gen Intel Core, stunning OLED display, and premium materials.',
    price: 1299,
    originalPrice: 1699,
    condition: 'excellent',
    category: 'Laptops',
    brand: 'Dell',
    images: [
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    ],
    specifications: {
      'Processor': 'Intel Core i7-1260P',
      'Display': '13.4" OLED 3.5K',
      'Storage': '512GB SSD',
      'RAM': '16GB LPDDR5',
      'Graphics': 'Intel Iris Xe',
      'Battery': 'Up to 12 hours',
    },
    inStock: true,
    stockCount: 5,
    rating: 4.5,
    reviewCount: 87,
    featured: false,
    createdAt: '2024-01-08T10:00:00Z',
  },
];

export const mockOrders: Order[] = [
  {
    id: '1',
    userId: '2',
    items: [
      { product: mockProducts[0], quantity: 1 },
      { product: mockProducts[5], quantity: 2 },
    ],
    total: 1297,
    status: 'delivered',
    shippingAddress: {
      name: 'John Doe',
      address: '123 Tech Street',
      city: 'San Francisco',
      zipCode: '94105',
      country: 'USA',
    },
    createdAt: '2024-01-20T14:30:00Z',
    updatedAt: '2024-01-25T09:15:00Z',
  },
  {
    id: '2',
    userId: '3',
    items: [
      { product: mockProducts[1], quantity: 1 },
    ],
    total: 1899,
    status: 'shipped',
    shippingAddress: {
      name: 'Jane Smith',
      address: '456 Innovation Ave',
      city: 'Austin',
      zipCode: '73301',
      country: 'USA',
    },
    createdAt: '2024-01-22T11:20:00Z',
    updatedAt: '2024-01-24T16:45:00Z',
  },
  {
    id: '3',
    userId: '4',
    items: [
      { product: mockProducts[2], quantity: 1 },
      { product: mockProducts[6], quantity: 1 },
    ],
    total: 1128,
    status: 'processing',
    shippingAddress: {
      name: 'Mike Johnson',
      address: '789 Digital Blvd',
      city: 'Seattle',
      zipCode: '98101',
      country: 'USA',
    },
    createdAt: '2024-01-23T09:45:00Z',
    updatedAt: '2024-01-23T09:45:00Z',
  },
];