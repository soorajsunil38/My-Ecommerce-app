import React, { useState } from "react";
import { useLocation, Link } from 'react-router-dom';
import shutter from '../assets/shutter.png';
import cart_icon from '../assets/cart_icon.png'
import dwnlod from '../assets/dwnlod.png'
import profile from '../assets/profile.png'
import srch from '../assets/srch.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const location = useLocation();

  const excludedPaths = ['/login', '/signup'];

  if (excludedPaths.includes(location.pathname)) {
    return null; // Don't render the navbar for these paths
  }

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-row items-center justify-between ml-[-12px]">
            {/* <img src={shutter} alt="app_icon" className="w-16 h-16"/> */}
            <a href="/" className="text-2xl font-mono font-bold text-black p-5 ml-[-20px]">
             SHUTTERLY</a>
          </div>
          <div className="hidden md:block relative w-1/2">
            <div className="flex items-center px-4 py-2 bg-gray-200">
                <img src={srch} alt="search_icon" className="w-6 h-6 ml-1" />
              <input
                type="text"
                placeholder="Search for Products, Brands..."
                className="w-full px-4 py-2 text-sm text-black bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
          </div>
          <div className="md:hidden mt-2">
          {!isOpen && (
            <div className="flex items-center px-4 py-2 bg-gray-100">
                <img src={srch} alt="search_icon" className="w-6 h-6 ml-1" />
              <input
                type="text"
                placeholder="Search for Products, Brands..."
                className="flex-grow ml-2 text-sm text-black focus:outline-none bg-transparent"
              />
            </div>
          )}
        </div>
          <div className="flex justify-between space-x-8">
            <Link to="/cart">
              <img src={cart_icon} alt="cart_icon" className="w-9 hover:bg-gray-200 cursor-pointer rounded-lg"/>
            </Link>
            <img src={dwnlod} alt="" className="w-9"/>
            <img src={profile} alt="" className="w-9 hover:bg-gray-200 rounded-lg" onClick={toggleProfileMenu}/>
            {profileMenuOpen && (
                <div className="absolute right-0 mt-10 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</Link>
                  <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Orders</Link>
                  <Link to="/wishlist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Wishlist</Link>
                  <Link to="/manage-profiles" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Manage Profiles</Link>
                  <Link to="/switch-account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Switch Account</Link>
                  <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</Link>
                </div>
              )}
          </div>
        </div>
          {isOpen && (
          <div className="md:hidden mt-2 space-y-4">
            <div className="flex items-center px-4 py-2 bg-gray-100">
            <img src={srch} alt="search_icon" className="w-6 h-6 ml-1" />
              <input
                type="text"
                placeholder="Search products..."
                className="flex-grow ml-2 text-sm text-black focus:outline-none bg-transparent"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-start space-x-3">
                <img src={cart} alt="cart_icon" className="w-9" />
                <span className="text-sm text-white">Cart</span>
              </div>
              <div className="flex items-center justify-start space-x-3">
                <img src={dwnlod} alt="download_icon" className="w-9" />
                <span className="text-sm text-white">Download</span>
              </div>
              <div className="flex items-center justify-start space-x-3">
                <img src={profile} alt="profile_icon" className="w-9" />
                <span className="text-sm text-white">Profile</span>
              </div>
            </div>
          </div>
        )}
        
      </div>
    </nav>
    )
}

export default Navbar