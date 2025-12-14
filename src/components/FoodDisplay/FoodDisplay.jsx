import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "../Fooditem/Fooditem";

const FoodDisplay = () => {
  const { food_list } = useContext(StoreContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % food_list.length);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? food_list.length - 1 : prev - 1));

  return (
    <div className="mx-10">
      <h2 className="text-center text-4xl font-bold my-6">
        Top dishes near you
      </h2>

      {/* DESKTOP */}
      <div className="hidden md:grid grid-cols-4 gap-6">
        {food_list.map((item) => (
          <FoodItem
            key={item._id} // ✅ IMPORTANT
            id={item._id} // ✅ IMPORTANT
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>

      {/* MOBILE */}
      <div className="md:hidden relative flex justify-center mt-6">
        <button onClick={prevSlide} className="absolute left-2">
          ❮
        </button>

        <div className="w-72">
          <FoodItem
            id={food_list[currentIndex]._id} // ✅
            name={food_list[currentIndex].name}
            price={food_list[currentIndex].price}
            description={food_list[currentIndex].description}
            image={food_list[currentIndex].image}
          />
        </div>

        <button onClick={nextSlide} className="absolute right-2">
          ❯
        </button>
      </div>
    </div>
  );
};

export default FoodDisplay;
