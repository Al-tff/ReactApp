import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ProductListingPage from './components/ProductListingPage';
import ShoppingCartPage from './components/ShoppingCartPage';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    { id: 1, name: 'Aloe Vera', price: 9.99, thumbnail: 'plant1.jpeg', category: 'Succulents' },
    { id: 2, name: 'Snake Plant', price: 12.99, thumbnail: 'plant2.jpeg', category: 'Succulents' },
    { id: 3, name: 'Fiddle Leaf Fig', price: 19.99, thumbnail: 'plant3.jpeg', category: 'Trees' },
    { id: 4, name: 'Peace Lily', price: 14.99, thumbnail: 'plant4.jpeg', category: 'Flowers' },
    { id: 5, name: 'Spider Plant', price: 8.99, thumbnail: 'plant5.jpeg', category: 'Succulents' },
    { id: 6, name: 'Boston Fern', price: 11.99, thumbnail: 'plant6.jpeg', category: 'Ferns' },
  ];

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleIncrease = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrease = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const handleDelete = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Header cartItemCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage products={products} onAddToCart={handleAddToCart} cartItems={cartItems} />} />
        <Route path="/cart" element={<ShoppingCartPage cartItems={cartItems} onIncrease={handleIncrease} onDecrease={handleDecrease} onDelete={handleDelete} />} />
      </Routes>
    </Router>
  );
};

export default App;
