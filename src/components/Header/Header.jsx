import React from "react";
import { assets } from "../../assets/assets";

function Header() {
  return (
    <div className="relative w-[95%] sm:w-[90%] mx-auto text-white rounded-2xl overflow-hidden mt-6 shadow-lg">
      {/*  Real Full Background Image */}
      <img
        src={assets.header_img}
        alt="Delicious Food"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/*  Responsive Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-20 py-16 sm:py-20 md:py-28">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 leading-snug sm:leading-tight drop-shadow-lg max-w-2xl">
          Order Your Favourite Food Here 🍽️
        </h2>

        <p className="text-xs sm:text-sm md:text-lg max-w-md sm:max-w-xl mx-auto mb-6 sm:mb-8 text-gray-200">
          Hungry? Get your favorite meals delivered hot and fresh — from local
          favorites to global cuisines, all in just a few taps. Fast delivery,
          delicious taste, and the comfort of home dining, anytime!
        </p>

        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
          View Menu 🍕
        </button>
      </div>
    </div>
  );
}

export default Header;
