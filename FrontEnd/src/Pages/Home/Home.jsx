import React from "react";
import Header from "./Header";
import Scroll from "./Scroll";
import ForYou from "./ForYou";
import RandomDish from "./RandomDish";
const Home = () => {
  return (
    <div className="min-h-screen bg-orange-50">
      <Header />
      <RandomDish />
      <ForYou />
      <Scroll />
    </div>
  );
};

export default Home;
