import React from "react";
import { assets } from "../../assets/assets";

const Fooditem = ({ name, price, description, image }) => {
  return (
    <div className="food-item bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="food-item-img-container">
        <img
          className="food-item-image w-full h-48 object-cover"
          src={image}
          alt={`Image of ${name}`}
        />
      </div>

      <div className="food-item-info p-4">
        <div className="food-item-name-rating flex justify-between items-center mb-2">
          <p className="text-lg font-semibold text-gray-800 ">{name}</p>
          <img className="w-24" src={assets.rating_starts} alt="Rating Stars" />
        </div>

        <p className="text-sm text-gray-600 mb-4">{description}</p>

        <p className="text-lg font-bold text-green-600">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Fooditem;
