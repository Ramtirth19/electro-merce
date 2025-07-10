import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useProductStore } from './store';
import { mockProducts, mockCategories } from './data/mockData';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CartSidebar from './components/cart/CartSidebar';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

// Admin Pages
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';

const App: React.FC = () => {
  const { setProducts, setCategories } = useProductStore();

  useEffect(() => {
    // Initialize with mock data
    setProducts(mockProducts);
    setCategories(mockCategories);
  }, [setProducts, setCategories]);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="products" element={<div>Products Management</div>} />
            <Route path="categories" element={<div>Categories Management</div>} />
            <Route path="orders" element={<div>Orders Management</div>} />
            <Route path="users" element={<div>Users Management</div>} />
            <Route path="settings" element={<div>Settings</div>} />
          </Route>

          {/* Public Routes */}
          <Route path="/*" element={
            <>
              <Header />
              <main className="min-h-screen">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/product/:id" element={<ProductDetailPage />} />
                  <Route path="/categories" element={<div>Categories Page</div>} />
                  <Route path="/search" element={<div>Search Results</div>} />
                  <Route path="/cart" element={<div>Cart Page</div>} />
                  <Route path="/checkout" element={<div>Checkout Page</div>} />
                  <Route path="/profile" element={<div>Profile Page</div>} />
                  <Route path="/orders" element={<div>Orders Page</div>} />
                </Routes>
              </main>
              <Footer />
              <CartSidebar />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;