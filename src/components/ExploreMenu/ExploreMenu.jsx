import React from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="w-[95%] sm:w-[90%] mx-auto mt-8 text-center">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        Explore Our Menu 🍱
      </h1>

      {/* Subtitle */}
      <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-2xl mx-auto">
        Discover a variety of dishes crafted with love and passion — from spicy
        delights to sweet treats. Pick your favorite and enjoy fast delivery at
        your doorstep!
      </p>

      {/* Menu List */}
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-8 overflow-x-auto md:overflow-x-visible pb-4">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            className="flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-300 min-w-[110px] sm:min-w-[130px]"
          >
            {/* Circular Image */}
            <div
              className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${
                category === item.menu_name ? "ring-4 ring-orange-500" : ""
              }`}
            >
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Menu Name */}
            <p className="mt-3 text-sm sm:text-base font-medium text-gray-700">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
