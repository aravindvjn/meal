import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";
import { SearchByName } from "../../Links/Links";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const searchHandler = async () => {
    try {
      if (input) {
        const results = await fetch(SearchByName + input);
        if (results.ok) {
          const data = await results.json();
          navigate("/search-result", {
            state: data ? data.meals : "",
          });
          window.scrollTo(0, 0)
        } else {
          console.log("Failed");
        }
      }
    } catch (err) {
      console.error("Error in fetching Search Data");
    }
  };
  return (
    <form data-aos="zoom-out"
      onSubmit={(e) => {
        e.preventDefault();
        searchHandler();
      }} className="sm:w-2/3 lg:m-auto lg:w-1/2 relative"
    >
      <input
        type="text"
        className="w-full  h-10 rounded-lg px-4 shadow-md"
        placeholder="Search.."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <SearchOutlinedIcon
        className="absolute right-7 top-2 cursor-pointer"
        onClick={searchHandler}
      />
    </form>
  );
};

export default Search;
