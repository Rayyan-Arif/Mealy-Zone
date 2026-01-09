import { Link } from "react-router-dom";
import { FaUtensils, FaHamburger, FaLeaf, FaPizzaSlice } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex w-screen bg-[rgba(248,247,244,0.95)] h-16 border-b border-[#e6e4df] fixed items-center justify-evenly top-0 left-0 z-50">
        <div className="flex justify-center items-center gap-3">
          <FaUtensils className="text-2xl"/>
          <FaHamburger className="text-2xl"/>
          <div className="text-2xl font-bold ">Mealy Zone</div>
          <FaPizzaSlice className="text-2xl"/>
          <FaLeaf className="text-2xl"/>
        </div>
        <div className="">
            <ul className="flex font-semibold gap-3">
                <li><NavLink 
                  to="/" 
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#e85d44] font-semibold border-b-2 border-[#e85d44]"
                      : "text-gray-600"
                  }
                >Home</NavLink></li>
                <li><NavLink 
                  to="/categories" 
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#e85d44] font-semibold border-b-2 border-[#e85d44]"
                      : "text-gray-600"
                  }
                >Categories</NavLink></li>
                <li><NavLink 
                  to="/favourites" 
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#e85d44] font-semibold border-b-2 border-[#e85d44]"
                      : "text-gray-600"
                  }
                >Favourites</NavLink></li>
                <li><NavLink 
                  to="/about" 
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#e85d44] font-semibold border-b-2 border-[#e85d44]"
                      : "text-gray-600"
                  }
                >About</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar