import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import logo from '../assets/logo/lo.jpg'

const Navbar = () => {
  const { cart, getCartItemCount } = useCart();
  const navigate = useNavigate();
  const cartItemsCount = getCartItemCount();

  return (
    <nav className="bg-orange-500 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src={logo} 
                alt="LGM Sports Logo" 
                className="h-12"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-blue-100 font-medium transition-colors">Home</Link>
            <Link to="/inline-skates" className="text-white hover:text-blue-100 font-medium transition-colors">Inline Skates</Link>
            <Link to="/roller-skates" className="text-white hover:text-blue-100 font-medium transition-colors">Roller Skates</Link>
            <Link to="/baby-tenacity-skates" className="text-white hover:text-blue-100 font-medium transition-colors">Baby & Tenacity</Link>
            <Link to="/accessories" className="text-white hover:text-blue-100 font-medium transition-colors">Accessories</Link>
          </div>

          {/* Search and Cart */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-48 px-4 py-2 rounded-full bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Cart Icon */}
            <Link 
              to="/cart"
              className="relative p-2 hover:bg-orange-600 rounded-full transition-colors group"
            >
              <div className="relative">
                <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform transition-transform group-hover:scale-110">
                    {cartItemsCount}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
