import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

// Helper functions for localStorage
const saveCartToLocalStorage = (cart) => {
  try {
    localStorage.setItem('lgmCart', JSON.stringify(cart));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};

const getCartFromLocalStorage = () => {
  try {
    const savedCart = localStorage.getItem('lgmCart');
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error('Error getting cart from localStorage:', error);
    return [];
  }
};

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => getCartFromLocalStorage());

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    saveCartToLocalStorage(cart);
    console.log('Cart saved to localStorage:', cart);
  }, [cart]);

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
        toast.success(`${product.name} quantity updated in cart!`);
        return updatedCart;
      }
      
      // Add new item
      const newCart = [...prevCart, { ...product, quantity: 1 }];
      console.log('New cart:', newCart); // Debug log
      toast.success(`${product.name} added to cart!`);
      return newCart;
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    if (!productId) {
      console.error('Invalid productId:', productId);
      return;
    }
    setCart(prevCart => {
      const itemToRemove = prevCart.find(item => item.id === productId);
      const newCart = prevCart.filter(item => item.id !== productId);
      console.log('Cart after remove:', newCart); // Debug log
      
      if (itemToRemove) {
        toast.info(`${itemToRemove.name} removed from cart`);
      }
      
      return newCart;
    });
  }, []);

  const updateQuantity = useCallback((productId, newQuantity) => {
    if (!productId) {
      console.error('Invalid productId:', productId);
      return;
    }

    setCart(prevCart => {
      const itemToUpdate = prevCart.find(item => item.id === productId);
      
      if (newQuantity <= 0) {
        const newCart = prevCart.filter(item => item.id !== productId);
        console.log('Cart after quantity update (remove):', newCart); // Debug log
        
        if (itemToUpdate) {
          toast.info(`${itemToUpdate.name} removed from cart`);
        }
        
        return newCart;
      }

      const updatedCart = prevCart.map(item =>
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      );
      console.log('Cart after quantity update:', updatedCart); // Debug log
      
      if (itemToUpdate) {
        toast.info(`${itemToUpdate.name} quantity updated to ${newQuantity}`);
      }
      
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
    toast.info('Cart has been cleared');
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
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
