import React, { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((product) => {
    if (!product || !product.id) {
      console.error('Invalid product:', product);
      return;
    }

    setCart(prevCart => {
      // Check if item exists
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        // Create new array with updated quantity
        const updatedCart = prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        console.log('Updated cart:', updatedCart); // Debug log
        return updatedCart;
      }
      
      // Add new item
      const newCart = [...prevCart, { ...product, quantity: 1 }];
      console.log('New cart:', newCart); // Debug log
      return newCart;
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    if (!productId) {
      console.error('Invalid productId:', productId);
      return;
    }
    setCart(prevCart => {
      const newCart = prevCart.filter(item => item.id !== productId);
      console.log('Cart after remove:', newCart); // Debug log
      return newCart;
    });
  }, []);

  const updateQuantity = useCallback((productId, newQuantity) => {
    if (!productId) {
      console.error('Invalid productId:', productId);
      return;
    }

    setCart(prevCart => {
      if (newQuantity <= 0) {
        const newCart = prevCart.filter(item => item.id !== productId);
        console.log('Cart after quantity update (remove):', newCart); // Debug log
        return newCart;
      }

      const updatedCart = prevCart.map(item =>
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      );
      console.log('Cart after quantity update:', updatedCart); // Debug log
      return updatedCart;
    });
  }, []);

  const getCartTotal = useCallback(() => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cart]);

  const getCartItemCount = useCallback(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const clearCart = useCallback(() => {
    setCart([]);
    console.log('Cart cleared'); // Debug log
  }, []);

  // Debug: Log cart changes
  React.useEffect(() => {
    console.log('Cart state changed:', cart);
  }, [cart]);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartItemCount,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
