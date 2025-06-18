
import { Link } from "react-router-dom";
import { FiArrowDownRight } from "react-icons/fi";


const Header = () => {
  
  
  return (
    <nav className="sticky top-0 z-50 ">
      <div className="flex justify-between bg-blue-950 h-20 w-6xl m-auto rounded-full mt-2 p-7 items-center border-2 border-blue-600">
        <Link to="/">
          <div className="text-white text-3xl font-semibold cursor-pointer ">
            Sahil.Dev
          </div>
        </Link>
        <div>
          <ul className="flex gap-8">
            <Link to="/">
              <li className="text-white text-xl relative group transition-colors duration-300 hover:text-yellow-300 font-medium cursor-pointer">
                Home
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300  transition-all group-hover:w-full"></span>
              </li>
            </Link>
            <Link to="/about">
              <li className="text-white text-xl relative group transition-colors duration-300 hover:text-yellow-300 font-medium cursor-pointer">
                About Me
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
              </li>
            </Link>

            <Link to="/skill">
              <li className="text-white text-xl relative group transition-colors duration-300 hover:text-yellow-300 font-medium cursor-pointer">
                Skills
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
              </li>
            </Link>
            <Link to="/project">
              <li className="text-white text-xl relative group transition-colors duration-300 hover:text-yellow-300 font-medium cursor-pointer">
                Projects
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <Link to="/contact">
            <button className="flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-full border-2 border-[#0f172a] font-semibold hover:bg-yellow-300 transition duration-300 cursor-pointer">
      Hire Me
      <FiArrowDownRight className="text-lg" />
    </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
