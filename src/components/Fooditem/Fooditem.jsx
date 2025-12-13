import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="bg-white shadow-md rounded-lg">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />

        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            alt="add"
            className="absolute bottom-2 right-2 cursor-pointer"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="absolute bottom-2 right-2 bg-white px-3 py-1 rounded-full flex gap-2 shadow">
            <img
              src={assets.remove_icon_red}
              alt="remove"
              className="cursor-pointer"
              onClick={() => removeFromCart(id)}
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              alt="add"
              className="cursor-pointer"
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <p className="text-green-600 font-bold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default FoodItem;
