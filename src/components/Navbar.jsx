import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

import { FaXmark, FaBars } from "react-icons/fa6";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 // const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    
    { link: "Demo", path: "faq" },
  ];

  return (
    <div className="border-black bg-black mb-3">
      <header className="w-full bg-black md:bg-transparent top-0 left-0 right-0 border-black">
        <nav
          className="py-6 lg:px-14 px-4 top-0 left-0 right-0 border-b-0 bg-black duration-300 "
        >
          <div className="flex justify-between items-center text-base gap-8">
            <a
              className="text-2xl font-semibold flex items-center space-x-3"
              href="/"
            >
              <span className="text-[#514fe0]">Heaven Estate</span>
            </a>

            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={path}
                  className="block text-base text-white hover:text-brandPrimary font-bold cursor-pointer"
                >
                  {link}
                </Link>
              ))}
            </ul>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-neutralDGrey focus:outline-none focus:text-gray-500"
              >
                {isMenuOpen ? (
                  <FaXmark className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          <div
            className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
              isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
            }`}
          >
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-white hover:text-brandPrimary first:font-medium"
              >
                {link}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
};
