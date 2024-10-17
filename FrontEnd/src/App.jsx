import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Favourites from "./Pages/Favourites/Favourites";
import Account from "./Pages/Account/Account";
import SingleMeal from "./Pages/SingleMeal/SingleMeal";
import SingleCategory from "./Pages/SingleCategory/SingleCategory";
import SearchResult from "./Pages/SearchResult/SearchResult";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/account" element={<Account />} />
        <Route path="/single-meal/:id" element={<SingleMeal />} />
        <Route path="/single-category/:category" element={<SingleCategory />} />
        <Route path="/search-result" element={<SearchResult />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
