import React from "react";
import Header from "./Header";
import Scroll from "./Scroll";
import ForYou from "./ForYou";
import RandomDish from "./RandomDish";
const Home = () => {
  return (
    <div style={{ backgroundColor: "#FAF9F6", minHeight: "100vh" }}>
      <Header />
      <RandomDish />
      <ForYou />
      <Scroll />
    </div>
  );
};

export default Home;
