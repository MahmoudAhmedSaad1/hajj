import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FirstHead from "./firstHead/firstHead";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Packedge", path: "/packedge" },
    { name: "Programs", path: "/programs" },
    { name: "Hotels", path: "/hotels" },
    { name: "About Us", path: "/aboutus" },
    { name: "Contact Us", path: "/contactus" },
    
  ];

  return (

    <div >
      <div className="container  mx-auto px-4">
       <FirstHead />
        <div className="nav-bar">
          <div className="p-4 md:hidden absolute z-50">
            <button onClick={toggleMenu} className="text-amber-700">
              <i className="fa-solid fa-bars w-6 h-6 text-gray-700 hover:text-[#003E71] transition duration-200"></i>
            </button>
          </div>
          <nav className={`${isOpen ? "block" : "hidden"
            }   md:flex md:justify-center md:items-center text-center`}>
            <ul className=" block mt-5 md:mt-0 w-full md:flex md:justify-center md:items-center  md:space-x-10 text-gray-400 font-semibold text-sm">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <li key={item.name} className="relative py-2 md:py-0">
                    <Link to={item.path}>
                      <span
                        className={`${isActive ? "text-[#B68D60]" : ""
                          } hover:text-[#B68D60] transition`}
                      >
                        {item.name}
                      </span>
                    </Link>
                    {isActive && (
                      <span className="absolute left-1/2 -translate-x-1/2 top-6 w-1 h-1 bg-sky-700 rounded-full"></span>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>



        </div>
      </div>
    </div>

  );
};