import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation, useNavigate } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-amber-50 shadow-lg shadow-black flex justify-around items-center">
      <HomeIcon
        className={`cursor-pointer ${
          location.pathname === "/" ? "opacity-65" : ""
        }`}
        onClick={() => {
          navigate("/");
          window.scrollTo(0, 0);
        }}
      />
      <FavoriteIcon
        className={`cursor-pointer ${
          location.pathname === "/favourites" ? "opacity-65" : ""
        }`}
        onClick={() => {
          navigate("/favourites");
          window.scrollTo(0, 0);
        }}
      />
      <InfoIcon
        className={`cursor-pointer ${
          location.pathname === "/info" ? "opacity-65" : ""
        }`}
        onClick={() => {
          navigate("/info");
          window.scrollTo(0, 0);
        }}
      />
    </div>
  );
};

export default Footer;
