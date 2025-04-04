import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import History from './components/History'
import CarbonFiber from './components/CarbonFiber'
import SkateFoam from './components/SkateFoam'
import OnePieceConstruction from './components/OnePieceConstruction'
import SpeedFrames from './components/pages/SpeedFrames'
import Accessories from './components/pages/Accessories'
import InlineSkates from './components/pages/InlineSkates'
import Wheels from './components/pages/Wheels'
import Boots from './components/pages/Boots'
import RollerSkates from './components/pages/RollerSkates'
import Frames from './components/pages/Frames'
import QuadWheels from './components/pages/QuadWheels'
import BabyTenacitySkates from './components/pages/BabyTenacitySkates'
import Bags from './components/pages/Bags'
import GuardSet from './components/pages/GuardSet'
import Hangers from './components/pages/Hangers'
import Helmets from './components/pages/Helmets'
import SpacersAxleAdapter from './components/pages/SpacersAxleAdapter'
import QuadSkatesAccessories from './components/pages/QuadSkatesAccessories'
import ShoesFrame from './components/pages/ShoesFrame'
import SkinSuits from './components/pages/SkinSuits'
import Bearings from './components/pages/Bearings'
import CartPage from './components/pages/CartPage'

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <History />
                <CarbonFiber />
                <SkateFoam />
                <OnePieceConstruction />
              </>
            } />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/inline-skates" element={<InlineSkates />} />
            <Route path="/wheels" element={<Wheels />} />
            <Route path="/boots" element={<Boots />} />
            <Route path="/roller-skates" element={<RollerSkates />} />
            <Route path="/frames" element={<Frames />} />
            <Route path="/quad-wheels" element={<QuadWheels />} />
            <Route path="/baby-tenacity-skates" element={<BabyTenacitySkates />} />
            <Route path="/bags" element={<Bags />} />
            <Route path="/guard-set" element={<GuardSet />} />
            <Route path="/hangers" element={<Hangers />} />
            <Route path="/helmets" element={<Helmets />} />
            <Route path="/spacers-axle-adapter" element={<SpacersAxleAdapter />} />
            <Route path="/quad-skates-accessories" element={<QuadSkatesAccessories />} />
            <Route path="/shoes-frame" element={<ShoesFrame />} />
            <Route path="/skin-suits" element={<SkinSuits />} />
            <Route path="/bearings" element={<Bearings />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/speed-frames" element={<SpeedFrames />} />
          </Routes>
          <footer className="bg-white text-gray-900 py-8 text-center">
            <p>Copyright 2025 LGM Sports Online India</p>
          </footer>
          <ToastContainer 
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
