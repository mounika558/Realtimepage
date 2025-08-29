import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ValueForMoney from './components/valueformoney'
import Momentspage from './pages/Momentspage'
import Process from './pages/process'

const App = () => {
  return (
    <Router>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-6 text-white">
          <li>
            <Link to="/" className="hover:text-yellow-300">
              Moments Page
            </Link>
          </li>
          <li>
            <Link to="/process" className="hover:text-yellow-300">
              Process Page
            </Link>
          </li>
          <li>
            <Link to="/Valueformoney" className="hover:text-yellow-300">
              Value for Money
            </Link>
          </li>
        </ul>
      </nav>

      {/* Page Content */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Momentspage />} />
          <Route path="/process" element={<Process />} />
          <Route path="/Valueformoney" element={<ValueForMoney />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
