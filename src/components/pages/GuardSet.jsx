import React, { useState } from 'react'
import SubNav from '../SubNav'

// Import guard set images
import guardSet1 from '../../assets/Guard Set & Ezeefit/Guard Set/1000211146.png'
import guardSet2 from '../../assets/Guard Set & Ezeefit/Guard Set/1000211150.png'
import ezeefit1 from '../../assets/Guard Set & Ezeefit/Ezeefit Ankle Booties/1000211134.png'
import ezeefit2 from '../../assets/Guard Set & Ezeefit/Ezeefit Ankle Booties/1000211135.png'
import foamKnee1 from '../../assets/Guard Set & Ezeefit/Foam Knee Pad/1000211137.png'
import foamKnee2 from '../../assets/Guard Set & Ezeefit/Foam Knee Pad/1000211140.png'
import noFear1 from '../../assets/Guard Set & Ezeefit/Hq Guard Set ( No Fear)/1000211155.png'
import noFear2 from '../../assets/Guard Set & Ezeefit/Hq Guard Set ( No Fear)/1000211156.png'

const GuardSet = () => {
  const [view, setView] = useState('grid')

  const products = [
    {
      id: 1,
      name: "Professional Guard Set",
      image: guardSet1,
      price: 1299,
      description: "Complete protection set for professional skaters with premium padding",
      specs: {
        brand: "LGM",
        type: "Guard Set",
        material: "High-impact resistant plastic",
        includes: "Knee, Elbow, Wrist Guards",
        features: "Adjustable straps, Ventilated"
      }
    },
    {
      id: 2,
      name: "Ezeefit Ankle Booties",
      image: ezeefit1,
      price: 799,
      description: "Comfortable ankle protection booties for extended skating sessions",
      specs: {
        brand: "LGM",
        type: "Ankle Protection",
        material: "Neoprene blend",
        size: "Multiple sizes",
        features: "Anti-blister, Moisture-wicking"
      }
    },
    {
      id: 3,
      name: "Foam Knee Pad Pro",
      image: foamKnee1,
      price: 599,
      description: "High-density foam knee pads for maximum impact protection",
      specs: {
        brand: "LGM",
        type: "Knee Protection",
        material: "High-density foam",
        coverage: "Full knee",
        features: "Shock absorbing, Ergonomic fit"
      }
    },
    {
      id: 4,
      name: "HQ No Fear Guard Set",
      image: noFear1,
      price: 1499,
      description: "Premium guard set for fearless skating performance",
      specs: {
        brand: "LGM",
        type: "Complete Guard Set",
        material: "Premium composites",
        protection: "Advanced",
        features: "Impact resistant, Quick-release"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <SubNav />
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="border-b border-gray-200 mb-8">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">Guard Set & Ezeefit</h1>
          <p className="text-lg text-gray-600 mb-6">Professional protection gear for safe skating</p>
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
        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Why Choose LGM Protection Gear?</h2>
        <div className="prose prose-lg text-gray-600">
          <p className="mb-4">
            LGM's protection gear is designed with safety and comfort as our top priorities. Our guard sets 
            and protective equipment are crafted using premium materials and innovative technology to provide 
            maximum protection without compromising mobility or comfort.
          </p>
          <p>
            From professional-grade guard sets to specialized ankle protection, each product is thoroughly 
            tested to meet the highest safety standards. Trust LGM to keep you protected while you push 
            your skating limits.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[128px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full filter blur-[128px] opacity-10"></div>
    </div>
  )
}

export default GuardSet
