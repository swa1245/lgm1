import React from 'react'
import { Link } from 'react-router-dom'

const SubNav = () => {
  const categories = [
    { 
      id: 'inline-skates',
      name: 'Inline Skates', 
      path: '/inline-skates'
    },
    { 
      id: 'roller-skates',
      name: 'Roller Skates', 
      path: '/roller-skates' 
    },
    { 
      id: 'accessories',
      name: 'Accessories', 
      path: '/accessories' 
    },
    { 
      id: 'baby-tenacity-skates',
      name: 'BABY & TENACITY SKATE', 
      path: '/baby-tenacity-skates' 
    },
    { 
      id: 'bags',
      name: 'Bags', 
      path: '/bags' 
    },
    { 
      id: 'guard-set',
      name: 'GuardSet & Ezeefit', 
      path: '/guard-set' 
    },
    { 
      id: 'hangers',
      name: 'Hangers', 
      path: '/hangers' 
    },
    { 
      id: 'helmets',
      name: 'Helmets', 
      path: '/helmets' 
    },
    { 
      id: 'spacers',
      name: 'Spacers-Axle-Adapter', 
      path: '/spacers-axle-adapter' 
    },
    { 
      id: 'bearings',
      name: 'Quad & Inline Bearings', 
      path: '/bearings' 
    },
    { 
      id: 'quad-accessories',
      name: 'QuadSkates & Accessories', 
      path: '/quad-skates-accessories' 
    },
    { 
      id: 'shoes-frame',
      name: 'Shoes & Frame', 
      path: '/shoes-frame' 
    },
    { 
      id: 'skin-suits',
      name: 'SkinSuits', 
      path: '/skin-suits' 
    }
  ]

  return (
    <div className="bg-blue-600 text-white border-b border-orange-600 top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="text-white hover:bg-orange-600 px-3 py-1 rounded transition-colors duration-300 text-sm font-medium cursor-pointer"
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
