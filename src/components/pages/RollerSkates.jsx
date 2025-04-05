import React, { useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom'
import SubNav from '../SubNav'
import ScrollToTop from '../ScrollToTop'
import wheels from '../../assets/inline/banner/w.png'
import boots from '../../assets/Quad Shoes/Classic Quad Shoes/1000210301 (1).png'
import frames from '../../assets/inline/banner/f.png'
import bg from '../../assets/roller/bg2.webp'
const RollerSkates = () => {
  const { addToCart } = useCart();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 from-10% via-blue-200 via-50% to-white to-90%">
      <ScrollToTop />
      <SubNav />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20">
        {/* Accent Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-orange-500 via-blue-500 to-transparent"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center relative z-10">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 py-8 md:py-12 order-2 lg:order-1">
              <div className="space-y-6 md:space-y-10">
                {/* Premium Badge */}
                <div className="inline-flex items-center">
                  <div className="px-4 py-2 bg-white/90 backdrop-blur rounded-lg shadow-xl border border-gray-100">
                    <span className="text-gray-900 font-medium tracking-wide text-sm uppercase">New Collection 2025</span>
                  </div>
                </div>

                {/* Main Heading */}
                <div>
                  <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] leading-none font-bold">
                    Professional<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                      Quad Roller Skates
                    </span>
                  </h1>
                  <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-700 max-w-xl leading-relaxed">
                    Experience the perfect blend of style and performance with our professional quad roller skates. Designed for both beginners and advanced skaters.
                  </p>
                </div>
                
                {/* Price and CTA */}
                <div className="flex flex-wrap items-center gap-4 md:gap-8">
                  <div className="space-y-1">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">₹5,999</div>
                    <div className="text-xs md:text-sm text-blue-600 font-medium">Limited time offer</div>
                  </div>
                  <button 
                    onClick={() => addToCart({
                      id: 'quad-set-1',
                      name: 'Complete Quad Set',
                      description: 'Professional complete setup',
                      price: 5999,
                      image: bg,
                      category: 'roller-skates'
                    })}
                    className="px-6 md:px-8 py-3 md:py-4 cursor-pointer bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2"
                  >
                    Add to Cart
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </button>
                </div>
                
                {/* Product Features */}
                <div className="grid grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-10 border-t border-gray-100">
                  <div className="group">
                    <div className="text-xl md:text-2xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">Premium</div>
                    <div className="text-sm md:text-base text-gray-500">Materials</div>
                  </div>
                  <div className="group">
                    <div className="text-xl md:text-2xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">2 Years</div>
                    <div className="text-sm md:text-base text-gray-500">Warranty</div>
                  </div>
                  <div className="group">
                    <div className="text-xl md:text-2xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">Global</div>
                    <div className="text-sm md:text-base text-gray-500">Shipping</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                {/* <div className="flex items-center gap-4">
                  <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-gray-900/10">
                    Shop Collection
                  </button>
                  <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 shadow-lg">
                    Learn More
                  </button>
                </div> */}
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0 order-1 lg:order-2">
              <div className="relative group px-4">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-orange-500/10 rounded-3xl blur-2xl group-hover:from-blue-600/20 group-hover:to-orange-500/20 transition-all duration-500"></div>
                <div className="relative">
                  <img 
                    src={bg} 
                    alt="Professional Quad Skates"
                    className="w-full lg:w-[120%] h-auto transform lg:-rotate-12 group-hover:rotate-0 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-100 from-10% via-blue-100 via-50% to-transparent to-90%">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">Featured Products</h2>
              <p className="text-gray-500 text-sm md:text-base">Discover our premium collection of quad skating equipment</p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Quad Shoes */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 bg-white shadow-lg text-gray-900 font-medium rounded-full text-sm">₹2,999</div>
                </div>
                <div className="p-4 md:p-6">
                  <img 
                    src={boots}
                    alt="Pro Quad Shoes"
                    className="w-full h-48 md:h-64 object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Pro Quad Shoes</h3>
                <p className="text-gray-500 text-xs md:text-sm mb-4">Professional quad skating boots</p>
                <Link 
                  to="/boots"
                  className="w-full bg-gray-900 text-white py-2 md:py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer text-sm md:text-base"
                >
                  <span>Shop Now</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Quad Wheels */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 bg-white shadow-lg text-gray-900 font-medium rounded-full text-sm">₹1,499</div>
                </div>
                <div className="p-4 md:p-6">
                  <img 
                    src={wheels}
                    alt="Quad Wheels"
                    className="w-full h-48 md:h-64 object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Elite Quad Wheels</h3>
                <p className="text-gray-500 text-xs md:text-sm mb-4">High-performance quad wheels</p>
                <Link 
                  to="/quad-wheels"
                  className="w-full bg-gray-900 text-white py-2 md:py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer text-sm md:text-base"
                >
                  <span>Shop Now</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Quad Frames */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 bg-white shadow-lg text-gray-900 font-medium rounded-full text-sm">₹1,999</div>
                </div>
                <div className="p-4 md:p-6">
                  <img 
                    src={frames}
                    alt="Quad Frames"
                    className="w-full h-48 md:h-64 object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Pro Quad Frames</h3>
                <p className="text-gray-500 text-xs md:text-sm mb-4">Competition-grade frames</p>
                <Link 
                  to="/speed-frames"
                  className="w-full bg-gray-900 text-white py-2 md:py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer text-sm md:text-base"
                >
                  <span>Shop Now</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Complete Set */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 bg-white shadow-lg text-gray-900 font-medium rounded-full text-sm">₹5,999</div>
                </div>
                <div className="p-4 md:p-6">
                  <img 
                    src={bg}
                    alt="Complete Quad Set"
                    className="w-full h-48 md:h-64 object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Complete Quad Set</h3>
                <p className="text-gray-500 text-xs md:text-sm mb-4">Professional complete setup</p>
                <button 
                  onClick={() => addToCart({
                    id: 'quad-set-1',
                    name: 'Complete Quad Set',
                    description: 'Professional complete setup',
                    price: 5999,
                    image: bg,
                    category: 'roller-skates'
                  })}
                  className="w-full bg-gray-900 text-white py-2 md:py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer text-sm md:text-base"
                >
                  <span>Shop Now</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl">
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-sm md:text-base text-gray-600">Built with the finest materials for durability and performance</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 flex items-center justify-center bg-orange-100 text-orange-600 rounded-xl">
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Fast Shipping</h3>
              <p className="text-sm md:text-base text-gray-600">Quick delivery to your doorstep with tracking</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto md:max-w-none">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 flex items-center justify-center bg-green-100 text-green-600 rounded-xl">
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Warranty Protected</h3>
              <p className="text-sm md:text-base text-gray-600">1-year warranty on all our products</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RollerSkates
