import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom'
import SubNav from '../SubNav'
import wheels from '../../assets/inline/banner/w.png'
import boots from '../../assets/Quad Shoes/Classic Quad Shoes/1000210301 (1).png'
import frames from '../../assets/inline/banner/f.png'
import bg from '../../assets/roller/bg2.webp'
const RollerSkates = () => {
  const { addToCart } = useCart();
  return (
    <div className="min-h-screen bg-white">
      <SubNav />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Accent Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-orange-500 via-blue-500 to-transparent"></div>

        <div className="container mx-auto px-4 flex items-center relative z-10">
          {/* Left Content */}
          <div className="w-1/2 py-12">
            <div className="space-y-10">
              {/* Premium Badge */}
              <div className="inline-flex items-center">
                <div className="px-4 py-2 bg-white rounded-lg shadow-md border border-gray-100">
                  <span className="text-gray-600 font-medium tracking-wide text-sm uppercase">New Collection 2025</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-5xl font-heading font-bold text-gray-900 leading-tight">
                Professional <br />
                <span className="text-blue-600">Quad Roller Skates</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Experience the perfect blend of style and performance with our professional quad roller skates. Designed for both beginners and advanced skaters.
              </p>

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

          {/* Right Content - Image */}
          <div className="w-1/2">
            <div className="relative">
              <img 
                src={bg} 
                alt="Professional Quad Skates"
                className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-gradient-to-br from-orange-100 from-10% via-blue-100 via-50% to-transparent to-90%">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
              <p className="text-gray-500">Discover our premium collection of quad skating equipment</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="p-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-4 gap-8">
            {/* Quad Shoes */}
            <div className="group">
              <div className="relative bg-white rounded-xl overflow-hidden mb-4 shadow-lg shadow-gray-100/50">
                <div className="absolute top-4 left-4 z-10">
                  <div className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">New</div>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 bg-white shadow-lg text-gray-900 font-medium rounded-full">₹2,999</div>
                </div>
                <div className="p-6">
                  <img 
                    src={boots}
                    alt="Pro Quad Shoes"
                    className="w-full h-64 object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Pro Quad Shoes</h3>
              <p className="text-gray-500 text-sm mb-4">Professional quad skating boots</p>
              <Link to="/boots" className="block">
                <button className="w-full bg-gray-900 cursor-pointer text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-gray-900/10">
                  Shop Now
                </button>
              </Link>
            </div>

            {/* Quad Wheels */}
            <div className="group">
              <div className="relative bg-white rounded-xl overflow-hidden mb-4 shadow-lg shadow-gray-100/50">
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 bg-white shadow-lg text-gray-900 font-medium rounded-full">₹1,499</div>
                </div>
                <div className="p-6">
                  <img 
                    src={wheels}
                    alt="Quad Wheels"
                    className="w-full h-64 object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Elite Quad Wheels</h3>
              <p className="text-gray-500 text-sm mb-4">High-performance quad wheels</p>
              <Link to="/quad-wheels" className="block">
                <button className="w-full bg-gray-900 cursor-pointer text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-gray-900/10">
                  Shop Now
                </button>
              </Link>
            </div>

            {/* Quad Frames */}
            <div className="group">
              <div className="relative bg-white rounded-xl overflow-hidden mb-4 shadow-lg shadow-gray-100/50">
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 bg-white shadow-lg text-gray-900 font-medium rounded-full">₹1,999</div>
                </div>
                <div className="p-6">
                  <img 
                    src={frames}
                    alt="Quad Frames"
                    className="w-full h-64 object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Pro Quad Frames</h3>
              <p className="text-gray-500 text-sm mb-4">Competition-grade frames</p>
              <Link to="/speed-frames" className="block">
                <button className="w-full bg-gray-900 text-white py-3 cursor-pointer rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-gray-900/10">
                  Shop Now
                </button>
              </Link>
            </div>

            {/* Complete Set */}
            <div className="group">
              <div className="relative bg-white rounded-xl overflow-hidden mb-4 shadow-lg shadow-gray-100/50">
                <div className="absolute top-4 left-4 z-10">
                  <div className="px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">Best Value</div>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 bg-white shadow-lg text-gray-900 font-medium rounded-full">₹5,999</div>
                </div>
                <div className="p-6">
                  <img 
                    src={bg}
                    alt="Complete Quad Set"
                    className="w-full h-64 object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Complete Quad Set</h3>
              <p className="text-gray-500 text-sm mb-4">Professional complete setup</p>
              <button 
                onClick={() => addToCart({
                  id: 'quad-set-1',
                  name: 'Complete Quad Set',
                  description: 'Professional complete setup',
                  price: 14999,
                  image: '/images/skates/quad-set.jpg'
                })}
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-gray-900/10 cursor-pointer"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Built with the finest materials for durability and performance</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-orange-100 text-orange-600 rounded-xl">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Quick delivery to your doorstep with tracking</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-green-100 text-green-600 rounded-xl">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Warranty Protected</h3>
              <p className="text-gray-600">1-year warranty on all our products</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RollerSkates
