import React from "react";
import Header from "../SingleMeal/Header";

const Info = () => {
  return (
    <div className="bg-orange-50 min-h-screen">
      <Header title={"Info"} />
      <div className="px-5 sm:px-10 lg:px-20 pt-5 min-h-screen pb-20 text-center text-sm sm:text-lg">
        <h1 className="font-bold">Welcome to Our Recipe App!</h1>
        <p>
          Discover a world of culinary delights with our Recipe App, powered by
          the Free Recipe API! Whether you're searching for a quick weeknight
          dinner or an elaborate dish for a special occasion, our app has you
          covered. Simply enter your preferred ingredients, meal types, or
          cuisines to find a variety of delicious recipes tailored to your
          tastes. Save your favorite recipes to easily revisit them later. Enjoy
          exploring new meals, and stay tuned for exciting features coming soon,
          including advanced ingredient filtering and the ability to add your
          own recipes and images! Happy cooking!
        </p>
      </div>
    </div>
  );
};

export default Info;
