import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import aluFrame1 from '../../assets/Quad Frame/Aluminium Quad Frame/1000210632.png'
import aluFrame2 from '../../assets/Quad Frame/Aluminium Quad Frame/1000210637.png'
import aluFrame3 from '../../assets/Quad Frame/Aluminium Quad Frame/1000210642.png'
import nylonFrame1 from '../../assets/Quad Frame/Naylon Black Frame/1000210611.png'
import nylonFrame2 from '../../assets/Quad Frame/Naylon Black Frame/1000210622.png'

const SpeedFrames = () => {
  const [view, setView] = useState('grid');
  const { addToCart } = useCart()

  const frames = [
    {
      id: 'alu-frame-1',
      name: "Aluminum Quad Frame Pro",
      image: aluFrame1,
      price: 1499,
      description: "Professional-grade aluminum quad frame for superior performance",
      specs: {
        brand: "LGM",
        material: "Aluminum",
        weight: "Light",
        durability: "High"
      }
    },
    {
      id: 'alu-frame-2',
      name: "Aluminum Racing Frame",
      image: aluFrame2,
      price: 1699,
      description: "Lightweight racing frame for competitive skating",
      specs: {
        brand: "LGM",
        material: "Aluminum",
        weight: "Ultra Light",
        durability: "High"
      }
    },
    {
      id: 'alu-frame-3',
      name: "Pro Competition Frame",
      image: aluFrame3,
      price: 1899,
      description: "Competition-grade aluminum frame for maximum speed",
      specs: {
        brand: "LGM",
        material: "Aluminum",
        weight: "Ultra Light",
        durability: "High"
      }
    },
    {
      id: 'nylon-frame-1',
      name: "Nylon Speed Frame",
      image: nylonFrame1,
      price: 999,
      description: "Durable nylon frame perfect for recreational skating",
      specs: {
        brand: "LGM",
        material: "Nylon",
        weight: "Medium",
        durability: "Medium"
      }
    },
    {
      id: 'nylon-frame-2',
      name: "Nylon Comfort Frame",
      image: nylonFrame2,
      price: 1199,
      description: "Comfortable nylon frame for everyday skating",
      specs: {
        brand: "LGM",
        material: "Nylon",
        weight: "Medium",
        durability: "Medium"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">Speed Frames</h1>
          <p className="text-lg text-gray-600">Professional frames for quad skating</p>
          <div className="flex items-center justify-between mt-6">
            <p className="text-gray-600">{frames.length} products</p>
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
          {frames.map(frame => (
            <div key={frame.id} className={`flex ${view === 'list' ? 'flex-row' : 'flex-col'} bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full`}>
              <div className={`${view === 'list' ? 'w-1/3 shrink-0' : 'w-full'}`}>
                <div className="aspect-square relative bg-gray-50 p-6">
                  <img 
                    src={frame.image} 
                    alt={frame.name}
                    className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className={`flex flex-col justify-between ${view === 'list' ? 'w-2/3' : 'w-full'}`}>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">{frame.name}</h3>
                    <p className="mt-2 text-gray-600 line-clamp-2">{frame.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                      <div>
                        <span className="font-medium">Brand:</span> {frame.specs.brand}
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                      </svg>
                      <div>
                        <span className="font-medium">Material:</span> {frame.specs.material}
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
                      </svg>
                      <div>
                        <span className="font-medium">Weight:</span> {frame.specs.weight}
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      </svg>
                      <div>
                        <span className="font-medium">Durability:</span> {frame.specs.durability}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 mt-auto border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Price</span>
                      <span className="text-2xl font-heading font-bold text-gray-900">₹{frame.price.toLocaleString()}</span>
                    </div>
                    <button 
                      onClick={() => addToCart(frame)}
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
      </div>

      {/* Product Information */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <section>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Professional Speed Frames</h2>
              <p className="text-gray-600 leading-relaxed">
                Our professional speed frames are engineered for maximum performance and durability. Available in both aluminum and nylon materials, these frames provide excellent stability and control for all types of quad skating.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Features & Benefits</h2>
              <p className="text-gray-600 leading-relaxed">
                Each frame is precision-engineered with high-quality materials. The aluminum frames offer superior strength-to-weight ratio for competitive skating, while our nylon frames provide excellent durability and value for recreational use.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Material Guide</h2>
              <p className="text-gray-600 leading-relaxed">
                Choose aluminum frames for maximum performance and lightweight construction, perfect for speed skating and competition. Opt for nylon frames if you're looking for durability and comfort in recreational skating.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeedFrames;
