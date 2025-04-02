import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import SubNav from '../SubNav'

// Import quad skate images
import quadShoe1 from '../../assets/Quad Shoes/HQ Quad shoe/1000210424.png'
import quadFrame1 from '../../assets/Quad Frame/Aluminium Quad Frame/1000210637.png'
import quadLace1 from '../../assets/Accessories/Quad Lace/1000211287.png'

const QuadSkatesAccessories = () => {
  const [view, setView] = useState('grid');
  const { addToCart } = useCart()

  const products = [
    {
      id: 1,
      name: "HQ Quad Skate Complete Set",
      image: quadShoe1,
      price: 4999,
      description: "Professional quad skate set with premium components",
      specs: {
        brand: "LGM",
        type: "Complete Quad Set",
        material: "Premium leather & aluminum",
        size: "Multiple sizes",
        features: "Pro-grade wheels, ABEC-7 bearings"
      }
    },
    {
      id: 2,
      name: "Aluminum Quad Frame",
      image: quadFrame1,
      price: 1999,
      description: "Lightweight aluminum frame for quad skates",
      specs: {
        brand: "LGM",
        type: "Quad Frame",
        material: "Aircraft-grade aluminum",
        weight: "Ultra-light",
        features: "Precision machined, Durable"
      }
    },
    {
      id: 3,
      name: "Pro Quad Laces",
      image: quadLace1,
      price: 299,
      description: "High-quality laces specifically designed for quad skates",
      specs: {
        brand: "LGM",
        type: "Skate Laces",
        material: "Premium woven",
        length: "72 inches",
        features: "Durable, Non-slip"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <SubNav />
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="border-b border-gray-200 mb-8">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">QuadSkates & Accessories</h1>
          <p className="text-lg text-gray-600 mb-6">Complete range of quad skates and essential accessories</p>
          <div className="flex items-center justify-between pb-6">
            <p className="text-gray-600">{products.length} products</p>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setView('grid')}
                className={`p-2 ${view === 'grid' ? 'text-gray-900' : 'text-gray-400'}`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zm-12 6h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zm-12 6h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"/>
                </svg>
              </button>
              <button 
                onClick={() => setView('list')}
                className={`p-2 ${view === 'list' ? 'text-gray-900' : 'text-gray-400'}`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid/List */}
        <div className={`grid ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'grid-cols-1 gap-4'}`}>
          {products.map(product => (
            <div key={product.id} className={`bg-white rounded-lg shadow-md overflow-hidden ${view === 'list' ? 'flex' : ''}`}>
              <div className={view === 'grid' ? 'p-4' : 'w-1/3 p-4'}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className={view === 'grid' ? 'p-6 pt-0' : 'w-2/3 p-6'}>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">₹{product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    Add to Cart
                  </button>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-heading font-bold text-gray-900 mb-2">Specifications:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <li key={key} className="flex justify-between">
                        <span className="capitalize">{key}:</span>
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Concluding Section */}
      <div className="max-w-4xl mx-auto mt-16 mb-12 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Why Choose LGM Quad Skates?</h2>
        <div className="prose prose-lg text-gray-600">
          <p className="mb-4">
            LGM's quad skates and accessories are crafted with precision and care, ensuring superior 
            performance for both recreational and professional skaters. Our complete sets come with 
            premium components, while our accessories are designed for durability and functionality.
          </p>
          <p>
            From high-quality frames to essential accessories, we provide everything you need to 
            enhance your quad skating experience.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[128px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full filter blur-[128px] opacity-10"></div>
    </div>
  )
}

export default QuadSkatesAccessories

