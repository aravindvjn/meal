import React from "react";
import { useNavigate } from "react-router-dom";

const MealCatgory = ({ meals }) => {
    const navigate = useNavigate()
  return (
    <div className="px-5 sm:px-10 lg:px-20 pt-5 min-h-screen pb-20">
      <div className="grid grid-cols-2 gap-5 ">
        {meals.length > 0 &&
          meals.map((meal) => {
            return (
              <div key={meal.idMeal} className="flex  items-center flex-col bg-white pb-3 text-center rounded-lg shadow-md h-44 " onClick={() => {
                navigate("/single-meal/" + meal.idMeal);
              }}>
                <div className="h-32 overflow-hidden">
                  <img
                    src={meal.strMealThumb}
                    alt=""
                    className="rounded-t-md object-cover"
                  />
                </div>

                <h1 className="text-sm p-2 h-8 overflow-hidden">{meal.strMeal}</h1>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MealCatgory;
