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
import SearchResults from './components/pages/SearchResults'
import Footer from './components/Footer'
import ProSeriesX1 from './components/pages/ProSeriesX1'
import { FaWhatsapp } from 'react-icons/fa';

const App = () => {
  const randomPhoneNumber = `+91${Math.floor(Math.random() * 9000000000) + 1000000000}`;

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen relative">
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
            <Route path="/search" element={<SearchResults />} />
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
            <Route path="/pro-series-x1" element={<ProSeriesX1 />} />
          </Routes>
          <Footer />
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
          <div className="fixed bottom-6 right-16 bg-white text-gray-600 text-sm p-2 rounded-lg shadow-lg animate-bounce">
            Any queries? Contact us!
          </div>
          <a 
            href={`https://wa.me/${randomPhoneNumber}`} 
            className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 animate-bounce"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
