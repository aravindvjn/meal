import React, { useEffect, useState } from "react";
import { RandomURL } from "../../Links/Links";
import { useNavigate } from "react-router-dom";
import Fetching from "../../Components/FetchingComponent/Fetching";

const RandomDish = () => {
  const [random, setRandom] = useState();
  const navigate = useNavigate();
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
    <div data-aos='fade-in' className="px-5 sm:px-10 lg:px-20">
      {random ? (
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
              onClick={() => {
                navigate("/single-meal/" + random.idMeal);
                window.scrollTo(0, 0);
              }}
            />
          </div>
        </>
      ) : (
        <>
          <Fetching class1="h-5 rounded-md w-1/2 mt-3" />
          <Fetching class1="mt-3 rounded-lg overflow-hidden h-32 shadow-sm " />
        </>
      )}
    </div>
  );
};

export default RandomDish;
