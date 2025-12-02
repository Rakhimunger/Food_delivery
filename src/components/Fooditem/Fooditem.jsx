import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Fooditem = ({ name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="food-item bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="food-item-img-container relative">
        <img
          className="food-item-image w-full h-48 object-cover"
          src={image}
          alt={`Image of ${name}`}
        />

        {/* Add / Remove Buttons */}
        {!itemCount ? (
          <img
            className="add absolute bottom-2 right-2 cursor-pointer"
            onClick={() => setItemCount((prev) => prev + 1)}
            src={assets.add_icon_white}
            alt="add"
          />
        ) : (
          <div className="absolute bottom-2 right-2 bg-white px-3 py-1 rounded-full flex items-center gap-2 shadow">
            <img
              onClick={() => setItemCount((prev) => prev - 1)}
              src={assets.remove_icon_red}
              alt="remove"
              className="cursor-pointer"
            />

            <p className="font-semibold">{itemCount}</p>

            <img
              onClick={() => setItemCount((prev) => prev + 1)}
              src={assets.add_icon_green}
              alt="add"
              className="cursor-pointer"
            />
          </div>
        )}
      </div>

      {/* Food Info */}
      <div className="food-item-info p-4">
        <div className="food-item-name-rating flex justify-between items-center mb-2">
          <p className="text-lg font-semibold text-gray-800">{name}</p>
          <img className="w-24" src={assets.rating_starts} alt="Rating Stars" />
        </div>

        <p className="text-sm text-gray-600 mb-4">{description}</p>

        <p className="text-lg font-bold text-green-600">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Fooditem;
