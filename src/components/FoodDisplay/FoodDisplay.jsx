import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext.jsx";

import Fooditem from "../FoodItem/FoodItem.jsx";

const FoodDisplay = () => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display">
      <h2>Top dishes near you</h2>

      <div className="grid grid-cols-4 gap-6">
        {food_list.map((item, index) => (
          <Fooditem
            key={index}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
