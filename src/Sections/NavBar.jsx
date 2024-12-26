import React, { useState } from "react";
import { headerLogo } from "../assets/images/index";
import { navLinks } from "../constantce/index";
import { hamburger } from "../assets/icons";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Nike-Logo" width={130} height={29} />
        </a>
        <ul
          className="flex-1 flex justify-center
         items-center gap-16 max-lg:hidden"
        >
          {navLinks.map((item) => {
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-gray-500"
                >
                  {" "}
                  {item.label}
                </a>
              </li>
            );
          })}

          {/* links */}
        </ul>
        <div className="relative">
          <button onClick={toggleMenu} className="hidden max-lg:block">
            <img src={hamburger} alt="menu" width={25} height={25} />
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 top-10 bg-white shadow-lg rounded-lg py-4 px-6 min-w-[200px] max-lg:block hidden">
              <ul className="flex flex-col gap-4">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-montserrat leading-normal text-lg text-slate-gray hover:text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
      
    </header>
  );
};

export default NavBar;
