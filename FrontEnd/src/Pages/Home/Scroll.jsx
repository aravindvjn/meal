import React, { useEffect, useState } from "react";
import { CategoryURL } from "../../Links/Links";
import { useNavigate } from "react-router-dom";
import Fetching from "../../Components/FetchingComponent/Fetching";

const Scroll = () => {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const results = await fetch(CategoryURL);
        if (results.ok) {
          const data = await results.json();
          setCategory(data.categories);
        } else {
          console.log("Failed to fetch all categorie");
        }
      } catch (err) {
        console.error("Error in fetching category data");
      }
    };
    fetchCategory();
  }, []);
  return (
    <div className="sm:px-10 px-4 lg:px-20 pb-12">
      <h1 className="font-bold mt-3 pl-2">Categories</h1>
      <div className="grid grid-cols-3 gap-3 py-5 mb-5 px-2 lg:gap-10">
        {category.length > 0
          ? category.map((cate) => {
              return (
                <div
                  key={cate.idCategory}
                  onClick={() =>
                    navigate("/single-category/" + cate.strCategory)
                  }
                  className="text-center text-sm  rounded-xl shadow-lg flex justify-center items-center flex-col p-4 font-semibold gap-1 lg:text-lg cursor-pointer bg-white"
                >
                  <img
                    src={cate.strCategoryThumb}
                    alt=""
                    className="rounded-md"
                  />
                  <h3>{cate.strCategory}</h3>
                </div>
              );
            })
          : Array(9)
              .fill()
              .map((_, index) => (
                <Fetching key={index} class1="rounded-xl shadow-lg flex-col h-24 gap-1  cursor-pointer" />
              ))}
      </div>
    </div>
  );
};

export default Scroll;
