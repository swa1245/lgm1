import React from 'react'
import { useCart } from '../../context/CartContext'
import SubNav from '../SubNav'
import framesBanner from '../../assets/technology/speed-frames.jpg'

const Frames = () => {
  const { addToCart } = useCart();
  
  const frames = [
    {
      id: 'frame-1',
      name: 'Carbon Speed Frame',
      description: 'Professional racing frame with carbon fiber construction',
      price: 15999,
      image: '/images/frames/carbon-speed.jpg',
      specs: {
        material: 'Carbon Fiber',
        wheelSize: '110mm-125mm',
        length: '12.8"',
        weight: '195g'
      }
    },
    {
      id: 'frame-2',
      name: 'Aluminum Race Frame',
      description: 'Lightweight aluminum frame for competitive racing',
      price: 8999,
      image: '/images/frames/aluminum-race.jpg',
      specs: {
        material: 'Aircraft Aluminum',
        wheelSize: '100mm-110mm',
        length: '12.5"',
        weight: '245g'
      }
    },
    // Add more frames as needed
  ];

  return (
    <div className="min-h-screen bg-white">
      <SubNav />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900">
        <img 
          src={framesBanner}
          alt="Skating Frames"
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Professional Frames</h1>
            <p className="text-xl text-gray-200">Engineered for speed and precision</p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {frames.map((frame) => (
            <div key={frame.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={frame.image || framesBanner} 
                  alt={frame.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{frame.name}</h3>
                <p className="text-gray-600 mb-4">{frame.description}</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-gray-500">Material</span>
                      <p className="font-medium">{frame.specs.material}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Wheel Size</span>
                      <p className="font-medium">{frame.specs.wheelSize}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Length</span>
                      <p className="font-medium">{frame.specs.length}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Weight</span>
                      <p className="font-medium">{frame.specs.weight}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">₹{frame.price}</span>
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

      {/* Newsletter Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">Subscribe to our newsletter for the latest product updates and offers.</p>
            <form className="flex gap-4">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 cursor-pointer">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frames
