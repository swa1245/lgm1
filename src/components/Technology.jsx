import React from 'react'

const Technology = () => {
  const features = [
    {
      title: 'Carbon Fiber Construction',
      description: 'Premium Toray carbon fiber from Japan for ultimate performance'
    },
    {
      title: 'Heat Moldable Design',
      description: 'Custom fit with our innovative heat molding technology'
    },
    {
      title: 'Advanced Padding',
      description: 'Closed-cell memory foam for superior comfort and durability'
    },
    {
      title: 'One-Piece Construction',
      description: 'Seamless design for maximum power transfer and control'
    }
  ]

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skate Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700">
            Learn More About Our Technology
          </button>
        </div>
      </div>
    </section>
  )
}

export default Technology
