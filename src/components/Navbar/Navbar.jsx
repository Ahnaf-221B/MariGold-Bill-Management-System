import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../provider/AuthContext";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons for mobile menu
import { FaAngleDown } from "react-icons/fa";
const Navbar = () => {
  const { user, signOutUser, balance } = useContext(AuthContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedBillType, setSelectedBillType] = useState("all");

  // Handle user sign out
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen); // Toggle the mobile menu
  };

  // Handle bill type selection
  const handleBillTypeChange = (billType) => {
    setSelectedBillType(billType);
    navigate(`/bills?billType=${billType}`);
  };

  return (
    <header className="bg-blue-50 shadow-md py-4 px-6 sm:px-10 md:px-20 flex justify-between items-center relative">
      {/* Left: Logo & Company Name */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="logo" className="sm:hidden md:block w-12 h-12 rounded-full" />
        <span className="text-xl md:text-3xl font-bold text-blue-700">
          Marigold
        </span>
      </div>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden flex items-center" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? (
          <FaTimes size={24} className="text-blue-700" />
        ) : (
          <FaBars size={24} className="text-blue-700" />
        )}
      </div>

      {/* Center: Navigation Links (mobile hidden, desktop shown) */}
      <nav
        className={`flex  space-x-6 text-gray-700 font-medium  ${
          mobileMenuOpen ? "block" : "hidden"
        } sm:block`}
      >
        <div className="md:flex  md:gap-6">
        <Link to="/" className="hover:text-blue-600 py-2 px-3">
        
          Home
        </Link>
       <div>
        
       </div>
        <Link
           
            className="dropdown hover:text-blue-600 py-2 px-3"
            to="/bills"
          >
            Bills 
          </Link>
        <div className="relative inline-block justify-center">
          
          <div className="dropdown dropdown-bottom dropdown-end">
           
            
      
         <button className="md:mt-3 " tabIndex={0} role="button" onClick={() => handleBillTypeChange("all")}><FaAngleDown   /></button> 
        <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li
                className="py-2 px-4 hover:bg-blue-100"
                onClick={() => handleBillTypeChange("electricity")}
              >
                Electricity
              </li>
              <li
                className="py-2 px-4 hover:bg-blue-100"
                onClick={() => handleBillTypeChange("water")}
              >
                Water
              </li>
              <li
                className="py-2 px-4 hover:bg-blue-100"
                onClick={() => handleBillTypeChange("gas")}
              >
                Gas
              </li>
            </ul>
       
        
           
          </div>
          
        </div>
        <Link to="/profile" className="hover:text-blue-600 py-2 px-3">
          My Profile
        </Link>
        </div>
       
      </nav>

      {/* Right: Auth Buttons */}
      <div className="space-x-4 flex items-center">
        {!user ? (
          <>
            <Link
              to="/login"
              className="px-2 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-2 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            {/* Profile Icon and Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2"
              >
                <Link to="/profile"><img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full"
                />
                </Link>
                
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-60 h-auto z-50">
                  <div className="py-2 px-4 text-sm text-gray-700">
                    <div className="font-semibold text-lg">
                      Current Balance: ${balance}
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="btn btn-sm bg-red-700 rounded-lg text-left text-lg mt-4 py-5 px-4 text-white hover:bg-red-100"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
