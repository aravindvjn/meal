import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../SingleMeal/Header";
import MealCatgory from "../SingleCategory/MealCatgory";

const SearchResult = () => {
  const location = useLocation();
  if (!location.state) {
    return (
      <div className="bg-orange-50 min-h-screen">
        <Header title={"Search Results"} />
        <h1 className="text-center mt-4">No results found</h1>
      </div>
    );
  }

  return (
    <div className="bg-orange-50 min-h-screen">
      <Header title={"Search Results"} />
      {location.state.length > 0 ? (
        <MealCatgory meals={location.state} />
      ) : (
        <h1 className="text-center mt-4">No results found</h1>
      )}
    </div>
  );
};

export default SearchResult;
