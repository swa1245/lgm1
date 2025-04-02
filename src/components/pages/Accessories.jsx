import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import allenKey1 from '../../assets/Accessories/Allen Key/1000211296(1).png'
import allenKey2 from '../../assets/Accessories/Allen Key/1000211296.png'
import puBush1 from '../../assets/Accessories/PU  Bush/1000211300(1).png'
import puBush2 from '../../assets/Accessories/PU  Bush/1000211302.png'
import quadLace1 from '../../assets/Accessories/Quad Lace/1000211287.png'
import quadLace2 from '../../assets/Accessories/Quad Lace/1000211288.png'
import quadLace3 from '../../assets/Accessories/Quad Lace/1000211289.png'
import shoeNuts1 from '../../assets/Accessories/shoe Nuts (Quad)/1000211297.png'
import shoeNuts2 from '../../assets/Accessories/shoe Nuts (Quad)/1000211299.png'
import SubNav from '../SubNav'

const Accessories = () => {
  const [view, setView] = useState('grid');
  const { addToCart } = useCart()

  const accessories = [
    {
      id: 1,
      name: "Allen Key Set",
      image: allenKey1,
      price: 299,
      description: "Professional allen key set for skate maintenance",
      specs: {
        brand: "LGM",
        type: "Maintenance Tool",
        material: "Steel",
        usage: "Skate Assembly"
      }
    },
    {
      id: 2,
      name: "PU Bush",
      image: puBush1,
      price: 199,
      description: "High-quality polyurethane bushings smooth turns",
      specs: {
        brand: "LGM",
        type: "Truck Component",
        material: "Polyurethane",
        usage: "Turning Control"
      }
    },
    {
      id: 3,
      name: "Quad Laces",
      image: quadLace1,
      price: 149,
      description: "Premium laces for quad skates",
      specs: {
        brand: "LGM",
        type: "Laces",
        material: "Nylon",
        usage: "Skate Lacing"
      }
    },
    {
      id: 4,
      name: "Shoe Nuts (Quad)",
      image: shoeNuts1,
      price: 99,
      description: "Essential nuts for quad skate assembly",
      specs: {
        brand: "LGM",
        type: "Hardware",
        material: "Steel",
        usage: "Skate Assembly"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <SubNav />
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">Skating Accessories</h1>
          <p className="text-lg text-gray-600">Essential accessories for your skating needs</p>
          <div className="flex items-center justify-between mt-6">
            <p className="text-gray-600">{accessories.length} products</p>
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
        <div className={`grid ${view === 'grid' ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1'} gap-6`}>
          {accessories.map(product => (
            <div key={product.id} className={`flex ${view === 'list' ? 'flex-row' : 'flex-col'} bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full max-w-sm`}>
              <div className={`${view === 'list' ? 'w-1/3 shrink-0' : 'w-full'}`}>
                <div className="aspect-square relative bg-gray-50 p-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className={`flex flex-col justify-between ${view === 'list' ? 'w-2/3' : 'w-full'}`}>
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">{product.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-start space-x-1">
                      <svg className="w-3 h-3 text-gray-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                      <div>
                        <span className="font-medium">Brand:</span> {product.specs.brand}
                      </div>
                    </div>
                    <div className="flex items-start space-x-1">
                      <svg className="w-3 h-3 text-gray-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                      <div>
                        <span className="font-medium">Type:</span> {product.specs.type}
                      </div>
                    </div>
                    <div className="flex items-start space-x-1">
                      <svg className="w-3 h-3 text-gray-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                      </svg>
                      <div>
                        <span className="font-medium">Material:</span> {product.specs.material}
                      </div>
                    </div>
                    <div className="flex items-start space-x-1">
                      <svg className="w-3 h-3 text-gray-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      <div>
                        <span className="font-medium">Usage:</span> {product.specs.usage}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-gray-900">₹{product.price}</div>
                    <button 
                      onClick={() => addToCart(product)}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Information Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 space-y-6">
          <h2 className="text-3xl font-heading font-bold text-gray-900">Why Choose LGM Accessories?</h2>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              Buy LGM equipment for inline speed skating. Items include replacement buckle kits, equipment, skate bags, 
              skate backpacks, skate suitcases, and skate helmets to suit kids, boys, girls, men, and women. 
              Buy the fastest and best inline skates.
            </p>

            <p>
              LGM skate backpacks and skate bags are made by skaters for skaters so we know what you need in your skate bag. 
              We have an abundance of pockets for your helmet, skate tools, and even pockets for your skates so your 
              skate jacket won't get dirty when you carry your skates. We have an assortment of skate tools such as 
              Allen keys for adjusting your inline skates. Our replacement skate buckle kits are perfect for replacing 
              your old skate buckles.
            </p>

            <p>
              Scuff the side of your skate? No problem just glue on some side or toe bumpers. LGM inline skate carbon 
              wedges interlock to form a wedge shape if you need to make a slight angle between your boot and your frame. 
              If your skate innersoles wear out, you can replace them with LGM replacement inline skate innersoles. 
              Our replacement skate innersoles are thin and light yet comfortable.
            </p>
          </div>

          {/* Call to Action */}
          {/* <div className="mt-8 flex justify-center">
            <button className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors duration-300 text-lg">
              Shop All Accessories
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Accessories
