import React from 'react'
import { Link } from 'react-router-dom'

const SubNav = () => {
  const categories = [
    { name: 'Inline Skates', path: '/inline-skates' },
    { name: 'Roller Skates', path: '/roller-skates' },
    { name: 'Accessories', path: '/accessories' },
    { name: 'BABY & TENACITY SKATE', path: '/baby-tenacity-skates' },
    { name: 'Bags', path: '/bags' },
    { name: 'GuardSet & Ezeefit', path: '/guard-set' },
    { name: 'Hangers', path: '/hangers' },
    { name: 'Helmets', path: '/helmets' },
    { name: 'Spacers-Axle-Adapter', path: '/spacers-axle-adapter' },
    { name: 'Quad & Inline Bearings', path: '/bearings' },
    { name: 'QuadSkates & Accessories', path: '/quad-skates-accessories' },
    { name: 'Shoes & Frame', path: '/shoes-frame' },
    { name: 'SkinSuits', path: '/skin-suits' }
  ]

  return (
    <div className="bg-orange-500 text-white border-b border-orange-600">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className="text-white hover:bg-blue-600 px-3 py-1 rounded transition-colors duration-300 text-sm font-medium"
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
