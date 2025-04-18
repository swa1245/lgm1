import React from 'react'
import carbonFiber from '../assets/banner/carbon.jpg'
import Footer from './Footer';

const CarbonFiber = () => {
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
                ADVANCED TECHNOLOGY
              </div>
              <h2 className="text-5xl font-light text-gray-900 leading-tight">
                CARBON <span className="font-semibold text-orange-500">FIBER</span>
              </h2>
              <div className="h-px w-16 bg-gray-300"></div>
            </div>
            
            <div className="text-gray-600 text-lg space-y-6 font-light leading-relaxed">
              <p>
                We select our carbon material from the world's #1 carbon manufacturer from Japan. The carbon base of our inline skate boots is extra sturdy by introducing different types of carbon. The fibers are hand laid in the matrix according to the strain they will have to bear. The carbon is embedded in epoxy thermosetting resin.
              </p>
            </div>
            
            <div className="flex items-center gap-8">
              <button className="group relative px-8 py-3 bg-white text-gray-900 font-medium rounded-none border border-gray-300 hover:border-orange-500 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">EXPLORE MORE</span>
                <div className="absolute inset-0 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-gray-300"></div>
                <span className="text-orange-500 font-light text-sm">01</span>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="lg:w-1/2 mt-16 lg:mt-0">
            <div className="relative">
              {/* Image container with modern styling */}
              <div className="relative z-10 overflow-hidden group">
                {/* Main image */}
                <img 
                  src={carbonFiber} 
                  alt="Carbon Fiber Technology" 
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 group-hover:filter group-hover:brightness-110"
                />
                
                {/* Modern gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                
                {/* Text overlay with modern styling */}
                <div className="absolute bottom-0 left-0 p-8 w-full z-20">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-0.5 bg-orange-500"></div>
                      <span className="text-orange-400 text-xs font-medium uppercase tracking-wider">Premium Material</span>
                    </div>
                    <h3 className="text-white text-2xl font-light">Advanced <span className="font-semibold">Technology</span></h3>
                    <p className="text-gray-300 text-sm font-light max-w-xs leading-relaxed">
                      Premium Japanese carbon fiber for unmatched strength and performance
                    </p>
                  </div>
                </div>
                
                {/* Modern floating specs */}
                <div className="absolute top-8 right-8 flex flex-col gap-2">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 shadow-sm flex items-center gap-2 transform transition-transform duration-300 hover:-translate-y-1">
                    <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                    <span className="text-gray-900 text-sm">Ultra Lightweight</span>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 shadow-sm flex items-center gap-2 transform transition-transform duration-300 hover:-translate-y-1">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-900 text-sm">Superior Strength</span>
                  </div>
                </div>
                
                {/* Modern decorative elements */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-orange-500/30"></div>
                <div className="absolute -top-3 -left-3 w-24 h-24 border-l-2 border-t-2 border-sky-500/30"></div>
              </div>
              
              {/* Modern technical badge */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg py-6 px-3 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center gap-4 transform -rotate-90">
                  <span className="text-xs font-medium tracking-widest text-gray-500">JAPANESE</span>
                  <div className="h-px w-6 bg-orange-500"></div>
                  <span className="text-xs font-medium tracking-widest text-gray-800">CARBON</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </section>
  )
}

export default CarbonFiber
