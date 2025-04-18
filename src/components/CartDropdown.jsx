import React, { useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';

const CartDropdown = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div 
      ref={dropdownRef}
      className="fixed right-0 sm:right-4 mt-2 w-full sm:w-80 md:w-96 bg-white rounded-lg shadow-xl z-50 border border-gray-200 mx-auto sm:mx-0 max-w-[95vw] sm:max-w-none"
      style={{ maxHeight: 'calc(100vh - 100px)' }}
    >
      <div className="p-3 sm:p-4">
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <h3 className="text-base sm:text-lg font-bold text-gray-900">Shopping Cart</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors p-1"
            aria-label="Close cart"
          >
            <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center py-6 sm:py-8 text-sm sm:text-base">Your cart is empty</p>
        ) : (
          <>
            <div className="max-h-[50vh] sm:max-h-[60vh] overflow-y-auto">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center py-3 sm:py-4 border-b border-gray-200 last:border-b-0">
                  <img src={item.image} alt={item.name} className="h-14 w-14 sm:h-16 sm:w-16 object-cover rounded" />
                  <div className="ml-3 sm:ml-4 flex-1">
                    <h4 className="text-xs sm:text-sm font-medium text-gray-900">{item.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-500">₹{item.price}</p>
                    <div className="flex items-center mt-1 sm:mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        className="text-gray-500 hover:text-gray-700 p-1"
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                        </svg>
                      </button>
                      <span className="mx-1 sm:mx-2 text-gray-600 min-w-[16px] sm:min-w-[20px] text-center text-xs sm:text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-gray-500 hover:text-gray-700 p-1"
                        aria-label="Increase quantity"
                      >
                        <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-2 sm:ml-4 text-red-500 hover:text-red-700 p-1"
                        aria-label="Remove item"
                      >
                        <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="ml-2 sm:ml-4">
                    <p className="text-xs sm:text-sm font-medium text-gray-900">₹{item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 sm:mt-4 border-t border-gray-200 pt-3 sm:pt-4">
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <span className="text-base sm:text-lg font-medium text-gray-900">Total</span>
                <span className="text-base sm:text-lg font-bold text-gray-900">₹{total}</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm sm:text-base hover:bg-blue-700 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;
