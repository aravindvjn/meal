import React, { useEffect, useState } from "react";
import { MealsByCategory } from "../../Links/Links";
import { useLocation } from "react-router-dom";
import MealCatgory from "./MealCatgory";
import Header from "../SingleMeal/Header";
import Fetching from "../../Components/FetchingComponent/Fetching";

const SingleCategory = () => {
  const [catagoryMeals, setCategoryMeals] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const fetchMealsByCategory = async () => {
      try {
        const results = await fetch(
          MealsByCategory + location.pathname.split("/").pop()
        );
        if (results.ok) {
          const data = await results.json();
          setCategoryMeals(data.meals);
        }
      } catch (err) {
        console.error("Error in fetching by Id");
      }
    };
    fetchMealsByCategory();
  }, []);
  return (
    <div className="bg-orange-50 min-h-screen">
      <Header title={location.pathname.split("/").pop()} />
      {catagoryMeals.length > 0 ? (
        <MealCatgory meals={catagoryMeals} />
      ) : (
        <div className="px-5 sm:px-10 lg:px-20 pt-5 min-h-screen pb-20">
          <div className="grid grid-cols-2 gap-5 ">
            {Array(10)
              .fill()
              .map((_, index) => (
                <Fetching key={index} class1="h-32" />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleCategory;
