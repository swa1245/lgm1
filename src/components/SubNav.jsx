import React from 'react'
import { Link } from 'react-router-dom'

const SubNav = () => {
  const categories = [
    { name: 'Accessories', path: '/accessories' },
    { name: 'BABY & TENACITY SKATE', path: '/baby-tenacity-skate' },
    { name: 'Bags', path: '/bags' },
    { name: 'GuardSet & Ezeefit', path: '/guardset-ezeefit' },
    { name: 'Hangers', path: '/hangers' },
    { name: 'Helmets', path: '/helmets' },
    { name: 'Spacers-Axle-Adapter', path: '/spacers-axle-adapter' },
    { name: 'Quad & Inline Bearings', path: '/bearings' },
    { name: 'QuadSkates & Accessories', path: '/quad-skates-accessories' },
    { name: 'Shoes & Frame', path: '/shoes-frame' },
    { name: 'SkinSuits', path: '/skinsuits' }
  ]

  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-6 overflow-x-auto whitespace-nowrap pb-2">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-300"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SubNav
