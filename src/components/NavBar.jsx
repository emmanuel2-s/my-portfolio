import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function NavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        <div className="text-white flex justify-between h-28 max-w-[1640px] mx-auto items-center px-4">
          <h1 className="w-full z-10 font-bold text-4xl md:text-4xl text-[#00df9a] uppercase">
            folio.
          </h1>
          <ul className="ul hidden md:flex items-center">
            <li className="px-7 font-medium  text-base hover:text-[#00df9a] transition-all">
              <a href="">About</a>
            </li>
            <li className="px-7 font-medium text-base hover:text-[#00df9a] transition-all">
              <a href="">Skills</a>
            </li>
            <li className="px-7 font-medium text-base hover:text-[#00df9a] transition-all">
              <a href="">Portfolio</a>
            </li>
            <li className="px-7 font-medium text-base hover:text-[#00df9a] transition-all">
              <a href="">Contact</a>
            </li>
            <li className="px-10 cursor-pointer font-medium text-base hover:text-[#00df9a] transition-all  border-[#00df9a] p-3 border-4 rounded-lg hover:shadow-[0_0_10px_#00df9a]">
              {" "}
              Resume
            </li>
          </ul>
          <div className="block md:hidden" onClick={handleNav}>
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
        </div>
        <div
          className={
            nav
              ? "fixed md:hidden top-0 left-0 z-50 bg-[#000300] border-r border-r-gray-900 w-[300px] h-full ease-in-out delay-300 duration-500"
              : "fixed left-[-100%] transition-all"
          }
        >
          <h1 className="w-full p-7 font-extrabold text-4xl text-[#00df9a] uppercase">
            folio.
          </h1>
          <ul className="text-white p-4 uppercase">
            <li className="p-4 border-b  hover:text-[#00df9a] border-b-gray-600 font-medium">
              <a href="">About</a>
            </li>
            <li className="p-4 border-b  hover:text-[#00df9a] border-b-gray-600 font-medium">
              <a href="">Skills</a>
            </li>
            <li className="p-4 border-b  hover:text-[#00df9a] border-b-gray-600 font-medium">
              <a href="">Portfolio</a>
            </li>
            <li className="p-4 font-medium hover:text-[#00df9a] ">
              <a href="">Contact</a>
            </li>
            <li className="p-4 font-medium"></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
