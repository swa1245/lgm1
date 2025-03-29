import React, { useState } from 'react'
import classicQuad1 from '../../assets/Quad Shoes/Classic Quad Shoes/1000210301 (1).png'
import classicQuad2 from '../../assets/Quad Shoes/Classic Quad Shoes/1000210418.png'
import hqQuad1 from '../../assets/Quad Shoes/HQ Quad shoe/1000210424.png'
import hqQuad2 from '../../assets/Quad Shoes/HQ Quad shoe/1000210425.png'
import superQuad1 from '../../assets/Quad Shoes/Super Quad Shoes/1000210421.png'
import superQuad2 from '../../assets/Quad Shoes/Super Quad Shoes/1000210422.png'
import superQuad3 from '../../assets/Quad Shoes/Super Quad Shoes/1000210423.png'

const Boots = () => {
  const [view, setView] = useState('grid')

  const boots = [
    {
      id: 1,
      name: "Baby & Tenacity Shoes",
      image: classicQuad1,
      price: 1999,
      description: "Perfect skating boots for beginners and young skaters",
      specs: {
        brand: "LGM",
        usage: "Skating",
        size: "Baby & Tenacity Size",
        material: "Synthetic"
      }
    },
    {
      id: 2,
      name: "Classic Quad Shoes",
      image: classicQuad2,
      price: 2499,
      description: "Traditional quad skating boots with timeless design",
      specs: {
        brand: "LGM",
        usage: "Skating",
        size: "All Size",
        material: "Synthetic"
      }
    },
    {
      id: 3,
      name: "HQ Quad Shoes",
      image: hqQuad1,
      price: 2999,
      description: "High-quality quad skating boots for advanced skaters",
      specs: {
        brand: "LGM",
        usage: "Skating",
        size: "All Size",
        material: "Synthetic"
      }
    },
    {
      id: 4,
      name: "Super Quad Shoes",
      image: superQuad1,
      price: 3499,
      description: "Premium quad skating boots for professional performance",
      specs: {
        brand: "LGM",
        usage: "Skating",
        size: "All Size",
        material: "Synthetic"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">Quad Skating Boots</h1>
          <p className="text-lg text-gray-600">Professional boots for quad skating</p>
          <div className="flex items-center justify-between mt-6">
            <p className="text-gray-600">{boots.length} products</p>
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
          {boots.map(boot => (
            <div key={boot.id} className={`flex ${view === 'list' ? 'flex-row' : 'flex-col'} bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full`}>
              <div className={`${view === 'list' ? 'w-1/3 shrink-0' : 'w-full'}`}>
                <div className="aspect-square relative bg-gray-50 p-6">
                  <img 
                    src={boot.image} 
                    alt={boot.name}
                    className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className={`flex flex-col justify-between ${view === 'list' ? 'w-2/3' : 'w-full'}`}>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">{boot.name}</h3>
                    <p className="mt-2 text-gray-600 line-clamp-2">{boot.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                      <div>
                        <span className="font-medium">Brand:</span> {boot.specs.brand}
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                      <div>
                        <span className="font-medium">Usage:</span> {boot.specs.usage}
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                      </svg>
                      <div>
                        <span className="font-medium">Size:</span> {boot.specs.size}
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h14a2 2 0 012 2v12a4 4 0 01-4 4H7zm0 0h12M7 21V5m12 0v16"/>
                      </svg>
                      <div>
                        <span className="font-medium">Material:</span> {boot.specs.material}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 mt-auto border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Price</span>
                      <span className="text-2xl font-heading font-bold text-gray-900">₹{boot.price.toLocaleString()}</span>
                    </div>
                    <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 whitespace-nowrap">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                      </svg>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Information */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <section>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Professional Quad Boots</h2>
              <p className="text-gray-600 leading-relaxed">
                Our professional quad boots are designed for serious skaters who demand the best in performance and comfort. Made with premium materials and expert craftsmanship, these boots provide excellent support and durability for all types of quad skating.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Features & Benefits</h2>
              <p className="text-gray-600 leading-relaxed">
                Each boot is crafted with high-quality leather, reinforced stitching, and ergonomic design to ensure maximum comfort and control. The boots feature padded collars, moisture-wicking linings, and anatomical footbeds for extended skating sessions.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Size & Fit Guide</h2>
              <p className="text-gray-600 leading-relaxed">
                For the best fit, we recommend measuring your feet carefully and referring to our size chart. Our boots are available in various widths to accommodate different foot shapes. The boots will break in and mold to your feet over time for a custom fit.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Boots
