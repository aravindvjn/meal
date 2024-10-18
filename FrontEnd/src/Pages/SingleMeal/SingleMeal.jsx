import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FullDetailsByIdURL } from "../../Links/Links";
import MealDetails from "./MealDetails";
import Header from "./Header";
import Fetching from "../../Components/FetchingComponent/Fetching";

const SingleMeal = () => {
  const location = useLocation();
  const [mealDetails, setMealDetails] = useState();
  useEffect(() => {
    const fetchDetailsByID = async () => {
      try {
        const results = await fetch(
          FullDetailsByIdURL + location.pathname.split("/").pop()
        );
        if (results.ok) {
          const data = await results.json();
          setMealDetails(data.meals[0]);
        }
      } catch (err) {
        console.error("Error in fetching by Id");
      }
    };
    fetchDetailsByID();
  }, []);
  return (
    <div className="bg-orange-50 min-h-screen">
      <Header title={mealDetails && mealDetails.strMeal} />
      {mealDetails ? (
        <MealDetails details={mealDetails} />
      ) : (
        <div className="px-5 sm:px-10 lg:px-20 pt-5 min-h-screen pb-20">
          <div className="text-center flex flex-col  items-center gap-2">
            <Fetching class1="sm:w-2/5 lg:w-1/3 lg:h-96 h-64 rounded-xl" />
            <Fetching class1="w-1/3 h-2 rounded-sm" />
            <Fetching class1="w-1/3 h-2 rounded-sm" />
          </div>
          <Fetching class1="mt-5 h-2 rounded-sm" />
          <Fetching class1="mt-2 h-44 rounded-sm" />
          <Fetching class1="mt-2 h-2 rounded-sm" />
          <Fetching class1="mt-2 h-44 rounded-sm" />
        </div>
      )}
    </div>
  );
};

export default SingleMeal;
