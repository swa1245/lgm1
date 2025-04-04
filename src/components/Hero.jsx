import React from 'react'
import { useNavigate } from 'react-router-dom'
import banner1 from '../assets/banner/banner1.jpg'
import banner2 from '../assets/banner/banner2.jpg'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[80vh] overflow-hidden">
      {/* Inline Skates Section */}
      <div 
        className="relative h-full group cursor-pointer overflow-hidden transition-transform duration-500 hover:translate-x-4 hover:z-10 peer"
        onClick={() => navigate('/inline-skates')}
      >
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.15] group-hover:rotate-1">
          <img 
            src={banner1}
            alt="Inline Skates"
            className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white transform transition-all duration-500 group-hover:scale-[1.15] group-hover:rotate-1">
          <h2 className="text-4xl font-bold mb-4 tracking-wider">INLINE SKATES</h2>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            SHOP NOW
          </button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 group-hover:opacity-0 transition-opacity duration-500"></div>
      </div>

      {/* Roller Skates Section */}
      <div 
        className="relative h-full group cursor-pointer overflow-hidden transition-transform duration-500 peer-hover:-translate-x-4 hover:translate-x-4 hover:z-10"
        onClick={() => navigate('/roller-skates')}
      >
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.15] group-hover:rotate-1">
          <img 
            src={banner2}
            alt="Roller Skates"
            className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white transform transition-all duration-500 group-hover:scale-[1.15] group-hover:rotate-1">
          <h2 className="text-4xl font-bold mb-4 tracking-wider">ROLLER SKATES</h2>
          <button className="bg-sky-400 hover:bg-sky-500 text-white px-8 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            SHOP NOW
          </button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 group-hover:opacity-0 transition-opacity duration-500"></div>
      </div>
    </div>
  )
}

export default Hero
