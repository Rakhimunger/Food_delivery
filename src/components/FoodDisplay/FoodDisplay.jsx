import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext.jsx";
import FoodItem from "../../components/FoodItem/FoodItem.jsx";

const FoodDisplay = () => {
  const { food_list } = useContext(StoreContext);

  // slider state for mobile
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % food_list.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? food_list.length - 1 : prev - 1));
  };

  return (
    <div className="food-display mx-10">
      {/* Heading */}
      <h2 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl my-6 leading-tight">
        Top dishes near you
      </h2>

      {/* ----------- DESKTOP GRID (768px) ----------- */}
      <div className="hidden md:grid grid-cols-4 gap-6">
        {food_list.map((item, index) => (
          <FoodItem
            key={index}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>

      {/* ----------- MOBILE SLIDER (< 768px) ----------- */}
      <div className="md:hidden relative w-full flex justify-center items-center mt-6">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 bg-black text-white px-3 py-2 rounded-full opacity-70"
        >
          ❮
        </button>

        {/* Single Slide */}
        <div className="w-72">
          <FoodItem
            id={food_list[currentIndex].id}
            name={food_list[currentIndex].name}
            description={food_list[currentIndex].description}
            price={food_list[currentIndex].price}
            image={food_list[currentIndex].image}
          />
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 bg-black text-white px-3 py-2 rounded-full opacity-70"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default FoodDisplay;
