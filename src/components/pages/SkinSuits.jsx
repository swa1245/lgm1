import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import SubNav from '../SubNav'

// Import skin suit images
import halfSublimation1 from '../../assets/Skin Suits/Half Sublimation Skin Suit/1000211198.png'
import halfSublimation2 from '../../assets/Skin Suits/Half Sublimation Skin Suit/1000211199.png'
import halfSublimation3 from '../../assets/Skin Suits/Half Sublimation Skin Suit/1000211200.png'
import normalSuit1 from '../../assets/Skin Suits/Normal Skin Suit/1000211197.png'
import normalSuit2 from '../../assets/Skin Suits/Normal Skin Suit/1000211201.png'

const SkinSuits = () => {
  const [view, setView] = useState('grid');
  const { addToCart } = useCart()

  const products = [
    {
      id: 1,
      name: "Half Sublimation Racing SkinSuit",
      image: halfSublimation1,
      price: 4999,
      description: "Professional half sublimation racing skinsuit with aerodynamic design",
      specs: {
        brand: "LGM",
        type: "Half Sublimation",
        material: "High-performance lycra",
        fit: "Race fit",
        features: "Aerodynamic, Moisture-wicking"
      }
    },
    {
      id: 2,
      name: "Half Sublimation Competition SkinSuit",
      image: halfSublimation2,
      price: 4599,
      description: "Competition-grade half sublimation skinsuit for professional athletes",
      specs: {
        brand: "LGM",
        type: "Half Sublimation",
        material: "Premium compression fabric",
        protection: "UV protection",
        features: "4-way stretch, Quick-dry"
      }
    },
    {
      id: 3,
      name: "Half Sublimation Training SkinSuit",
      image: halfSublimation3,
      price: 3999,
      description: "Comfortable half sublimation training skinsuit for practice sessions",
      specs: {
        brand: "LGM",
        type: "Half Sublimation",
        material: "Breathable fabric blend",
        comfort: "High",
        features: "Durable, Easy care"
      }
    },
    {
      id: 4,
      name: "Normal Racing SkinSuit",
      image: normalSuit1,
      price: 3499,
      description: "Classic normal racing skinsuit with proven performance",
      specs: {
        brand: "LGM",
        type: "Normal Suit",
        material: "Performance fabric",
        fit: "Regular fit",
        features: "Lightweight, Breathable"
      }
    },
    {
      id: 5,
      name: "Normal Training SkinSuit",
      image: normalSuit2,
      price: 2999,
      description: "Reliable normal skinsuit for training and practice",
      specs: {
        brand: "LGM",
        type: "Normal Suit",
        material: "Durable fabric",
        comfort: "High",
        features: "Easy care, Long-lasting"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <SubNav />
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="border-b border-gray-200 mb-8">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">SkinSuits</h1>
          <p className="text-lg text-gray-600 mb-6">Professional racing and training skinsuits</p>
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
                    className="px-6 cursor-pointer py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
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
        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Why Choose LGM SkinSuits?</h2>
        <div className="prose prose-lg text-gray-600">
          <p className="mb-4">
            LGM's skinsuits are designed for maximum performance and comfort. Our suits combine 
            advanced materials with ergonomic design to provide optimal aerodynamics and muscle 
            support during competition and training.
          </p>
          <p>
            From professional racing suits to comfortable training gear, each skinsuit is crafted 
            with attention to detail and quality to help you perform at your best.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[128px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full filter blur-[128px] opacity-10"></div>
    </div>
  )
}

export default SkinSuits

