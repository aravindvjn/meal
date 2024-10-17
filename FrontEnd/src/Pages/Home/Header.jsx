import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Search from '../../Components/Search/Search';
const Header = () => {
  return (
    <div className="bg-gradient-to-l from-orange-600 to-orange-700 rounded-b-2xl w-full shadow-sm">
        <div className="flex justify-between p-5">
          <div>
            <HomeIcon className="text-black pb-0.5" fontSize="small" />
            <h1 className="inline font-bold">Home</h1>
          </div>
          <div className="flex gap-2">
            <button className="rounded-full bg-white w-14">One</button>
            <button className="rounded-full bg-white w-6">O</button>
          </div>
        </div>
        <div className="w-full px-3 relative">
          <Search />
        </div>
        <div className="w-screen pb-10"></div>
      </div>
  )
}

export default Header
