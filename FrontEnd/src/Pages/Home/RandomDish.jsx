import React, { useEffect, useState } from "react";
import { RandomURL } from "../../Links/Links";

const RandomDish = () => {
  const [random, setRandom] = useState();
  useEffect(() => {
    const fetchRandom = async () => {
      try {
        const results = await fetch(RandomURL);
        if (results.ok) {
          const data = await results.json();
          setRandom(data.meals[0]);
        } else {
          console.log("Failed to fetch all categorie");
        }
      } catch (err) {
        console.error("Error in fetching category data");
      }
    };
    fetchRandom();
  }, []);
  return (
    <div className="px-5 sm:px-10 lg:px-20">
      {random && (
        <>
          <h1 className="font-bold mt-3">
            Interested In {random.strArea} Dish ?
          </h1>
          <div className="relative bg-black  mt-3 rounded-lg overflow-hidden h-32 shadow-sm ">
            <div className="font-bold mt-3 pl-5 absolute text-white text-xl w-full text-center bottom-3 ">
              <h1>{random.strMeal}</h1>
              <h1 className="text-lg italic">{random.strCategory}</h1>
            </div>
            <img
              src={random.strMealThumb}
              alt=""
              className="w-full h-32 object-cover opacity-55"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default RandomDish;
