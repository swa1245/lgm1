import React from 'react'

const Products = () => {
  const products = [
    {
      title: 'Inline Skates',
      description: 'Professional inline skates with carbon fiber construction',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Roller Skates',
      description: 'High-performance quad skates for all skill levels',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Speed Skates',
      description: 'Competition-grade speed skates with precision engineering',
      image: 'https://via.placeholder.com/300x200'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
                <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
