import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import ScrollToTop from '../ScrollToTop';
import SubNav from '../SubNav';

// Import wheel images
// 90mm Black Magic
import blackMagic90_1 from '../../assets/Inline Wheels/90mm Black Magic XF/1000211267.png'
import blackMagic90_2 from '../../assets/Inline Wheels/90mm Black Magic XF/1000211269.png'
import blackMagic90_3 from '../../assets/Inline Wheels/90mm Black Magic XF/1000211270.png'

// 100mm Black Magic
import blackMagic100_1 from '../../assets/Inline Wheels/100mm Black Magic XF/1000211270.png'
import blackMagic100_2 from '../../assets/Inline Wheels/100mm Black Magic XF/1000212161.png'
import blackMagic100_3 from '../../assets/Inline Wheels/100mm Black Magic XF/1000212164.png'

// 100mm Voodoo Pro
import voodoo100_1 from '../../assets/Inline Wheels/100mm Voodoo Pro Tech XF/1000211261.png'
import voodoo100_2 from '../../assets/Inline Wheels/100mm Voodoo Pro Tech XF/1000211262.png'
import voodoo100_3 from '../../assets/Inline Wheels/100mm Voodoo Pro Tech XF/1000211263.png'

// 110mm Track Assault
import trackAssault110_1 from '../../assets/Inline Wheels/110 mm Track Assult XXF/1000211252.png'
import trackAssault110_2 from '../../assets/Inline Wheels/110 mm Track Assult XXF/1000211253.png'
import trackAssault110_3 from '../../assets/Inline Wheels/110 mm Track Assult XXF/1000211258.png'

// 110mm Blue Magic
import blueMagic110_1 from '../../assets/Inline Wheels/110mm Blue Magic Turbo XF - XXF/1000211259.png'
import blueMagic110_2 from '../../assets/Inline Wheels/110mm Blue Magic Turbo XF - XXF/1000211260.png'
import blueMagic110_3 from '../../assets/Inline Wheels/110mm Blue Magic Turbo XF - XXF/1000211266 (1).png'

const Wheels = () => {
  const [view, setView] = useState('grid');
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const wheels = [
    {
      id: 1,
      name: "90mm Black Magic XF",
      images: [blackMagic90_1, blackMagic90_2, blackMagic90_3],
      image: blackMagic90_1,
      price: 2499,
      description: "Professional racing wheels with superior grip and durability",
      specs: {
        brand: "LGM",
        usage: "Speed Skating",
        quantity: "8 pcs",
        size: "90mm",
        hardness: "85A",
        core: "Aluminum"
      }
    },
    {
      id: 2,
      name: "100mm Black Magic XF",
      images: [blackMagic100_1, blackMagic100_2, blackMagic100_3],
      image: blackMagic100_1,
      price: 2999,
      description: "High-performance wheels for competitive skating with enhanced control",
      specs: {
        brand: "LGM",
        usage: "Racing",
        quantity: "8 pcs",
        size: "100mm",
        hardness: "86A",
        core: "Aluminum"
      }
    },
    {
      id: 3,
      name: "100mm Voodoo Pro Tech XF",
      images: [voodoo100_1, voodoo100_2, voodoo100_3],
      image: voodoo100_1,
      price: 3299,
      description: "Premium racing wheels with Voodoo Pro technology for maximum performance",
      specs: {
        brand: "LGM",
        usage: "Professional Racing",
        quantity: "8 pcs",
        size: "100mm",
        hardness: "87A",
        core: "Carbon Fiber"
      }
    },
    {
      id: 4,
      name: "110mm Track Assault XXF",
      images: [trackAssault110_1, trackAssault110_2, trackAssault110_3],
      image: trackAssault110_1,
      price: 3499,
      description: "Elite track wheels designed for maximum speed and minimal resistance",
      specs: {
        brand: "LGM",
        usage: "Track Racing",
        quantity: "8 pcs",
        size: "110mm",
        hardness: "88A",
        core: "Aluminum"
      }
    },
    {
      id: 5,
      name: "110mm Blue Magic Turbo XF-XXF",
      images: [blueMagic110_1, blueMagic110_2, blueMagic110_3],
      image: blueMagic110_1,
      price: 3999,
      description: "Premium performance wheels with Blue Magic technology for elite skaters",
      specs: {
        brand: "LGM",
        usage: "Professional Racing",
        quantity: "8 pcs",
        size: "110mm",
        hardness: "88A",
        core: "Carbon Fiber"
      }
    }
  ];
  
  // Image modal functions
  const openImageModal = (product, index = 0) => {
    setSelectedProduct(product);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedProduct(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => 
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      );
    }
  }

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
                    <button 
                      onClick={() => addToCart(wheel)}
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
