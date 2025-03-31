import React from 'react'
import foamImage from '../assets/Guard Set & Ezeefit/Foam Knee Pad/1000211137.png'

const SkateFoam = () => {
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
                  backgroundImage: `url(${foamImage})`
                }}
              ></div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-sky-600 text-lg font-semibold tracking-wider">PREMIUM QUALITY</h3>
              <h2 className="text-6xl font-bold text-gray-900 tracking-tight">SKATE FOAM</h2>
            </div>
            <div className="text-gray-600 text-lg leading-relaxed">
              <p>
                Unlike most brands of inline skates, we exclusively use closed cell memory foam in our skate production. Most brands of inline skates use open-cell foam which is cheaper and absorbs water. Closed-cell foam does not absorb your sweat or water that you may skate through. This keeps your inline skates free of moisture.
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <button className="group relative px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-orange-600">
                <span className="relative z-10">LEARN MORE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              <div className="h-[2px] w-12 bg-sky-400"></div>
              <span className="text-orange-500 font-semibold tracking-wider">02</span>
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

export default SkateFoam
