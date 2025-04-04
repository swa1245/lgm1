import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import logo from '../assets/logo/lo.jpg'

const Navbar = () => {
  const { cart, getCartItemCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const cartItemsCount = getCartItemCount();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setSearchFocused(false);
    }
  };

  return (
    <nav className={`${scrolled ? 'bg-white text-gray-800 shadow-lg' : 'bg-blue-600 text-white'} sticky top-0 z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="LGM Sports Logo" 
                className="h-16 mr-3"
              />
              <span className={`font-bold text-xl hidden sm:block ${scrolled ? 'text-blue-600' : 'text-white'}`}>
                LGM Sports
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Link 
              to="/cart"
              className={`relative p-2 ${scrolled ? 'hover:bg-blue-100 text-blue-600' : 'hover:bg-blue-700 text-white'} rounded-full transition-colors mr-4 group`}
              aria-label="Shopping cart"
            >
              <div className="relative">
                <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform transition-transform group-hover:scale-110">
                    {cartItemsCount}
                  </span>
                )}
              </div>
            </Link>
            
            <button 
              type="button" 
              className={`p-2 rounded-md ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-blue-700'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            <NavLink to="/" scrolled={scrolled}>Home</NavLink>
            <NavLink to="/inline-skates" scrolled={scrolled}>Inline Skates</NavLink>
            <NavLink to="/roller-skates" scrolled={scrolled}>Roller Skates</NavLink>
            {/* <NavLink to="/baby-tenacity-skates" scrolled={scrolled}>Baby & Tenacity</NavLink>
            <NavLink to="/accessories" scrolled={scrolled}>Accessories</NavLink> */}
          </div>

          {/* Desktop Search and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <div className={`flex items-center transition-all duration-300 ${
                searchFocused ? 'w-64 lg:w-72' : 'w-40 lg:w-56'
              }`}>
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className={`w-full px-4 py-2 pr-10 rounded-full ${
                    scrolled 
                      ? 'bg-gray-100 text-gray-800 placeholder-gray-500 focus:bg-white focus:shadow-md' 
                      : 'bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-75 focus:bg-opacity-30'
                  } focus:outline-none focus:ring-2 ${
                    scrolled ? 'focus:ring-blue-500' : 'focus:ring-white'
                  } focus:ring-opacity-50 transition-all`}
                />
                <button 
                  type="submit" 
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                    searchQuery ? 'text-blue-500' : scrolled ? 'text-gray-500' : 'text-white'
                  } hover:scale-110 transition-all duration-200`}
                  aria-label="Search"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>

            {/* Cart Icon */}
            <Link 
              to="/cart"
              className={`relative p-2 ${scrolled ? 'hover:bg-blue-100 text-blue-600' : 'hover:bg-blue-700 text-white'} rounded-full transition-colors group`}
              aria-label="Shopping cart"
            >
              <div className="relative">
                <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform transition-transform group-hover:scale-110">
                    {cartItemsCount}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Slide Down) */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } ${scrolled ? 'bg-white' : 'bg-blue-700'}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          <MobileNavLink to="/" scrolled={scrolled}>Home</MobileNavLink>
          <MobileNavLink to="/inline-skates" scrolled={scrolled}>Inline Skates</MobileNavLink>
          <MobileNavLink to="/roller-skates" scrolled={scrolled}>Roller Skates</MobileNavLink>
          {/* <MobileNavLink to="/baby-tenacity-skates" scrolled={scrolled}>Baby & Tenacity</MobileNavLink>
          <MobileNavLink to="/accessories" scrolled={scrolled}>Accessories</MobileNavLink> */}
          
          <form onSubmit={handleSearch} className="relative mt-4">
            <div className="flex items-center">
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full px-4 py-3 pr-10 rounded-full ${
                  scrolled 
                    ? 'bg-gray-100 text-gray-800 placeholder-gray-500 focus:bg-white focus:shadow-md' 
                    : 'bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-75 focus:bg-opacity-30'
                } focus:outline-none focus:ring-2 ${
                  scrolled ? 'focus:ring-blue-500' : 'focus:ring-white'
                } focus:ring-opacity-50 transition-all`}
              />
              <button 
                type="submit" 
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                  searchQuery ? 'text-blue-500' : scrolled ? 'text-gray-500' : 'text-white'
                } active:scale-90 transition-all duration-200`}
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  )
}

// Desktop NavLink component
const NavLink = ({ to, children, scrolled }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive 
          ? scrolled 
            ? 'bg-blue-100 text-blue-700' 
            : 'bg-blue-700 text-white' 
          : scrolled 
            ? 'text-gray-700 hover:bg-gray-100' 
            : 'text-white hover:bg-blue-700'
      }`}
    >
      {children}
    </Link>
  );
};

// Mobile NavLink component
const MobileNavLink = ({ to, children, scrolled }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to}
      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
        isActive 
          ? scrolled 
            ? 'bg-blue-100 text-blue-700' 
            : 'bg-blue-700 text-white' 
          : scrolled 
            ? 'text-gray-700 hover:bg-gray-100' 
            : 'text-white hover:bg-blue-700'
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar
