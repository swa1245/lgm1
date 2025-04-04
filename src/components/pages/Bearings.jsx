import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import SubNav from '../SubNav'

// Import ceramic bearing images
import ceramicBearing1 from '../../assets/Quad & Inline Bearings/627-608 Hybrid Antirust WB Ceramic Bearing/1000211055.png'
import ceramicBearing2 from '../../assets/Quad & Inline Bearings/627-608 Hybrid Antirust WB Ceramic Bearing/Photo from Rucha Lembhe (7).jpg'
import ceramicBearing3 from '../../assets/Quad & Inline Bearings/627-608 Hybrid Antirust WB Ceramic Bearing/Photo from Rucha Lembhe (8).jpg'
import ceramicBearing4 from '../../assets/Quad & Inline Bearings/627-608 Hybrid Antirust WB Ceramic Bearing/Photo from Rucha Lembhe (9).jpg'

// Import inline bearing images
import inlineBearing1 from '../../assets/Quad & Inline Bearings/627-608 Quad & Inline Bearing [16 pcs]/627_608 Quad &Inline Bearing [16 Pcs ]_.png'
import inlineBearing2 from '../../assets/Quad & Inline Bearings/627-608 Quad & Inline Bearing [16 pcs]/Photo from Rucha Lembhe (3).jpg'
import inlineBearing3 from '../../assets/Quad & Inline Bearings/627-608 Quad & Inline Bearing [16 pcs]/Photo from Rucha Lembhe (4).jpg'
import inlineBearing4 from '../../assets/Quad & Inline Bearings/627-608 Quad & Inline Bearing [16 pcs]/Photo from Rucha Lembhe (6).jpg'

// Import practice bearing images
import practiceBearing1 from '../../assets/Quad & Inline Bearings/627-608 Quad & Inline Practice Bearing [16 pcs]/627_608 Quad & Inline practice Bearing [16 pcs](1).png'
import practiceBearing2 from '../../assets/Quad & Inline Bearings/627-608 Quad & Inline Practice Bearing [16 pcs]/627_608 Quad & Inline practice Bearing [16 pcs](2).png'
import practiceBearing3 from '../../assets/Quad & Inline Bearings/627-608 Quad & Inline Practice Bearing [16 pcs]/627_608 Quad & Inline practice Bearing [16 pcs](3).png'
import practiceBearing4 from '../../assets/Quad & Inline Bearings/627-608 Quad & Inline Practice Bearing [16 pcs]/627_608 Quad & Inline practice Bearing [16 pcs](4).png'
import practiceBearing5 from '../../assets/Quad & Inline Bearings/627-608 Quad & Inline Practice Bearing [16 pcs]/627_608 Quad & Inline practice Bearing [16 pcs](5).png'

// Import minimizer bearing images
import minimizerBearing1 from '../../assets/Quad & Inline Bearings/Minimizer Bearing [11 Ball]/Minimizer Bearing (11 Ball)_.png'
import minimizerBearing2 from '../../assets/Quad & Inline Bearings/Minimizer Bearing [11 Ball]/Minimizer Bearing_(1).png'
import minimizerBearing3 from '../../assets/Quad & Inline Bearings/Minimizer Bearing [11 Ball]/Minimizer Bearing_.png'
import minimizerBearing4 from '../../assets/Quad & Inline Bearings/Minimizer Bearing [11 Ball]/Photo from Rucha Lembhe(14).jpg'
import minimizerBearing5 from '../../assets/Quad & Inline Bearings/Minimizer Bearing [11 Ball]/Photo from Rucha Lembhe(15).jpg'
import minimizerBearing6 from '../../assets/Quad & Inline Bearings/Minimizer Bearing [11 Ball]/Photo from Rucha Lembhe(16).jpg'

// Import overlap bearing images
import overlapBearing1 from '../../assets/Quad & Inline Bearings/Overlap Bearing [11 Ball]/Overlap Bearing (11 Ball)_.png'
import overlapBearing2 from '../../assets/Quad & Inline Bearings/Overlap Bearing [11 Ball]/Overlap Bearing (11 Ball)_(1).png'
import overlapBearing3 from '../../assets/Quad & Inline Bearings/Overlap Bearing [11 Ball]/627_608 Overlap Bearing_.png'
import overlapBearing4 from '../../assets/Quad & Inline Bearings/Overlap Bearing [11 Ball]/627_608 Overlap Bearing_(1).png'
import overlapBearing5 from '../../assets/Quad & Inline Bearings/Overlap Bearing [11 Ball]/Photo from Rucha Lembhe(2).jpg'
import overlapBearing6 from '../../assets/Quad & Inline Bearings/Overlap Bearing [11 Ball]/Photo from Rucha Lembhe(3).jpg'

