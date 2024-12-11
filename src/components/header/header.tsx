import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <Link to={"/products"}>
          <div className="ml-5">
            <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
              React Redux Shopping Card
            </h1>
          </div>
        </Link>
        <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold">
            <Link to={"/products"}>
                <li className="cursor-pointer font-bold text-xl  md:text-2xl tracking-wide hover:text-red-900 hover:scale-125">Home</li>
            </Link>
            <Link to={"/card"}>
                <li className="cursor-pointer font-bold text-xl md:text-2xl  tracking-wide hover:text-red-900 hover:scale-125">Card</li>
            </Link>
            <Link to={"/create-product"}>
            <li className="cursor-pointer  font-bold text-xl md:text-2xl tracking-wide  hover:text-red-900 hover:scale-125">Create</li>
            </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;