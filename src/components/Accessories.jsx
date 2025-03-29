import React from 'react'
import accessoriesImage from '../assets/home/c1.jpg'  // Using the same image temporarily

const Accessories = () => {
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
                  backgroundImage: `url(${accessoriesImage})`
                }}
              ></div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-sky-600 text-lg font-semibold tracking-wider">COMPLETE YOUR GEAR</h3>
              <h2 className="text-6xl font-bold text-gray-900 tracking-tight">ACCESSORIES</h2>
            </div>
            <div className="text-gray-600 text-lg leading-relaxed space-y-4">
              <p>
                Enhance your skating experience with our premium range of accessories. From protective gear to stylish apparel, we've got everything you need to perform at your best.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                <div className="bg-white/80 p-4 rounded-lg border border-sky-400/20 shadow-sm">
                  <h4 className="text-orange-500 font-semibold mb-2">Protection</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Knee Pads</li>
                    <li>• Wrist Guards</li>
                    <li>• Helmets</li>
                  </ul>
                </div>
                <div className="bg-white/80 p-4 rounded-lg border border-sky-400/20 shadow-sm">
                  <h4 className="text-orange-500 font-semibold mb-2">Apparel</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Racing Suits</li>
                    <li>• Training Gear</li>
                    <li>• Casual Wear</li>
                  </ul>
                </div>
              </div>
              <p className="text-sky-600/80 font-medium">
                Quality gear for both competitive athletes and recreational skaters.
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <button className="group relative px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-orange-600">
                <span className="relative z-10">VIEW ALL</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              <div className="h-[2px] w-12 bg-sky-400"></div>
              <span className="text-orange-500 font-semibold tracking-wider">07</span>
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

export default Accessories
