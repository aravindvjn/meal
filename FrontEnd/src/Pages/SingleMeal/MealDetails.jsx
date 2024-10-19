import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const MealDetails = ({ details }) => {
  const [fav, setFav] = useState(false);
  const favHandler = () => {
    const array = JSON.parse(localStorage.getItem("favourites"));
    if (localStorage.getItem("favourites")) {
      const check = array.filter((item) => {
        return item === details.idMeal;
      });
      if (check.length > 0) {
        const newArray = JSON.stringify(
          array.filter((item) => item !== details.idMeal)
        );
        localStorage.setItem("favourites", newArray);
        setFav(false);
      } else {
        const newArray = JSON.stringify([...array, details.idMeal]);
        localStorage.setItem("favourites", newArray);
        setFav(true);
      }
    } else {
      const newArray = JSON.stringify([details.idMeal]);
      localStorage.setItem("favourites", newArray);
      setFav(true);
    }
  };
  useEffect(() => {
    const fetchLocalStorage = () => {
      if (localStorage.getItem("favourites")) {
        const array = JSON.parse(localStorage.getItem("favourites"));
        const check = array.filter((item) => {
          return item === details.idMeal;
        });
        if (check.length > 0) {
          setFav(true);
        } else {
          setFav(false);
        }
      }
    };
    fetchLocalStorage();
  }, [fav]);
  if (!details.length >0) {
    return;
  }
  return (
    <div className="px-5 sm:px-10 lg:px-20 pt-5 min-h-screen pb-20">
      <div className="text-center flex flex-col  items-center">
        <img
          src={details.strMealThumb}
          alt=""
          className="w-2/3 sm:w-2/5 lg:w-1/3 rounded-xl"
        />
        <h1 className="font-bold">{details.strMeal}</h1>
        <h1 className="font-light text-sm italic">{details.strCategory}</h1>
      </div>
      {fav ? (
        <FavoriteIcon
          onClick={favHandler}
          className="text-pink-500 cursor-pointer"
        />
      ) : (
        <FavoriteBorderOutlinedIcon
          className="cursor-pointer"
          onClick={favHandler}
        />
      )}
      <div className="text-sm mt-3">
        <h1 className="font-bold text-lg pb-2 opacity-60">Ingredients</h1>
        <table>
          <tbody>
            {Object.getOwnPropertyNames(details)
              .filter(
                (key) => key.includes("strIngredient") && details[key] !== ""
              )
              .map((key, index) => (
                <tr key={key}>
                  <td className="font-medium pr-2">{details[key]}</td>
                  <td> : {details["strMeasure" + (index + 1)]}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="pt-5 text-center">
        <h1 className="font-bold text-lg opacity-60">Instructions</h1>
        <p className="italic text-sm">{details.strInstructions}</p>
      </div>
    </div>
  );
};

export default MealDetails;
