import React from "react";
import Logo from "../../assets/Logo.png";
import { IoMdSearch } from "react-icons/io";
import {FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode.jsx";
const Menu = [
    {
        id : 1,
        name : "Home",
        link : "/"
    },
    {
        id : 2,
        name : "Top Rated",
        link : "/#"
    },
    {
        id : 3,
        name : "Kids Wear",
        link : "/#"
    },
    {
        id : 4,
        name : "Menu Wear",
        link : "/#"
    },
    {
        id : 5,
        name : "Electronics",
        link : "/#"
    },  
]
const DropdownLinks = [
    {
        id : 1,
        name : "Trending Products",
        link : "/#"
    },
    {
        id : 2,
        name : "Best Selling",
        link : "/#"
    },
    {
        id : 3,
        name : "Top Rated ",
        link : "/#"
    },
]       
const Navbar = ({ handleOrderPopup}) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900  dark:text-white transition-all duration-200 relative z-40">
      {/* upper Navber */}
        <div className="bg-primary/50 py-2">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <a href="#" className="font-bold text-2xl sm:text-2xl flex ">
                    <img src={Logo} alt="Logo" className="w-10 uppercase " />
                    Shops
                    </a>
                </div>
                {/* search bar */}
                <div className="flex justify-between items-center gap-4"> 
                    <div className="relative group hidden sm:block">

                        <input
                            type="text"
                            placeholder="search"
                            className=" w-50 sm:w-50 group-hover:w-75 transition-all duration-300 
                            rounded-full border border-gray-300 px-2 py-1 focus:border-orange-400 dark:bg-gray-800 bg-white dark:text-white text-gray-700 "
                        />
                        <IoMdSearch
                            className="text-gray-500 group-hover:text-orange-400 
                            absolute top-1/2 -translate-y-1/2 right-3"
                        />
                    </div>
                        {/* order button */}
                    <button
                            onClick={() => handleOrderPopup()}
                            className="bg-orange-400 transition-all duration-200 text-white py-1 px-4
                            rounded-full flex items-center gap-3 group"
                            >
                        <span className="group-hover:block hidden transition-all duration-200">
                            Order
                        </span>
                        <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer " />
                    </button>
                    {/* DarkMode Switch */}
                    <div>
                        <DarkMode />
                    </div>
                </div>
            </div>
        </div>
      {/* lower NavBar */}
      <div data-aos="zoom-in" className= "flex justify-center ">
        <ul className="sm:flex hidden items-center  ">
            {Menu.map((data) => (
                <li key={data.id}>
                    <a href="{data.link}"
                    className="inline-block px-4 hover:text-orange-400 duration-200 "
                    >
                    {data.name}</a>
                </li>
            ))}
            {/* simple dropdown and link  */}
            <li className="group relative cursor-pointer">
                <a href="/#" className="flex items-center gap-0.5 py-2">
                    Trending Products
                    <span>
                        <FaCaretDown 
                        className= "transition-all duration-200 group-hover:rotate-180" />
                    </span>
                </a>
                <div className="absolute z-9999 hidden group-hover:block w-37.5 rounded-md bg-white p-2 text-black shadow-md ">
                    <ul>
                        {DropdownLinks.map((data) => (
                            <li key={data.id}>
                                <a href="{data.link}"
                                className="inline-block p-2 rounded-md w-full hover:bg-orange-200"
                                >
                                {data.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
