import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bont Skates India</h3>
            <p className="text-gray-400">Premium skates since 1975</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Inline Skates</a></li>
              <li><a href="#" className="hover:text-white">Roller Skates</a></li>
              <li><a href="#" className="hover:text-white">Custom Skates</a></li>
              <li><a href="#" className="hover:text-white">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Technology</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Carbon Fiber</a></li>
              <li><a href="#" className="hover:text-white">Heat Molding</a></li>
              <li><a href="#" className="hover:text-white">Construction</a></li>
              <li><a href="#" className="hover:text-white">Materials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@bontindia.com</li>
              <li>Phone: +91 XXX XXX XXXX</li>
              <li>Location: Mumbai, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bont Skates India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
