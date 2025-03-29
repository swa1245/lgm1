import React from 'react'
import bearingsImage from '../assets/home/c1.jpg'  // Using the same image temporarily

const Bearings = () => {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left side - Image with background */}
          <div className="relative group">
            {/* Animated circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[120%] h-[120%] rounded-full border-2 border-sky-600 opacity-70 animate-spin-slow"></div>
              <div className="absolute w-[100%] h-[100%] rounded-full border-2 border-orange-500 opacity-80 animate-spin-slower"></div>
            </div>
            
            <div className="aspect-square relative">
              {/* Background circle */}
              <div 
                className="absolute inset-0 bg-cover rounded-full transform -rotate-45 transition-transform duration-700 group-hover:rotate-[0deg]"
                style={{
                  backgroundImage: `url(${bearingsImage})`
                }}
              ></div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-sky-600 text-lg font-semibold tracking-wider">PRECISION ENGINEERED</h3>
              <h2 className="text-6xl font-bold text-gray-900 tracking-tight">BEARINGS</h2>
            </div>
            <div className="text-gray-600 text-lg leading-relaxed space-y-4">
              <p>
                Our bearings are produced to the highest standards in the industry. Each bearing undergoes a thorough quality control process to ensure optimal performance and durability.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                <div className="bg-white/80 p-4 rounded-lg border border-sky-400/20 shadow-sm">
                  <h4 className="text-orange-500 font-semibold mb-2">Specifications</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• ABEC-9 Rating</li>
                    <li>• Ceramic Hybrid</li>
                    <li>• Titanium Races</li>
                  </ul>
                </div>
                <div className="bg-white/80 p-4 rounded-lg border border-sky-400/20 shadow-sm">
                  <h4 className="text-orange-500 font-semibold mb-2">Features</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Pre-Lubricated</li>
                    <li>• Dust Sealed</li>
                    <li>• High Speed Rated</li>
                  </ul>
                </div>
              </div>
              <p className="text-sky-600/80 font-medium">
                Experience the smoothest ride with our competition-grade bearings.
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <button className="group relative px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-orange-600">
                <span className="relative z-10">SHOP NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              <div className="h-[2px] w-12 bg-sky-400"></div>
              <span className="text-orange-500 font-semibold tracking-wider">06</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full filter blur-[128px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400 rounded-full filter blur-[128px] opacity-10"></div>
    </section>
  )
}

export default Bearings
