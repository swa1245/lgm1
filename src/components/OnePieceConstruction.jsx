import React from 'react'
import onePieceImage from '../assets/banner/one-piece-construction_900x.webp'  

const OnePieceConstruction = () => {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full filter blur-[120px] opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-400 rounded-full filter blur-[120px] opacity-5"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 border-l-2 border-sky-500 text-sky-600 text-sm font-medium tracking-wider">
                INNOVATIVE DESIGN
              </div>
              <h2 className="text-5xl font-light text-gray-900 leading-tight">
                ONE PIECE <span className="font-semibold text-orange-500">CONSTRUCTION</span>
              </h2>
              <div className="h-px w-16 bg-gray-300"></div>
            </div>
            
            <div className="text-gray-600 text-lg space-y-6 font-light leading-relaxed">
              <p>
                Our method of producing high-end inline skates utilizes a unique process we call One-Piece Construction. While more skill-intensive and time-consuming than mainstream methods, this approach leads the market in performance.
              </p>
              <p>
                Unlike two-piece boots where the base is pre-made and components are glued on separately, our one-piece construction stitches the outer skin directly to anti-stretch material bonded into the carbon. This ensures your skates maintain their shape and performance over time.
              </p>
              <p className="text-sky-600 font-normal">
                This process was pioneered in the production of custom speed skates, setting new standards in skate manufacturing.
              </p>
            </div>
            
            <div className="flex items-center gap-8">
              <button className="group relative px-8 py-3 bg-white text-gray-900 font-medium rounded-none border border-gray-300 hover:border-orange-500 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">DISCOVER MORE</span>
                <div className="absolute inset-0 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-gray-300"></div>
                <span className="text-orange-500 font-light text-sm">03</span>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="lg:w-1/2 mt-16 lg:mt-0">
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 overflow-hidden">
                <img 
                  src={onePieceImage} 
                  alt="One Piece Construction" 
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                
                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-white text-2xl font-light mb-2">Innovative <span className="font-semibold">Design</span></h3>
                  <p className="text-gray-200 text-sm font-light max-w-xs">
                    Our one-piece construction ensures superior performance and durability
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-gray-200"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-gray-200"></div>
              
              {/* Feature callouts */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-5 py-3 shadow-sm">
                <span className="text-gray-900 font-light">Premium Materials</span>
              </div>
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm px-5 py-3 shadow-sm">
                <span className="text-gray-900 font-light">Superior Performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OnePieceConstruction
