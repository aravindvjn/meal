import React, { useEffect, useState } from "react";
import { ByCountryURL, RandomURL } from "../../Links/Links";

const ForYou = () => {
  const [random, setRandom] = useState();
  const [byCounrty, setByCountry] = useState([]);
  useEffect(() => {
    const fetchRandom = async () => {
      try {
        const results = await fetch(ByCountryURL + "Indian");
        if (results.ok) {
          const data = await results.json();
          console.log(data.meals);
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
      <div className="flex overflow-x-scroll rounded-lg sm:rounded-2xl scroll-smooth">
        {byCounrty.length > 0 &&
          byCounrty.map((item) => {
            return (
              <div className="flex justify-center items-center flex-col relative min-w-full bg-black h-32 overflow-hidden border border-white lg:h-60">
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
          })}
      </div>
    </div>
  );
};

export default ForYou;
