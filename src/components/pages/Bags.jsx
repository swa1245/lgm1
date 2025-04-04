import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import SubNav from '../SubNav'

// Import bag images
// HQ Inline Bag
import hqInlineBag1 from '../../assets/Bags/HQ Inline Bag/WhatsApp Image 2025-02-17 at 11.52.09 PM.jpeg'
import hqInlineBag2 from '../../assets/Bags/HQ Inline Bag/WhatsApp Image 2025-02-17 at 11.59.23 PM (1).jpeg'

// HQ Quad Bag
import hqQuadBag1 from '../../assets/Bags/HQ Quad  Bag/1000211167.png'
import hqQuadBag2 from '../../assets/Bags/HQ Quad  Bag/1000211168.png'
import hqQuadBag3 from '../../assets/Bags/HQ Quad  Bag/1000211311 (1).png'

// Pro Inline Bag
import proInlineBag1 from '../../assets/Bags/Pro Inline Bag/1000211148.png'
import proInlineBag2 from '../../assets/Bags/Pro Inline Bag/1000211169.png'
import proInlineBag3 from '../../assets/Bags/Pro Inline Bag/1000211171.png'

// Small Quad Bag
import smallQuadBag1 from '../../assets/Bags/Small Quad Bag/1000210248.png'
import smallQuadBag2 from '../../assets/Bags/Small Quad Bag/1000210249.png'
import smallQuadBag3 from '../../assets/Bags/Small Quad Bag/1000210250 (1).png'
import smallQuadBag4 from '../../assets/Bags/Small Quad Bag/1000211158.png'
import smallQuadBag5 from '../../assets/Bags/Small Quad Bag/1000211160.png'
import smallQuadBag6 from '../../assets/Bags/Small Quad Bag/1000211161.png'
import smallQuadBag7 from '../../assets/Bags/Small Quad Bag/1000211163.png'
import smallQuadBag8 from '../../assets/Bags/Small Quad Bag/1000211349.png'
import smallQuadBag9 from '../../assets/Bags/Small Quad Bag/1000211350.png'

const Bags = () => {
  const [view, setView] = useState('grid');
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "HQ Inline Skate Bag",
      images: [hqInlineBag1, hqInlineBag2],
      image: hqInlineBag1,
      price: 1999,
      description: "High-quality inline skate bag with premium storage solutions",
      specs: {
        brand: "LGM",
        type: "Inline Skate Bag",
        material: "Durable Polyester",
        capacity: "Large",
        features: "Multiple compartments, Shoulder strap"
      }
    },
    {
      id: 2,
      name: "HQ Quad Skate Bag",
      images: [hqQuadBag1, hqQuadBag2, hqQuadBag3],
      image: hqQuadBag1,
      price: 1899,
      description: "Professional quad skate bag with protective padding",
      specs: {
        brand: "LGM",
        type: "Quad Skate Bag",
        material: "Heavy-duty Nylon",
        capacity: "Large",
        features: "Padded interior, Water-resistant"
      }
    },
    {
      id: 3,
      name: "Pro Inline Skate Bag",
      images: [proInlineBag1, proInlineBag2, proInlineBag3],
      image: proInlineBag1,
      price: 2499,
      description: "Premium professional inline skate bag with advanced features",
      specs: {
        brand: "LGM",
        type: "Pro Inline Bag",
        material: "Premium Nylon",
        capacity: "Extra Large",
        features: "Ventilation, Reinforced bottom"
      }
    },
    {
      id: 4,
      name: "Small Quad Skate Bag",
      images: [
        smallQuadBag1, smallQuadBag2, smallQuadBag3, smallQuadBag4,
        smallQuadBag5, smallQuadBag6, smallQuadBag7, smallQuadBag8,
        smallQuadBag9
      ],
      image: smallQuadBag1,
      price: 1299,
      description: "Compact quad skate bag perfect for casual skaters",
      specs: {
        brand: "LGM",
        type: "Small Quad Bag",
        material: "Lightweight Polyester",
        capacity: "Medium",
        features: "Easy-carry handle, Zip pockets"
      }
    }
  ];

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
      <SubNav />
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="border-b border-gray-200 mb-8">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">Skating Bags</h1>
          <p className="text-lg text-gray-600 mb-6">Professional storage solutions for your skating equipment</p>
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
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-600">₹{product.price.toLocaleString()}</span>
                      <button 
                        onClick={() => addToCart(product)}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                          transition-colors flex items-center gap-2 hover:shadow-lg active:transform active:scale-95"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
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
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <button
                    onClick={prevImage}
                    className="p-2 rounded-full bg-white bg-opacity-75 hover:bg-opacity-100 transition-opacity"
                  >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="p-2 rounded-full bg-white bg-opacity-75 hover:bg-opacity-100 transition-opacity"
                  >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {selectedProduct.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full ${
                        currentImageIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Concluding Section */}
        <div className="max-w-4xl mx-auto mt-16 mb-12 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Why Choose LGM Skating Bags?</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              LGM skating bags are designed with the needs of both recreational and professional skaters in mind. 
              Our bags feature durable materials, thoughtful compartmentalization, and ergonomic designs to protect 
              your valuable skating equipment while making transportation effortless.
            </p>
            <p>
              From compact bags for casual skaters to professional-grade storage solutions for competitive athletes, 
              each LGM bag is crafted with attention to detail and built to last. Experience the perfect blend of 
              functionality, style, and durability with LGM skating bags.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[128px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full filter blur-[128px] opacity-10"></div>
      </div>
    </div>
  )
}

export default Bags
