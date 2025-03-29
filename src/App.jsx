import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import History from './components/History'
import Products from './components/Products'
import CarbonFiber from './components/CarbonFiber'
import SkateFoam from './components/SkateFoam'
import OnePieceConstruction from './components/OnePieceConstruction'
import SpeedFrames from './components/SpeedFrames'
import Bearings from './components/Bearings'
import Accessories from './components/Accessories'
import InlineSkates from './components/pages/InlineSkates'
import Wheels from './components/pages/Wheels'
import Boots from './components/pages/Boots'
import RollerSkates from './components/pages/RollerSkates'
import Frames from './components/pages/Frames'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <History />
              <Products />
              <CarbonFiber />
              <SkateFoam />
              <OnePieceConstruction />
              <SpeedFrames />
              <Bearings />
              <Accessories />
            </>
          } />
          <Route path="/inline-skates" element={<InlineSkates />} />
          <Route path="/wheels" element={<Wheels />} />
          <Route path="/boots" element={<Boots />} />
          <Route path="/roller-skates" element={<RollerSkates />} />
          <Route path="/frames" element={<Frames />} />
        </Routes>
        <footer className="bg-white text-gray-900 py-8 text-center">
          <p>Copyright 2025 LGM Sports Online India</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
