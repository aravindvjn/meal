import React from "react";
import { useNavigate } from "react-router-dom";

const MealCatgory = ({ meals }) => {
    const navigate = useNavigate()
  return (
    <div className="px-5 sm:px-10 lg:px-20 pt-5 min-h-screen pb-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 lg:grid-cols-4 sm:gap-7 lg:gap-10 ">
        {meals.length > 0 &&
          meals.map((meal) => {
            return (
              <div key={meal.idMeal} className="flex  items-center flex-col bg-white pb-3 text-center rounded-lg shadow-md h-44 lg:h-64" onClick={() => {
                navigate("/single-meal/" + meal.idMeal);
                window.scrollTo(0, 0);
              }}>
                <div className="h-32 lg:h-52 overflow-hidden">
                  <img
                    src={meal.strMealThumb}
                    alt=""
                    className="rounded-t-md object-cover"
                  />
                </div>

                <h1 className="text-sm p-2 h-8 lg:h- overflow-hidden">{meal.strMeal}</h1>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MealCatgory;
