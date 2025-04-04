import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import SubNav from '../SubNav'

// Import Half Sublimation Skin Suit images
import halfSublimation1 from '../../assets/Skin Suits/Half Sublimation Skin Suit/1000211198.png'
import halfSublimation2 from '../../assets/Skin Suits/Half Sublimation Skin Suit/1000211199.png'
import halfSublimation3 from '../../assets/Skin Suits/Half Sublimation Skin Suit/1000211200.png'
import halfSublimation4 from '../../assets/Skin Suits/Half Sublimation Skin Suit/1000211202.png'
import halfSublimation5 from '../../assets/Skin Suits/Half Sublimation Skin Suit/1000211203.png'
import halfSublimation6 from '../../assets/Skin Suits/Half Sublimation Skin Suit/1000211206.png'
import halfSublimation7 from '../../assets/Skin Suits/Half Sublimation Skin Suit/1000211208.png'
import halfSublimation8 from '../../assets/Skin Suits/Half Sublimation Skin Suit/1000211209.png'

// Import Normal Skin Suit images
import normalSuit1 from '../../assets/Skin Suits/Normal Skin Suit/1000211197.png'
import normalSuit2 from '../../assets/Skin Suits/Normal Skin Suit/1000211201.png'

const SkinSuits = () => {
  const [view, setView] = useState('grid');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();

  const openImageModal = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  const closeImageModal = () => {
    setSelectedProduct(null);
  };

  const nextImage = () => {
    if (!selectedProduct) return;
    setCurrentImageIndex((prev) => 
      prev === selectedProduct.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedProduct) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProduct.images.length - 1 : prev - 1
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProduct) return;
      
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'Escape') {
        closeImageModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProduct]);

  const products = [
    {
      id: 1,
      name: "Half Sublimation Racing SkinSuit",
      image: halfSublimation1,
      images: [halfSublimation1, halfSublimation2, halfSublimation3, halfSublimation4],
      price: 4999,
      description: "Professional half sublimation racing skinsuit with aerodynamic design",
      specs: {
        brand: "LGM",
        type: "Half Sublimation",
        material: "High-performance lycra",
        fit: "Race fit",
        features: "Aerodynamic, Moisture-wicking"
      }
    },
    {
      id: 2,
      name: "Half Sublimation Competition SkinSuit",
      image: halfSublimation5,
      images: [halfSublimation5, halfSublimation6, halfSublimation7],
      price: 4599,
      description: "Competition-grade half sublimation skinsuit for professional athletes",
      specs: {
        brand: "LGM",
        type: "Half Sublimation",
        material: "Premium compression fabric",
        protection: "UV protection",
        features: "4-way stretch, Quick-dry"
      }
    },
    {
      id: 3,
      name: "Half Sublimation Training SkinSuit",
      image: halfSublimation8,
      images: [halfSublimation8, halfSublimation3, halfSublimation2],
      price: 3999,
      description: "Comfortable half sublimation training skinsuit for practice sessions",
      specs: {
        brand: "LGM",
        type: "Half Sublimation",
        material: "Breathable fabric blend",
        comfort: "High",
        features: "Durable, Easy care"
      }
    },
    {
      id: 4,
      name: "Normal Racing SkinSuit",
      image: normalSuit1,
      images: [normalSuit1, normalSuit2],
      price: 3499,
      description: "Classic normal racing skinsuit with proven performance",
      specs: {
        brand: "LGM",
        type: "Normal Suit",
        material: "Performance fabric",
        fit: "Regular fit",
        features: "Lightweight, Breathable"
      }
    },
    {
      id: 5,
      name: "Normal Training SkinSuit",
      image: normalSuit2,
      images: [normalSuit2, normalSuit1],
      price: 2999,
      description: "Reliable normal skinsuit for training and practice",
      specs: {
        brand: "LGM",
        type: "Normal Suit",
        material: "Durable fabric",
        comfort: "High",
        features: "Easy care, Long-lasting"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SubNav />
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="border-b border-gray-200 mb-8">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">SkinSuits</h1>
          <p className="text-lg text-gray-600 mb-6">Professional racing and training skinsuits</p>
          <div className="flex items-center justify-between pb-6">
            <p className="text-gray-600">{products.length} products</p>
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

        {/* Product Grid/List */}
        <div className={`grid ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'grid-cols-1 gap-6'}`}>
          {products.map(product => (
            <div key={product.id} 
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden 
                ${view === 'list' ? 'flex' : 'flex flex-col'}`}
            >
              <div className={`relative group ${view === 'grid' ? 'h-70' : 'w-1/3 h-56'}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
                <button
                  onClick={() => openImageModal(product)}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 
                    bg-white/95 rounded-full shadow-xl hover:bg-white cursor-pointer
                    transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {product.images.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1 flex-1 rounded-full ${currentImageIndex === idx ? 'bg-white' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className={`flex flex-col ${view === 'grid' ? 'flex-1 p-6' : 'w-2/3 p-6'}`}>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-600">₹{product.price.toLocaleString()}</span>
                      <button 
                        onClick={() => addToCart(product)}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                          transition-colors flex items-center gap-2 hover:shadow-lg active:transform active:scale-95 cursor-pointer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        Add to Cart
                      </button>
                    </div>
                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="font-heading font-bold text-gray-900 mb-2">Specifications:</h4>
                      <ul className="space-y-1.5 text-sm text-gray-600">
                        {Object.entries(product.specs).map(([key, value]) => (
                          <li key={key} className="flex justify-between items-center">
                            <span className="capitalize font-medium text-gray-700">{key}:</span>
                            <span className="text-gray-600">{value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={closeImageModal}>
          <div className="relative max-w-4xl w-full mx-4" onClick={e => e.stopPropagation()}>
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Previous Button */}
            {selectedProduct.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-2 text-white hover:text-blue-400 transition-colors"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Next Button */}
            {selectedProduct.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-2 text-white hover:text-blue-400 transition-colors"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            <img
              src={selectedProduct.images[currentImageIndex]}
              alt={selectedProduct.name}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />

            {/* Image Indicators */}
            {selectedProduct.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 flex-wrap justify-center max-w-md">
                {selectedProduct.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentImageIndex === idx ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Concluding Section */}
      <div className="max-w-4xl mx-auto mt-16 mb-12 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Why Choose LGM SkinSuits?</h2>
        <div className="prose prose-lg text-gray-600">
          <p className="mb-4">
            LGM's skinsuits are designed for maximum performance and comfort. Our suits combine 
            advanced materials with ergonomic design to provide optimal aerodynamics and muscle 
            support during competition and training.
          </p>
          <p>
            From professional racing suits to comfortable training gear, each skinsuit is crafted 
            with attention to detail and quality to help you perform at your best.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[128px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full filter blur-[128px] opacity-10"></div>
    </div>
  );
};

export default SkinSuits;
