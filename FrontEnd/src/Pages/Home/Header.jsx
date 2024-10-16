import React from 'react'
import HomeIcon from "@mui/icons-material/Home";

const Header = () => {
  return (
    <div className="bg-orange-500 rounded-b-2xl w-screen shadow-sm">
        <div className="flex justify-between p-5">
          <div>
            <HomeIcon className="text-red-500" fontSize="small" />
            <h1 className="inline font-bold">Home</h1>
          </div>
          <div className="flex gap-2">
            <button className="rounded-full bg-white w-14">One</button>
            <button className="rounded-full bg-white w-6">O</button>
          </div>
        </div>
        <div className="w-full px-3">
          <input type="text" className="w-full h-10 rounded-lg px-4 shadow-md" placeholder="Search.."  />
        </div>
        <div className="w-screen pb-10"></div>
      </div>
  )
}

export default Header
