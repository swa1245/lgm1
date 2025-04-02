import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom'
import SubNav from '../SubNav'
import wheels from '../../assets/Quad Wheels/Rubber wheel/Photo from Rucha Lembhe.jpg'
import boats from '../../assets/BABY & TENACITY SKATE (Acessories)/Baby skate full kit/_MG_2054.jpg'
import frames from '../../assets/technology/speed-frames.jpg'
import bg from '../../assets/inline/banner/bg.webp'

const InlineSkates = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 'pro-series-x1',
      name: 'Pro Series X1',
      description: 'Competition-grade speed skates',
      price: 4999,
      image: bg,
      category: 'inline-skates'
    },
    {
      id: 'elite-boots',
      name: 'Elite Boots',
      description: 'Custom-fitted racing boots',
      price: 2999,
      image: boats,
      category: 'boots'
    },
    {
      id: 'speed-frames',
      name: 'Speed Frames',
      description: 'Lightweight aluminum frames',
      price: 1999,
      image: frames,
      category: 'speed-frames'
    },
    {
      id: 'racing-wheels',
      name: 'Racing Wheels',
      description: 'High-performance racing wheels',
      price: 1499,
      image: wheels,
      category: 'wheels'
    }
  ];

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      category: product.category
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 from-10% via-blue-200 via-50% to-white to-90%">
      <SubNav />
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
                <div className="px-4 py-2 bg-white/90 backdrop-blur rounded-lg shadow-xl border border-gray-100">
                  <span className="text-gray-900 font-medium tracking-wide text-sm uppercase">New Collection 2025</span>
                </div>
              </div>
              
              {/* Main Heading */}
              <div>
                <h1 className="text-[4.5rem] leading-none font-bold">
                  Premium<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                    Inline Skates
                  </span>
                </h1>
                <p className="mt-6 text-lg text-gray-700 max-w-xl leading-relaxed">
                  Experience unparalleled performance with our professional-grade inline skates. 
                  Crafted for speed, designed for champions.
                </p>
              </div>

              {/* Price and CTA */}
              <div className="flex items-center gap-8">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-gray-900">₹4,999</div>
                  <div className="text-sm text-blue-600 font-medium">Limited time offer</div>
                </div>
                <button 
                  onClick={() => handleAddToCart(products[0])}
                  className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2 cursor-pointer"
                >
                  Add to Cart
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </button>
              </div>

              {/* Product Features */}
              <div className="grid grid-cols-3 gap-8 pt-10 border-t border-gray-100">
                <div className="group">
                  <div className="text-2xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">Premium</div>
                  <div className="text-gray-500">Materials</div>
                </div>
                <div className="group">
                  <div className="text-2xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">2 Years</div>
                  <div className="text-gray-500">Warranty</div>
                </div>
                <div className="group">
                  <div className="text-2xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">Global</div>
                  <div className="text-gray-500">Shipping</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-1/2 relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-orange-500/10 rounded-3xl blur-2xl group-hover:from-blue-600/20 group-hover:to-orange-500/20 transition-all duration-500"></div>
              <div className="relative">
                <img 
                  src={bg} 
                  alt="Pro Series Inline Skates"
                  className="w-[120%] h-auto transform -rotate-12 group-hover:rotate-0 transition-all duration-700"
                />
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
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <div className="absolute top-4 right-4 z-10">
                    <div className="px-3 py-1 bg-white shadow-lg text-gray-900 font-medium rounded-full">₹{product.price}</div>
                  </div>
                  <div className="p-6">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{product.description}</p>
                  <Link 
                    to={`/${product.category}`}
                    className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Shop Now</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InlineSkates;
