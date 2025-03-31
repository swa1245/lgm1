import React, { useState } from 'react'
import SubNav from '../SubNav'

// Import bag images
import hqInlineBag1 from '../../assets/Bags/HQ Inline Bag/WhatsApp Image 2025-02-17 at 11.52.09 PM.jpeg'
import hqInlineBag2 from '../../assets/Bags/HQ Inline Bag/WhatsApp Image 2025-02-17 at 11.59.23 PM (1).jpeg'
import hqQuadBag1 from '../../assets/Bags/HQ Quad  Bag/1000211167.png'
import hqQuadBag2 from '../../assets/Bags/HQ Quad  Bag/1000211168.png'
import proInlineBag1 from '../../assets/Bags/Pro Inline Bag/1000211148.png'
import proInlineBag2 from '../../assets/Bags/Pro Inline Bag/1000211169.png'
import smallQuadBag1 from '../../assets/Bags/Small Quad Bag/1000211158.png'
import smallQuadBag2 from '../../assets/Bags/Small Quad Bag/1000211160.png'

const Bags = () => {
  const [view, setView] = useState('grid')

  const products = [
    {
      id: 1,
      name: "HQ Inline Skate Bag",
      image: hqInlineBag1,
      price: 1999,
      description: "High-quality inline skate bag with premium storage solutions",
      specs: {
        brand: "LGM",
        type: "Inline Skate Bag",
        material: "Durable Polyester",
        capacity: "Large",
        features: "Multiple compartments, Shoulder strap"
      }
    },
    {
      id: 2,
      name: "HQ Quad Skate Bag",
      image: hqQuadBag1,
      price: 1899,
      description: "Professional quad skate bag with protective padding",
      specs: {
        brand: "LGM",
        type: "Quad Skate Bag",
        material: "Heavy-duty Nylon",
        capacity: "Large",
        features: "Padded interior, Water-resistant"
      }
    },
    {
      id: 3,
      name: "Pro Inline Skate Bag",
      image: proInlineBag1,
      price: 2499,
      description: "Premium professional inline skate bag with advanced features",
      specs: {
        brand: "LGM",
        type: "Pro Inline Bag",
        material: "Premium Nylon",
        capacity: "Extra Large",
        features: "Ventilation, Reinforced bottom"
      }
    },
    {
      id: 4,
      name: "Small Quad Skate Bag",
      image: smallQuadBag1,
      price: 1299,
      description: "Compact quad skate bag perfect for casual skaters",
      specs: {
        brand: "LGM",
        type: "Small Quad Bag",
        material: "Lightweight Polyester",
        capacity: "Medium",
        features: "Easy-carry handle, Zip pockets"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <SubNav />
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="border-b border-gray-200 mb-8">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">Skating Bags</h1>
          <p className="text-lg text-gray-600 mb-6">Professional storage solutions for your skating equipment</p>
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
        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Why Choose LGM Skating Bags?</h2>
        <div className="prose prose-lg text-gray-600">
          <p className="mb-4">
            LGM skating bags are designed with the needs of both recreational and professional skaters in mind. 
            Our bags feature durable materials, thoughtful compartmentalization, and ergonomic designs to protect 
            your valuable skating equipment while making transportation effortless.
          </p>
          <p>
            From compact bags for casual skaters to professional-grade storage solutions for competitive athletes, 
            each LGM bag is crafted with attention to detail and built to last. Experience the perfect blend of 
            functionality, style, and durability with LGM skating bags.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[128px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full filter blur-[128px] opacity-10"></div>
    </div>
  )
}

export default Bags
