import React, { useState } from 'react'
import SubNav from '../SubNav'

// Import hanger images
import metalHanger1 from '../../assets/Hangers/Quad Metal Hanger 8 mm/1000211063.png'
import metalHanger2 from '../../assets/Hangers/Quad Metal Hanger 8 mm/1000211064.png'
import nylonHanger1 from '../../assets/Hangers/Quad Naylon Hanger 7mm/1000211173.png'
import nylonHanger2 from '../../assets/Hangers/Quad Naylon Hanger 7mm/1000211174.png'

const Hangers = () => {
  const [view, setView] = useState('grid')

  const products = [
    {
      id: 1,
      name: "Quad Metal Hanger 8mm",
      image: metalHanger1,
      price: 599,
      description: "Professional-grade 8mm metal hanger for quad skates with superior durability",
      specs: {
        brand: "LGM",
        type: "Metal Hanger",
        material: "High-grade steel",
        size: "8mm",
        features: "Precision machined, Rust-resistant"
      }
    },
    {
      id: 2,
      name: "Quad Metal Hanger Pro",
      image: metalHanger2,
      price: 699,
      description: "Premium metal hanger with enhanced stability and strength",
      specs: {
        brand: "LGM",
        type: "Pro Metal Hanger",
        material: "Reinforced steel",
        size: "8mm",
        features: "Heavy-duty, Competition grade"
      }
    },
    {
      id: 3,
      name: "Quad Nylon Hanger 7mm",
      image: nylonHanger1,
      price: 399,
      description: "Lightweight nylon hanger perfect for recreational skating",
      specs: {
        brand: "LGM",
        type: "Nylon Hanger",
        material: "Durable nylon",
        size: "7mm",
        features: "Lightweight, Impact-resistant"
      }
    },
    {
      id: 4,
      name: "Quad Nylon Hanger Elite",
      image: nylonHanger2,
      price: 499,
      description: "Advanced nylon hanger with reinforced core for better performance",
      specs: {
        brand: "LGM",
        type: "Elite Nylon Hanger",
        material: "Reinforced nylon",
        size: "7mm",
        features: "Flex resistant, Enhanced durability"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <SubNav />
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="border-b border-gray-200 mb-8">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">Quad Skate Hangers</h1>
          <p className="text-lg text-gray-600 mb-6">Professional-grade hangers for optimal performance</p>
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
        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Why Choose LGM Hangers?</h2>
        <div className="prose prose-lg text-gray-600">
          <p className="mb-4">
            LGM's quad skate hangers are engineered for optimal performance and durability. Whether you 
            choose our premium metal hangers or lightweight nylon options, each product is manufactured 
            to precise specifications to ensure consistent performance and reliability.
          </p>
          <p>
            Our range includes options for both recreational and professional skaters, with materials 
            and designs chosen to meet the specific needs of different skating styles and skill levels.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[128px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full filter blur-[128px] opacity-10"></div>
    </div>
  )
}

export default Hangers
