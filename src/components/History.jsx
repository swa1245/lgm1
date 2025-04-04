import React from 'react'
import historyImage from '../assets/banner/history.png'
import logo from '../assets/logo/lo.jpg'

const History = () => {
  return (
    <section className="bg-white py-16">
      <div className="px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-sky-400 text-lg font-semibold tracking-wider">OUR LEGACY</h3>
              <h2 className="text-5xl font-bold text-black tracking-tight">HISTORY</h2>
            </div>
            <div className="text-gray-600 text-lg leading-relaxed">
              <p>
                LGM Sports was founded in 2016 and conducts its business operations out of Pune, Maharashtra, India. We manufacture, supply, and export items like Roller Skating Safety Nofear Guard Set, LGM Quad Roller Skating Shoes, Skating Inline Skate Specers, PVC Head Guard Fluorescent, Skate Bag, and more. The operational success of our company is based on its highly skilled personnel. At LGM Sports, we understand how important it is to have a skilled workforce that encourages the development of strong qualities in our workplace. These people make sure that every project undertaken is completed effectively, maintaining our position as a leading manufacturer in the skating industry.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="h-[2px] w-12 bg-orange-500"></div>
              <span className="text-orange-500 font-semibold tracking-wider">SINCE 2016</span>
            </div>
            <div className="mt-8">
              <img 
                src={logo} 
                alt="LGM Sports Logo" 
                className="h-16 opacity-90"
              />
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative group mx-10 px-10 ml-0 h-[60vh]">
            <div className="rounded-[40%] overflow-hidden aspect-square bg-gradient-to-br from-sky-400/10 to-orange-500/10 p-1">
              <img
                src={historyImage}
                alt="LGM Sports History"
                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 rounded-[40%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default History
