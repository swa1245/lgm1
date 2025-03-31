import React, { useState } from 'react'
import SubNav from '../SubNav'

// Baby Skates Images
import babySkate1 from '../../assets/BABY & TENACITY SKATE (Acessories)/BABYSKATE/Baby skate.png'
import babySkateKit1 from '../../assets/BABY & TENACITY SKATE (Acessories)/Baby skate full kit/baby skate kit.png'
import babySkateShoes1 from '../../assets/BABY & TENACITY SKATE (Acessories)/Baby skate with shoes/Baby skate with shoe.png'

// Tenacity Skates Images
import tenacitySkate1 from '../../assets/BABY & TENACITY SKATE (Acessories)/TENACITY SKATE/Tenacity skate.png'
import tenacitySkateKit1 from '../../assets/BABY & TENACITY SKATE (Acessories)/Tenacity Skate full kit/tenacity skate kit (2).png'
import tenacitySkateShoes1 from '../../assets/BABY & TENACITY SKATE (Acessories)/Tenacity skate with shoes/1000211824.png'

const BabyTenacitySkates = () => {
  const [view, setView] = useState('grid')

  const products = [
    {
      id: 1,
      name: "Baby Skate Basic",
      image: babySkate1,
      price: 1499,
      description: "Perfect starter skates for little ones, designed with safety and comfort in mind",
      specs: {
        brand: "LGM",
        type: "Baby Skates",
        material: "High-quality plastic and metal",
        size: "Adjustable",
        features: "Safety straps, Cushioned interior"
      }
    },
    {
      id: 2,
      name: "Baby Skate Full Kit",
      image: babySkateKit1,
      price: 2499,
      description: "Complete skating kit for children with comprehensive safety gear and accessories",
      specs: {
        brand: "LGM",
        type: "Baby Skates Kit",
        material: "Premium materials",
        includes: "Skates, Pads, Helmet",
        features: "Full protection set"
      }
    },
    {
      id: 3,
      name: "Baby Skate with Shoes",
      image: babySkateShoes1,
      price: 1999,
      description: "Comfortable baby skates with integrated shoes for better support and stability",
      specs: {
        brand: "LGM",
        type: "Baby Shoe Skates",
        material: "Breathable fabric, Durable wheels",
        size: "Multiple options",
        features: "Integrated footwear"
      }
    },
    {
      id: 4,
      name: "Tenacity Skate Pro",
      image: tenacitySkate1,
      price: 3499,
      description: "Professional-grade tenacity skates for advanced young skaters",
      specs: {
        brand: "LGM",
        type: "Professional Skates",
        material: "High-grade aluminum and steel",
        level: "Advanced",
        features: "Pro-level performance"
      }
    },
    {
      id: 5,
      name: "Tenacity Skate Full Kit",
      image: tenacitySkateKit1,
      price: 4999,
      description: "Complete professional skating kit with premium accessories",
      specs: {
        brand: "LGM",
        type: "Professional Kit",
        material: "Premium components",
        includes: "Skates, Pro Gear",
        features: "Competition ready"
      }
    },
    {
      id: 6,
      name: "Tenacity Skate with Shoes",
      image: tenacitySkateShoes1,
      price: 3999,
      description: "Professional tenacity skates with custom-designed performance shoes",
      specs: {
        brand: "LGM",
        type: "Professional Shoe Skates",
        material: "Premium leather and metal",
        fit: "Custom fit",
        features: "Enhanced control"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <SubNav />
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="border-b border-gray-200 mb-8">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">Baby & Tenacity Skates</h1>
          <p className="text-lg text-gray-600 mb-6">Premium skates designed for young champions</p>
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
        <div className={`grid ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'grid-cols-1 gap-4'}`}>
          {products.map(product => (
            <div key={product.id} className={`bg-white rounded-lg shadow-md overflow-hidden ${view === 'list' ? 'flex' : ''}`}>
              <div className={view === 'grid' ? 'p-4' : 'w-1/3 p-4'}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className={view === 'grid' ? 'p-6 pt-0' : 'w-2/3 p-6'}>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">₹{product.price}</span>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-heading font-bold text-gray-900 mb-2">Specifications:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <li key={key} className="flex justify-between">
                        <span className="capitalize">{key}:</span>
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Concluding Section */}
      <div className="max-w-4xl mx-auto mt-16 mb-12 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Why Choose LGM Kids Skates?</h2>
        <div className="prose prose-lg text-gray-600">
          <p className="mb-4">
            At LGM, we understand that choosing the right skates for your child is crucial for their safety and enjoyment. 
            Our kids' inline skates are designed with meticulous attention to detail, incorporating advanced safety features 
            and comfortable fitting systems. We use high-quality materials and innovative technology to ensure that every 
            young skater can develop their skills with confidence.
          </p>
          <p>
            Whether your child is just starting their skating journey or advancing to more competitive levels, LGM offers 
            a perfect combination of safety, comfort, and performance. Our comprehensive range includes options for different 
            age groups and skill levels, all backed by our commitment to quality and customer satisfaction.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full filter blur-[128px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400 rounded-full filter blur-[128px] opacity-10"></div>
    </div>
  )
}

export default BabyTenacitySkates
