import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";
import { SearchByName } from "../../Links/Links";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const searchHandler = async () => {
    try {
      const results = await fetch(SearchByName + input);
      if (results.ok) {
        const data = await results.json();
        navigate("/search-result", {
          state: data ? data.meals : "" ,
        });
      }else{
        console.log("Failed")
      }
    } catch (err) {
      console.error("Error in fetching Search Data");
    }
  };
  return (
    <div>
      <input
        type="text"
        className="w-full h-10 rounded-lg px-4 shadow-md"
        placeholder="Search.."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <SearchOutlinedIcon
        className="absolute right-5 top-2 cursor-pointer"
        onClick={searchHandler}
      />
    </div>
  );
};

export default Search;