// Import Swiss Gold bearing images
import swissGold1 from '../../assets/Quad & Inline Bearings/627-608 Swiss Gold (6 Ball)/627_608 - Swiss Gold (7 Ball)_.png'
import swissGold2 from '../../assets/Quad & Inline Bearings/627-608 Swiss Gold (6 Ball)/627_608 - Swiss Gold (7 Ball)_(1).png'
import swissGold3 from '../../assets/Quad & Inline Bearings/627-608 Swiss Gold (6 Ball)/Photo from Rucha Lembhe(7).jpg'
import swissGold4 from '../../assets/Quad & Inline Bearings/627-608 Swiss Gold (6 Ball)/Photo from Rucha Lembhe(8).jpg'
import swissGold5 from '../../assets/Quad & Inline Bearings/627-608 Swiss Gold (6 Ball)/Photo from Rucha Lembhe(9).jpg'
import swissGold6 from '../../assets/Quad & Inline Bearings/627-608 Swiss Gold (6 Ball)/Photo from Rucha Lembhe(10).jpg'

const Bearings = () => {
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
      name: "627-608 Hybrid Antirust WB Ceramic Bearing",
      image: ceramicBearing1,
      images: [ceramicBearing1, ceramicBearing2, ceramicBearing3, ceramicBearing4],
      price: 4999,
      description: "High-performance ceramic bearings for maximum speed and durability",
      specs: {
        brand: "LGM",
        type: "Ceramic Bearing",
        material: "Ceramic",
        features: "Anti-rust, Water-resistant",
        quantity: "16 pcs"
      }
    },
    {
      id: 2,
      name: "627-608 Quad & Inline Bearing",
      image: inlineBearing1,
      images: [inlineBearing1, inlineBearing2, inlineBearing3, inlineBearing4],
      price: 2999,
      description: "Professional-grade bearings for quad and inline skates",
      specs: {
        brand: "LGM",
        type: "Quad & Inline",
        material: "Chrome Steel",
        features: "Pre-lubricated",
        quantity: "16 pcs"
      }
    },
    {
      id: 3,
      name: "627-608 Practice Bearing",
      image: practiceBearing1,
      images: [practiceBearing1, practiceBearing2, practiceBearing3, practiceBearing4, practiceBearing5],
      price: 1999,
      description: "Reliable practice bearings for regular training sessions",
      specs: {
        brand: "LGM",
        type: "Practice Bearing",
        material: "Steel",
        features: "Durable",
        quantity: "16 pcs"
      }
    },
    {
      id: 4,
      name: "Minimizer Bearing [11 Ball]",
      image: minimizerBearing1,
      images: [minimizerBearing1, minimizerBearing2, minimizerBearing3, minimizerBearing4, minimizerBearing5, minimizerBearing6],
      price: 3499,
      description: "11-ball minimizer bearings for smooth performance",
      specs: {
        brand: "LGM",
        type: "Minimizer",
        material: "Chrome Steel",
        features: "11 Ball Design",
        quantity: "16 pcs"
      }
    },
    {
      id: 5,
      name: "Overlap Bearing [11 Ball]",
      image: overlapBearing1,
      images: [overlapBearing1, overlapBearing2, overlapBearing3, overlapBearing4, overlapBearing5, overlapBearing6],
      price: 3999,
      description: "11-ball overlap bearings for enhanced stability",
      specs: {
        brand: "LGM",
        type: "Overlap",
        material: "Chrome Steel",
        features: "11 Ball Design",
        quantity: "16 pcs"
      }
    },
    {
      id: 6,
      name: "627-608 Swiss Gold (6 Ball)",
      image: swissGold1,
      images: [swissGold1, swissGold2, swissGold3, swissGold4, swissGold5, swissGold6],
      price: 4499,
      description: "Premium Swiss Gold bearings for superior performance",
      specs: {
        brand: "LGM",
        type: "Swiss Gold",
        material: "Gold-plated Steel",
        features: "6 Ball Design",
        quantity: "16 pcs"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SubNav />
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="border-b border-gray-200 mb-8">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">Quad & Inline Bearings</h1>
          <p className="text-lg text-gray-600 mb-6">Professional-grade bearings for optimal performance</p>
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

export default Bearings;
