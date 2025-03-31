import React, { useState } from 'react'
import SubNav from '../SubNav'

// Import images
import axle1 from '../../assets/Spacers -Axle - Adapter/HQ Axle/1000211240.png'
import axle2 from '../../assets/Spacers -Axle - Adapter/HQ Axle/1000211241.png'
import axle3 from '../../assets/Spacers -Axle - Adapter/HQ Axle/1000211353.png'

const SpacersAxleAdapter = () => {
  const [view, setView] = useState('grid')

  const products = [
    {
      id: 1,
      name: "HQ Precision Axle",
      image: axle1,
      price: 299,
      description: "High-quality precision axle for optimal wheel alignment and performance",
      specs: {
        brand: "LGM",
        type: "Precision Axle",
        material: "Hardened steel",
        size: "Standard",
        features: "Precision machined, Rust-resistant"
      }
    },
    {
      id: 2,
      name: "Pro Spacer Kit",
      image: axle2,
      price: 199,
      description: "Professional spacer kit for precise wheel spacing and alignment",
      specs: {
        brand: "LGM",
        type: "Spacer Kit",
        material: "Aircraft aluminum",
        compatibility: "Universal",
        features: "Multiple sizes, High precision"
      }
    },
    {
      id: 3,
      name: "Premium Axle Adapter",
      image: axle3,
      price: 399,
      description: "Premium adapter for seamless compatibility between different wheel types",
      specs: {
        brand: "LGM",
        type: "Axle Adapter",
        material: "Premium alloy",
        compatibility: "Multi-fit",
        features: "Universal fit, Easy installation"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <SubNav />
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="border-b border-gray-200 mb-8">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">Spacers, Axles & Adapters</h1>
          <p className="text-lg text-gray-600 mb-6">Essential components for perfect wheel alignment</p>
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
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
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
        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Why Choose LGM Components?</h2>
        <div className="prose prose-lg text-gray-600">
          <p className="mb-4">
            LGM's spacers, axles, and adapters are precision-engineered to ensure perfect wheel alignment 
            and optimal performance. Each component is manufactured to exact specifications using premium 
            materials for durability and reliability.
          </p>
          <p>
            Whether you're a professional skater or enthusiast, our components provide the perfect fit 
            and seamless compatibility across different wheel types and configurations.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[128px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full filter blur-[128px] opacity-10"></div>
    </div>
  )
}

export default SpacersAxleAdapter
