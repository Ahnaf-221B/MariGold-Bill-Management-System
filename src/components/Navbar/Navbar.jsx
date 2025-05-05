import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <header className="bg-blue-50 shadow-md py-4 px-6 sm:px-10 md:px-20 flex justify-between items-center">
      {/* Left: Logo & Company Name */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="logo" className="sm:w-[10px] sm:h-[10px] md:w-16 md:h-16 rounded-full" />
        <span className="text-xl md:text-3xl font-bold text-blue-700">Marigold</span>
      </div>

      {/* Center: Navigation Links (mobile hidden, desktop shown) */}
      <nav className="hidden sm:flex space-x-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/bills" className="hover:text-blue-600">Bills</Link>
        <Link to="/profile" className="hover:text-blue-600">My Profile</Link>
      </nav>

      {/* Right: Auth Buttons */}
      <div className="space-x-4">
        <Link to="/login" className="px-2 py-2  text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white">
          Login
        </Link>
        <Link to="/register" className="px-2 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Register
        </Link>
      </div>

      {/* Mobile Menu Button (hidden on PC and tablet) */}
      
    </header>
  )
}

export default Navbar
