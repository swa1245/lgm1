import React, { useState } from 'react'
import hyperRollo1 from '../../assets/Quad Wheels/Hyper Rollo Wheel/1000210666.png'
import omenWheel from '../../assets/Quad Wheels/Omen Wheel ( Road & Rink)/1000210676.png'
import viperWheel from '../../assets/Quad Wheels/Viper Wheel (Road & Rink)/1000211348.png'
import yoruWheel from '../../assets/Quad Wheels/Hyper Rollo Wheel/1000211310.png'

const QuadWheels = () => {
  const [view, setView] = useState('grid')

  const wheelProducts = [
    {
      id: 1,
      name: "Hyper Rollo Wheel",
      image: hyperRollo1,
      price: 1999,
      description: "Professional quad skating wheels for superior performance",
      specs: {
        brand: "LGM",
        size: "56mm",
        quantity: "8 pcs",
        usage: "Skating"
      }
    },
    {
      id: 2,
      name: "Omen Wheel",
      image: omenWheel,
      price: 2499,
      description: "High-quality wheels for road and rink skating",
      specs: {
        brand: "LGM",
        size: "65mm",
        quantity: "8 pcs",
        usage: "Skating"
      }
    },
    {
      id: 3,
      name: "Viper Wheel",
      image: viperWheel,
      price: 2999,
      description: "Premium wheels for advanced skaters",
      specs: {
        brand: "LGM",
        size: "65mm",
        quantity: "8 pcs",
        usage: "Skating"
      }
    },
    {
      id: 4,
      name: "Yoru Wheel",
      image: yoruWheel,
      price: 2799,
      description: "Versatile wheels for all skating styles",
      specs: {
        brand: "LGM",
        size: "65mm",
        quantity: "8 pcs",
        usage: "Skating"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">Quad Skating Wheels</h1>
          <p className="text-lg text-gray-600">Professional wheels for quad skating</p>
          <div className="flex items-center justify-between mt-6">
            <p className="text-gray-600">{wheelProducts.length} products</p>
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
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className={`grid ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-8`}>
          {wheelProducts.map(product => (
            <div key={product.id} className={`flex ${view === 'list' ? 'flex-row' : 'flex-col'} bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full`}>
              <div className={`${view === 'list' ? 'w-1/3 shrink-0' : 'w-full'}`}>
                <div className="aspect-square relative bg-gray-50 p-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className={`flex flex-col justify-between ${view === 'list' ? 'w-2/3' : 'w-full'}`}>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">{product.name}</h3>
                    <p className="mt-2 text-gray-600 line-clamp-2">{product.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                      <div>
                        <span className="font-medium">Brand:</span> {product.specs.brand}
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                      <div>
                        <span className="font-medium">Size:</span> {product.specs.size}
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                      </svg>
                      <div>
                        <span className="font-medium">Quantity:</span> {product.specs.quantity}
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      <div>
                        <span className="font-medium">Usage:</span> {product.specs.usage}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">₹{product.price}</div>
                    <button className="inline-flex items-center justify-center px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuadWheels
