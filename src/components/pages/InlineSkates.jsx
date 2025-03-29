import React from 'react'
import { Link } from 'react-router-dom'
import wheels from '../../assets/inline/banner/w.png'
import boats from '../../assets/inline/banner/b.png'
import frames from '../../assets/inline/banner/f.png'
import bg from '../../assets/inline/banner/bg.webp'

const InlineSkates = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 from-10% via-blue-200 via-50% to-white to-90%">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Accent Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-orange-500 via-blue-500 to-transparent"></div>

        <div className="container mx-auto px-4 flex items-center relative z-10">
          {/* Left Content */}
          <div className="w-1/2 py-12">
            <div className="space-y-10">
              {/* Premium Badge */}
              <div className="inline-flex items-center">
                <div className="px-4 py-2 bg-white rounded-lg shadow-md border border-gray-100">
                  <span className="text-gray-600 font-medium tracking-wide text-sm uppercase">New Collection 2025</span>
                </div>
              </div>
              
              {/* Main Heading */}
              <div>
                <h1 className="text-[4.5rem] leading-none font-bold text-gray-900">
                  Premium<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                    Inline Skates
                  </span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
                  Experience unparalleled performance with our professional-grade inline skates. 
                  Crafted for speed, designed for champions.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-6">
                <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-gray-900/10">
                  Shop Collection
                </button>
                <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
                  Learn More
                </button>
              </div>

              {/* Product Features */}
              <div className="grid grid-cols-3 gap-8 pt-10 border-t border-gray-100">
                <div>
                  <div className="text-2xl font-semibold text-gray-900 mb-1">Premium</div>
                  <div className="text-gray-500">Materials</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-gray-900 mb-1">2 Years</div>
                  <div className="text-gray-500">Warranty</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-gray-900 mb-1">Global</div>
                  <div className="text-gray-500">Shipping</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-1/2 relative">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/5 to-orange-500/5 rounded-2xl blur-2xl group-hover:from-blue-600/10 group-hover:to-orange-500/10 transition duration-500"></div>
              <div className="relative">
                <img 
                  src={bg}
                  alt="Pro Series Inline Skates"
                  className="w-[120%] h-auto transform -rotate-12 group-hover:rotate-0 transition-all duration-700"
                />
                {/* Product Details Card */}
                {/* <div className="absolute top-6 right-6 bg-white rounded-lg p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-gray-900 font-medium">In Stock</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <span>•</span>
                      <span>Carbon Fiber Frame</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>•</span>
                      <span>110mm Premium Wheels</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>•</span>
                      <span>ABEC-9 Bearings</span>
                    </div>
                  </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-gradient-to-br from-orange-100 from-10% via-blue-100 via-50% to-transparent to-90%">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
              <p className="text-gray-500">Discover our premium collection of skating equipment</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="p-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-4 gap-8">
            {/* Skates */}
            <div className="group">
              <div className="relative bg-white rounded-xl overflow-hidden mb-4 shadow-lg shadow-gray-100/50">
                <div className="absolute top-4 left-4 z-10">
                  <div className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">New</div>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 bg-white shadow-lg text-gray-900 font-medium rounded-full">$599</div>
                </div>
                <div className="p-6">
                  <img 
                    src={bg}
                    alt="Pro Series Skates"
                    className="w-full h-64 object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Pro Series X1</h3>
              <p className="text-gray-500 text-sm mb-4">Competition-grade speed skates</p>
              <Link to="/roller-skates" className="block">
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-gray-900/10">
                  Shop Now
                </button>
              </Link>
            </div>

            {/* Boots */}
            <div className="group">
              <div className="relative bg-white rounded-xl overflow-hidden mb-4 shadow-lg shadow-gray-100/50">
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 bg-white shadow-lg text-gray-900 font-medium rounded-full">$299</div>
                </div>
                <div className="p-6">
                  <img 
                    src={boats}
                    alt="Custom Boots"
                    className="w-full h-64 object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Elite Boots</h3>
              <p className="text-gray-500 text-sm mb-4">Custom-fitted racing boots</p>
              <Link to="/boots" className="block">
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-gray-900/10">
                  Shop Now
                </button>
              </Link>
            </div>

            {/* Frames */}
            <div className="group">
              <div className="relative bg-white rounded-xl overflow-hidden mb-4 shadow-lg shadow-gray-100/50">
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 bg-white shadow-lg text-gray-900 font-medium rounded-full">$199</div>
                </div>
                <div className="p-6">
                  <img 
                    src={frames}
                    alt="Pro Frames"
                    className="w-full h-64 object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Carbon Frames</h3>
              <p className="text-gray-500 text-sm mb-4">Ultralight racing frames</p>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-gray-900/10">
                Add to Cart
              </button>
            </div>

            {/* Wheels */}
            <div className="group">
              <div className="relative bg-white rounded-xl overflow-hidden mb-4 shadow-lg shadow-gray-100/50">
                <div className="absolute top-4 left-4 z-10">
                  <div className="px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full">Sale</div>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 bg-white shadow-lg text-gray-900 font-medium rounded-full">$89</div>
                </div>
                <div className="p-6">
                  <img 
                    src={wheels}
                    alt="Pro Wheels"
                    className="w-full h-64 object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Speed Wheels</h3>
              <p className="text-gray-500 text-sm mb-4">Competition racing wheels</p>
              <Link to="/wheels" className="block">
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-gray-900/10">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InlineSkates
