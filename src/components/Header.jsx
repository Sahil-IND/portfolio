import React from "react";

const Header = () => {
  return (
    <nav>
      <div className="flex justify-between bg-blue-950 h-20 w-6xl m-auto rounded-full mt-2 p-7 items-center border-2 border-blue-600">
        <div className="text-white text-3xl font-semibold cursor-pointer ">Sahil.Dev</div>
        <div>
          <ul className="flex gap-8">
            <li className="text-white text-xl relative group transition-colors duration-300 hover:text-yellow-300 font-medium cursor-pointer">Home<span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300  transition-all group-hover:w-full"></span></li>
            <li className="text-white text-xl relative group transition-colors duration-300 hover:text-yellow-300 font-medium cursor-pointer">
              About Me<span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
            </li>
            
            <li className="text-white text-xl relative group transition-colors duration-300 hover:text-yellow-300 font-medium cursor-pointer">Skills<span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span></li>
            
            <li className="text-white text-xl relative group transition-colors duration-300 hover:text-yellow-300 font-medium cursor-pointer">
              Projects<span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
            </li>
            
          </ul>
        </div>
        <div>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-full border-2 border-blue-[0f172a] font-semibold hover:bg-yellow-300 transition duration-300 cursor-pointer ">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
