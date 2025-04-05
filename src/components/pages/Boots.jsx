import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import ScrollToTop from '../ScrollToTop';
import SubNav from '../SubNav';
import Footer from '../Footer';

// Import boot images from Quad Shoes folder
// Classic Quad Shoes
import classicQuad1 from '../../assets/Quad Shoes/Classic Quad Shoes/1000210301 (1).png'
import classicQuad2 from '../../assets/Quad Shoes/Classic Quad Shoes/1000210418.png'

// HQ Quad Shoes
import hqQuad1 from '../../assets/Quad Shoes/HQ Quad shoe/1000210424.png'
import hqQuad2 from '../../assets/Quad Shoes/HQ Quad shoe/1000210425.png'

// Super Quad Shoes
import superQuad1 from '../../assets/Quad Shoes/Super Quad Shoes/1000210421.png'
import superQuad2 from '../../assets/Quad Shoes/Super Quad Shoes/1000210422.png'
import superQuad3 from '../../assets/Quad Shoes/Super Quad Shoes/1000210423.png'

const Boots = () => {
  const [view, setView] = useState('grid');
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const boots = [
    {
      id: 1,
      name: "Baby & Tenacity Shoes",
      images: [classicQuad1, classicQuad2],
      image: classicQuad1,
      price: 1999,
      description: "Perfect skating boots for beginners and young skaters",
      specs: {
        brand: "LGM",
        usage: "Skating",
        size: "Baby & Tenacity Size",
        material: "Synthetic",
        color: "Black/White",
        weight: "Light"
      }
    },
    {
      id: 2,
      name: "Classic Quad Shoes",
      images: [classicQuad2, classicQuad1],
      image: classicQuad2,
      price: 2499,
      description: "Traditional quad skating boots with timeless design",
      specs: {
        brand: "LGM",
        usage: "Skating",
        size: "All Size",
        material: "Synthetic",
        color: "Black",
        weight: "Medium"
      }
    },
    {
      id: 3,
      name: "HQ Quad Shoes",
      images: [hqQuad1, hqQuad2],
      image: hqQuad1,
      price: 2999,
      description: "High-quality quad skating boots for advanced skaters",
      specs: {
        brand: "LGM",
        usage: "Skating",
        size: "All Size",
        material: "Synthetic Leather",
        color: "Black/Red",
        weight: "Medium"
      }
    },
    {
      id: 4,
      name: "Super Quad Shoes",
      images: [superQuad1, superQuad2, superQuad3],
      image: superQuad1,
      price: 3499,
      description: "Premium quad skating boots for professional performance",
      specs: {
        brand: "LGM",
        usage: "Professional Skating",
        size: "All Size",
        material: "Premium Synthetic",
        color: "Black/Gold",
        weight: "Light"
      }
    }
  ];

  // Image modal functions
  const openImageModal = (product, index = 0) => {
    setSelectedProduct(product);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedProduct(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => 
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <SubNav />
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="border-b border-gray-200 mb-8">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">Quad Skating Boots</h1>
          <p className="text-lg text-gray-600 mb-6">Professional boots for quad skating</p>
          <div className="flex items-center justify-between pb-6">
            <p className="text-gray-600">{boots.length} products</p>
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
          {boots.map(boot => (
            <div key={boot.id} 
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden 
                ${view === 'list' ? 'flex' : 'flex flex-col'}`}
            >
              <div className={`relative group ${view === 'grid' ? 'h-70' : 'w-1/3 h-56'}`}>
                <img
                  src={boot.image}
                  alt={boot.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
                <button
                  onClick={() => openImageModal(boot)}
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
                    {boot.images.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1 flex-1 rounded-full ${currentImageIndex === idx ? 'bg-blue-600' : 'bg-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className={`flex flex-col ${view === 'grid' ? 'flex-1 p-6' : 'w-2/3 p-6'}`}>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    {boot.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{boot.description}</p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-600">₹{boot.price.toLocaleString()}</span>
                      <button 
                        onClick={() => addToCart(boot)}
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
                        {Object.entries(boot.specs).map(([key, value]) => (
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
              <div className="relative bg-white rounded-lg overflow-hidden">
                <img
                  src={selectedProduct.images[currentImageIndex]}
                  alt={`${selectedProduct.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-[80vh] object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transform transition-transform hover:scale-110"
                  >
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transform transition-transform hover:scale-110"
                  >
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {selectedProduct.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                      className={`w-2.5 h-2.5 rounded-full ${idx === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product Information */}
        <div className="bg-gray-100 py-16 mt-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <section>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Professional Quad Boots</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our professional quad boots are designed for serious skaters who demand the best in performance and comfort. Made with premium materials and expert craftsmanship, these boots provide excellent support and durability for all types of quad skating.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Features & Benefits</h2>
                <p className="text-gray-600 leading-relaxed">
                  Each boot is crafted with high-quality leather, reinforced stitching, and ergonomic design to ensure maximum comfort and control. The boots feature padded collars, moisture-wicking linings, and anatomical footbeds for extended skating sessions.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Size & Fit Guide</h2>
                <p className="text-gray-600 leading-relaxed">
                  For the best fit, we recommend measuring your feet carefully and referring to our size chart. Our boots are available in various widths to accommodate different foot shapes. The boots will break in and mold to your feet over time for a custom fit.
                </p>
              </section>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Boots;