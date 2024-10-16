import React, { useEffect, useState } from "react";
import { CategoryURL } from "../../Links/Links";

const Scroll = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
     try{
        const results = await fetch(CategoryURL);
        if (results.ok) {
          const data = await results.json();
          setCategory(data.categories);
        }else{
            console.log("Failed to fetch all categorie")
        }
     }catch(err){
        console.error("Error in fetching category data")
     }
    };
    fetchCategory();
  }, []);
  return (
    <div className="sm:px-10 lg:px-20">
      <h1 className="font-bold mt-3 pl-5">Categories</h1>
      <div className="grid grid-cols-3 gap-3 py-5 mb-5 px-2 lg:gap-10">
        {category.length > 0 &&
          category.map((cate) => {
            return (
              <div className="text-center text-sm bg-amber-50 rounded-xl shadow-lg flex justify-center items-center flex-col p-4 font-semibold gap-1 lg:text-lg cursor-pointer">
                <img src={cate.strCategoryThumb} alt="" className="rounded-md" />
                <h3>{cate.strCategory}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Scroll;
