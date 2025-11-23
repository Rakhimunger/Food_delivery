import React, { useState } from "react";
import { assets } from "../../assets/assets";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md">
      {/* Logo */}
      <div>
        <img
          src={assets.logo}
          alt="Logo"
          className="w-24 sm:w-28 md:w-32 object-contain"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-red-500">Home</li>
        <li className="cursor-pointer hover:text-red-500">Menu</li>
        <li className="cursor-pointer hover:text-red-500">Mobile App</li>
        <li className="cursor-pointer hover:text-red-500">Contact</li>
      </ul>

      {/* Icons and Sign-in */}
      <div className="flex items-center gap-4">
        <img
          src={assets.search_icon}
          alt="Search"
          className="w-5 h-5 cursor-pointer"
        />
        <div className="relative cursor-pointer">
          <img src={assets.bag_icon} alt="Cart" className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            2
          </span>
        </div>
        <button className="hidden sm:block bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full">
          Sign In
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1 focus:outline-none"
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-700 font-medium">
            <li className="cursor-pointer hover:text-red-500">Home</li>
            <li className="cursor-pointer hover:text-red-500">Menu</li>
            <li className="cursor-pointer hover:text-red-500">Mobile App</li>
            <li className="cursor-pointer hover:text-red-500">Contact</li>
            <li>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-1 rounded-full">
                Sign In
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
