import React, { useEffect, useState } from "react";
import { ByCountryURL } from "../../Links/Links";
import { useNavigate } from "react-router-dom";
import Fetching from "../../Components/FetchingComponent/Fetching";

const ForYou = () => {
  const [byCounrty, setByCountry] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchRandom = async () => {
      try {
        const results = await fetch(ByCountryURL + "Indian");
        if (results.ok) {
          const data = await results.json();
          setByCountry(data.meals);
        } else {
          console.log("Failed to fetch random");
        }
      } catch (err) {
        console.error("Error in fetching Random ");
      }
    };
    fetchRandom();
  }, []);
  return (
    <div className="sm:px-10 lg:px-20 mt-3 px-5">
      <h1 className="font-bold">For You</h1>
      <div className="flex overflow-x-scroll rounded-lg  scroll-smooth sm:scrollbar-hide sm:gap-5 gap-2 py-3 overflow-hidden">
        {byCounrty.length >0 ?
          byCounrty.map((item) => {
            return (
              <div
                key={item.idMeal}
                onClick={() => {
                  navigate("/single-meal/" + item.idMeal);
                }}
                className="flex justify-center items-center flex-col relative min-w-72 sm:min-w-96 shadow-sm bg-black h-32 overflow-hidden border border-white lg:h-60 rounded-lg  cursor-pointer"
              >
                <img
                  src={item.strMealThumb}
                  className="opacity-75 object-cover"
                  alt=""
                />
                <div className="absolute text-white text-lg text-center">
                  <h1 className="font-medium">{item.strMeal}</h1>
                </div>
              </div>
            );
          }) : <>
          <Fetching class1="min-w-72 sm:min-w-96 shadow-sm  h-32 lg:h-60 rounded-lg  cursor-pointer" /></>}
      </div>
    </div>
  );
};

export default ForYou;
