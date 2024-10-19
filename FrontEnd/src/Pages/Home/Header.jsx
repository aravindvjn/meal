import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Search from '../../Components/Search/Search';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <div data-aos="zoom-out" className="sm:pl-10 lg:px-20 bg-gradient-to-l from-orange-600 to-orange-700 rounded-b-2xl w-full shadow-sm">
        <div className=" flex justify-between p-5">
          <div>
            <HomeIcon className="text-white pb-1" fontSize="small" />
            <h1 className="inline text-white font-bold">Home</h1>
          </div>
        </div>
        <div className="w-full px-4 relative">
          <Search />
        </div>
        <div className="w-screen pb-10"></div>
      </div>
  )
}

export default Header
