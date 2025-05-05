import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <header className="bg-blue-50 shadow-md py-4 px-20 flex justify-between items-center">
      {/* Left: Logo & Company Name */}
      <div className="flex items-center space-x-2">
       <img src={logo} alt="logo" className="w-16 h-16 rounded-full " />
        <span className="text-3xl font-bold text-blue-700">Marigold</span>
      </div>

      {/* Center: Navigation Links */}
      <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
      <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/bills" className="hover:text-blue-600">Bills</Link>
        <Link to="/profile" className="hover:text-blue-600">My Profile</Link>
      </nav>

      {/* Right: Auth Buttons */}
      <div className="space-x-4">
        <Link to="/login" className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white">
          Login
        </Link>
        <Link to="/register" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Register
        </Link>
      </div>
    </header>
  )
}

export default Navbar