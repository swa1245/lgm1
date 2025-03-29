import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import blackMagic100_1 from '../../assets/Inline Wheels/100mm Black Magic XF/1000211270.png'
import blackMagic100_2 from '../../assets/Inline Wheels/100mm Black Magic XF/1000212161.png'
import voodoo100_1 from '../../assets/Inline Wheels/100mm Voodoo Pro Tech XF/1000211261.png'
import trackAssault110_1 from '../../assets/Inline Wheels/110 mm Track Assult XXF/1000211252.png'
import voodoo110_1 from '../../assets/Inline Wheels/110 mm Voodoo Pro M Tech XF/1000211264.png'
import blueMagic110_1 from '../../assets/Inline Wheels/110mm Blue Magic Turbo XF - XXF/1000211259.png'

const Wheels = () => {
  const [view, setView] = useState('grid') // grid, list

  const wheels = [
    {
      id: 1,
      name: "90mm Black Magic XF",
      image: blackMagic100_1,
      price: 2499,
      description: "Professional racing wheels with superior grip",
      specs: {
        brand: "LGM",
        usage: "Skating",
        quantity: "8 pcs",
        size: "90mm"
      }
    },
    {
      id: 2,
      name: "100mm Black Magic XF",
      image: blackMagic100_2,
      price: 2999,
      description: "High-performance wheels for competitive skating",
      specs: {
        brand: "LGM",
        usage: "Skating",
        quantity: "8 pcs",
        size: "100mm"
      }
    },
    {
      id: 3,
      name: "110mm Black Magic XF",
      image: trackAssault110_1,
      price: 3499,
      description: "Premium racing wheels for maximum speed",
      specs: {
        brand: "LGM",
        usage: "Skating",
        quantity: "8 pcs",
        size: "110mm"
      }
    },
    {
      id: 4,
      name: "110mm Blue Magic Turbo XF-XXF",
      image: blueMagic110_1,
      price: 3999,
      description: "Elite performance wheels with turbo core",
      specs: {
        brand: "LGM",
        usage: "Skating",
        quantity: "8 pcs",
        size: "110mm"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-white font-body">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">Inline Skate Wheels</h1>
          <p className="text-lg text-gray-600">Premium wheels for professional performance</p>
          <div className="flex items-center justify-between mt-6">
            <p className="text-gray-600">{wheels.length} products</p>
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
          {wheels.map(wheel => (
            <div key={wheel.id} className={`flex ${view === 'list' ? 'flex-row' : 'flex-col'} bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full`}>
              <div className={`${view === 'list' ? 'w-1/3 shrink-0' : 'w-full'}`}>
                <div className="aspect-square relative bg-gray-50 p-6">
                  <img 
                    src={wheel.image} 
                    alt={wheel.name}
                    className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-gray-900 text-white text-xs font-medium px-2.5 py-1.5 rounded-full">
                      {wheel.specs.size}
                    </span>
                  </div>
                </div>
              </div>
              <div className={`flex flex-col justify-between ${view === 'list' ? 'w-2/3' : 'w-full'}`}>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">{wheel.name}</h3>
                    <p className="mt-2 text-gray-600 line-clamp-2">{wheel.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                      <div>
                        <span className="font-medium">Brand:</span> {wheel.specs.brand}
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                      <div>
                        <span className="font-medium">Usage:</span> {wheel.specs.usage}
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/>
                      </svg>
                      <div>
                        <span className="font-medium">Quantity:</span> {wheel.specs.quantity}
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5m11 5l-5-5m5 5v-4m0 4h-4"/>
                      </svg>
                      <div>
                        <span className="font-medium">Size:</span> {wheel.specs.size}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 mt-auto border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Price</span>
                      <span className="text-2xl font-heading font-bold text-gray-900">₹{wheel.price.toLocaleString()}</span>
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
        <div className="container  ">
          <div className="max-w-4xl mx-50 space-y-12">
            <section>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">125mm Inline Wheels</h2>
              <p className="text-gray-600 leading-relaxed">
                The 125mm inline skate wheel is truly paramount to the sport in the evolution of the inline world championships. Bont has won more medallions with these than 110mm wheels were permitted into the world championships than any other brand. The Bont Red Magic Marathon wheel dominates the 125mm Inline Wheel market.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">110mm Inline Wheels</h2>
              <p className="text-gray-600 leading-relaxed">
                The Bont 110mm Red magic inline wheel in conjunction with MPC wheels is the most winning 110mm inline skate wheel in the world. Now with the introduction of the Bont pro 110mm inline wheels we are racing the bar even higher.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">100mm Inline Wheels</h2>
              <p className="text-gray-600 leading-relaxed">
                The Bont Red magic 100mm inline racing wheel is the fastest 100mm inline wheel on the market for racing at the highest level. For skaters looking for serious and reliable wheels, Pro recreational skaters, the Bont 100mm inline wheels are the best on the market.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">90mm Inline Wheels</h2>
              <p className="text-gray-600 leading-relaxed">
                Bont makes a range of 90mm inline wheels from the professional Red magic to the 90mm Elemental inline wheel which is perfect for training and junior racing.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">80mm Inline Wheels</h2>
              <p className="text-gray-600 leading-relaxed">
                It wasn't some time ago that 80mm inline wheels were dominating the racing scene. These days 80mm inline wheels are more suited to junior racing and recreational skating. Bont makes a range of 80mm inline wheels from tubeless for all kinds of inline skating.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Wet Weather Inline Wheels</h2>
              <p className="text-gray-600 leading-relaxed">
                Partnering with MPC wheels, Bont provide skaters with the best wet weather wheels on the market. The MPC Storm Surge sets wet track records for breakfast. The MPC Storm Surge wet weather inline wheels are available in 125mm, 110mm, and 100mm.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wheels
