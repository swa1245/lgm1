import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import SubNav from '../SubNav'
import Footer from '../Footer';

// Import LGM Helmet images
import lgmHelmet1 from '../../assets/Helmet/LGM Helmet/1000211213.png'
import lgmHelmet2 from '../../assets/Helmet/LGM Helmet/1000211214.png'
import lgmHelmet3 from '../../assets/Helmet/LGM Helmet/1000211216.png'
import lgmHelmet4 from '../../assets/Helmet/LGM Helmet/1000211218.png'
import lgmHelmet5 from '../../assets/Helmet/LGM Helmet/1000211219.png'
import lgmHelmet6 from '../../assets/Helmet/LGM Helmet/1000211221.png'

// Import Fluorescent Helmet images
import fluorescent1 from '../../assets/Helmet/Helmet Fluorescent/1000211151.png'
import fluorescent2 from '../../assets/Helmet/Helmet Fluorescent/1000211220.png'
import fluorescent3 from '../../assets/Helmet/Helmet Fluorescent/1000211222.png'
import fluorescent4 from '../../assets/Helmet/Helmet Fluorescent/1000211223.png'
import fluorescent5 from '../../assets/Helmet/Helmet Fluorescent/1000211224.png'
import fluorescent6 from '../../assets/Helmet/Helmet Fluorescent/1000211229.png'

// Import Round Helmet images
import roundHelmet1 from '../../assets/Helmet/Round Fluorescent Helmet/1000211225.png'
import roundHelmet2 from '../../assets/Helmet/Round Fluorescent Helmet/1000211226.png'
import roundHelmet3 from '../../assets/Helmet/Round Fluorescent Helmet/1000211227.png'
import roundHelmet4 from '../../assets/Helmet/Round Fluorescent Helmet/1000211228.png'
import roundHelmet5 from '../../assets/Helmet/Round Fluorescent Helmet/1000211230.png'
import roundHelmet6 from '../../assets/Helmet/Round Fluorescent Helmet/1000211231.png'

// Import Ptti Head Gear images
import pttiGear1 from '../../assets/Helmet/Ptti Head Gear/1000211131.png'
import pttiGear2 from '../../assets/Helmet/Ptti Head Gear/1000211133.png'
import pttiGear3 from '../../assets/Helmet/Ptti Head Gear/1000211176.png'
import pttiGear4 from '../../assets/Helmet/Ptti Head Gear/1000211177.png'
import pttiGear5 from '../../assets/Helmet/Ptti Head Gear/1000211232.png'
import pttiGear6 from '../../assets/Helmet/Ptti Head Gear/1000211233.png'
import pttiGear7 from '../../assets/Helmet/Ptti Head Gear/1000211234.png'
import pttiGear8 from '../../assets/Helmet/Ptti Head Gear/1000211236.png'

const Helmets = () => {
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
      name: "LGM Pro Helmet",
      image: lgmHelmet1,
      images: [lgmHelmet1, lgmHelmet2, lgmHelmet3, lgmHelmet4, lgmHelmet5, lgmHelmet6],
      price: 1299,
      description: "Professional-grade skating helmet with advanced protection features",
      specs: {
        brand: "LGM",
        type: "Pro Helmet",
        material: "ABS Shell + EPS Foam",
        certification: "CE Certified",
        features: "Adjustable fit, Ventilation"
      }
    },
    {
      id: 2,
      name: "Fluorescent Safety Helmet",
      image: fluorescent1,
      images: [fluorescent1, fluorescent2, fluorescent3, fluorescent4, fluorescent5, fluorescent6],
      price: 999,
      description: "High-visibility helmet for enhanced safety during low-light conditions",
      specs: {
        brand: "LGM",
        type: "Safety Helmet",
        material: "Impact-resistant plastic",
        visibility: "High fluorescent",
        features: "Night visible, Lightweight"
      }
    },
    {
      id: 3,
      name: "Round Fluorescent Helmet",
      image: roundHelmet1,
      images: [roundHelmet1, roundHelmet2, roundHelmet3, roundHelmet4, roundHelmet5, roundHelmet6],
      price: 899,
      description: "Classic round design with modern fluorescent safety features",
      specs: {
        brand: "LGM",
        type: "Round Helmet",
        material: "Durable composite",
        style: "Classic round",
        features: "360° visibility, Comfort padding"
      }
    },
    {
      id: 4,
      name: "Ptti Head Gear Pro",
      image: pttiGear1,
      images: [pttiGear1, pttiGear2, pttiGear3, pttiGear4, pttiGear5, pttiGear6, pttiGear7, pttiGear8],
      price: 1499,
      description: "Premium head protection gear for professional skaters",
      specs: {
        brand: "LGM",
        type: "Professional Gear",
        material: "Multi-layer protection",
        protection: "Full coverage",
        features: "Impact absorption, Custom fit"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SubNav />
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="border-b border-gray-200 mb-8">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">Skating Helmets</h1>
          <p className="text-lg text-gray-600 mb-6">Professional head protection for every skater</p>
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
    </div>
  );
};

export default Helmets;
