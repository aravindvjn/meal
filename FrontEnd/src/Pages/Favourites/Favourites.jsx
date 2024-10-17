import React, { useEffect, useState } from "react";
import Header from "../SingleMeal/Header";
import { FullDetailsByIdURL } from "../../Links/Links";
import MealCatgory from "../SingleCategory/MealCatgory";
const Favourites = () => {
  const [favArray, setFavArray] = useState([]);
  const array = JSON.parse(localStorage.getItem("favourites"));
  useEffect(() => {
    const fetchMealById = async (id, index) => {
      try {
        const results = await fetch(FullDetailsByIdURL + id);
        if (results.ok) {
          const data = await results.json();
          setFavArray((prev) => {
            const updatedArray = [...prev];
            updatedArray[index] = data.meals[0];
            return updatedArray;
          });
        } else {
          console.log("Failed to fetch Data");
        }
      } catch (err) {
        console.error("error in fetching favourites");
      }
    };

    if (array && array.length > 0) {
      console.log("fav", array);
      array.map((item, index) => {
        fetchMealById(item, index);
      });
    }
  }, []);
  return (
    <div className="bg-orange-50 min-h-screen">
      <Header title={"Favourites"} />
      {array && array.length>0 ?  <MealCatgory meals={favArray} /> : <h1 className="text-center mt-3">No Favourites</h1>}
    </div>
  );
};

export default Favourites;
