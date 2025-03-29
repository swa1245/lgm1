import React from 'react'
import frames from '../../assets/inline/banner/f.png'

const Frames = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 from-10% via-blue-200 via-50% to-white to-90%">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Accent Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-orange-500 via-blue-500 to-transparent"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center mb-8">
              <div className="px-4 py-2 bg-white rounded-lg shadow-md border border-gray-100">
                <span className="text-gray-600 font-medium tracking-wide text-sm uppercase">Coming Soon</span>
              </div>
            </div>

            <h1 className="text-5xl font-heading font-bold text-gray-900 mb-8">
              Professional Quad Frames
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              We're working on bringing you the best selection of professional quad frames. Stay tuned for our upcoming collection featuring premium materials and innovative designs.
            </p>

            <div className="relative w-full max-w-2xl mx-auto">
              <img 
                src={frames} 
                alt="Professional Quad Frames"
                className="w-full h-auto object-contain rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Feature 1 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Materials</h3>
                <p className="text-gray-600">Crafted from high-grade aluminum and carbon fiber</p>
              </div>

              {/* Feature 2 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-orange-100 text-orange-600 rounded-xl">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Design</h3>
                <p className="text-gray-600">Engineered for maximum speed and control</p>
              </div>

              {/* Feature 3 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-green-100 text-green-600 rounded-xl">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Options</h3>
                <p className="text-gray-600">Multiple configurations for every style</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to be the first to know when our frames collection launches.
            </p>
            <form className="flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Frames
