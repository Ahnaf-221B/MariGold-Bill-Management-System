import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-6 sm:mt-22">
      <div className="text-center">
        {/* Logo and Company Name */}
        <div className="flex flex-col sm:flex-row justify-center items-center mb-4">
          <img src={logo} alt="logo" className="w-16 h-16 rounded-full mb-2 sm:mb-0" />
          <span className="text-3xl font-bold text-white ml-2">Marigold</span>
        </div>

        {/* Copyright */}
        <p className="text-sm mb-4">© 2025 Marigold. All rights reserved.</p>

        {/* Links */}
        <div className="flex justify-center space-x-4">
          <Link to="/" className="hover:text-blue-300 text-sm sm:text-white text-white">
            Home
          </Link>
          <Link to="/bills" className="hover:text-blue-300 text-sm sm:text-base">
            Bills
          </Link>
          <Link to="/profile" className="hover:text-blue-300 text-sm sm:text-base">
            My Profile
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
