import React from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useNavigate } from "react-router-dom";
const Header = ({title}) => {
  const navigate = useNavigate();
  return (
    <div className="bg-red-900 h-12 flex items-center relative">
      <ArrowBackOutlinedIcon
        onClick={() => navigate(-1)}
        className="text-white m-3 cursor-pointer"
      />
      <h1 className="font-bold  text-white absolute left-1/2 -translate-x-1/2">{title}</h1>
    </div>
  );
};

export default Header;
