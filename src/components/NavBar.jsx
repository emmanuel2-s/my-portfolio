import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function NavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const hideMobileNav = () => {
    setNav((prev) => !prev);
  };

  return (
    <>
      <nav>
        {/* desktop menu */}
        <div className="text-white flex justify-between h-20 py-2 max-w-[1640px] mx-auto items-center px-4 z-[100] fixed w-full bg-black/70 top-0">
          <a
            href="#"
            className="w-full decoration-transparent z-10 font-bold text-4xl md:text-4xl text-[#00df9a] uppercase"
          >
            folio.
          </a>
          <ul className="ul hidden md:flex items-center md:mr-4">
            <li className="px-7 font-medium  text-base hover:text-[#00df9a] transition-all">
              <a href="#about">About</a>
            </li>
            <li className="px-7 font-medium text-base hover:text-[#00df9a] transition-all">
              <a href="#skill">Skills</a>
            </li>
            <li className="px-7 font-medium text-base hover:text-[#00df9a] transition-all">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="px-7 font-medium text-base hover:text-[#00df9a] transition-all">
              <a href="#contact">Contact</a>
            </li>
            <a
              href="https://drive.google.com/file/d/1KOvJGNGBInBCJ3FsL4IEVtyC7RQrfYnB/view?usp=sharing"
              target="_blank"
              className="px-10 cursor-pointer font-medium text-base hover:text-[#00df9a] transition-all  border-[#00df9a] p-3 border-4 rounded-lg hover:shadow-[0_0_10px_#00df9a]"
            >
              Resume
            </a>
          </ul>
          <div className="block md:hidden" onClick={handleNav}>
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={
            nav
              ? "fixed md:hidden top-0 left-0 z-50 bg-[#000300] border-r border-r-gray-900 w-[300px] h-full ease-in-out delay-300 duration-500"
              : "fixed left-[-100%] transition-all"
          }
          id="mobile-div"
          onClick={hideMobileNav}
        >
          <a
            href="#"
            className="w-full p-7 font-extrabold text-4xl decoration-transparent text-[#00df9a] uppercase"
          >
            folio.
          </a>
          <ul className="text-white p-4 uppercase">
            <li className="p-4 border-b  hover:text-[#00df9a] border-b-gray-600 font-medium">
              <a href="#about">About</a>
            </li>
            <li className="p-4 border-b  hover:text-[#00df9a] border-b-gray-600 font-medium">
              <a href="#skill">Skills</a>
            </li>
            <li className="p-4 border-b  hover:text-[#00df9a] border-b-gray-600 font-medium">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="p-4 font-medium hover:text-[#00df9a] ">
              <a href="#contact">Contact</a>
            </li>
            <li className="p-4 font-medium"></li>

            <li className="px-10 cursor-pointer font-medium text-base hover:text-[#00df9a] transition-all  border-[#00df9a] p-3 border-4 rounded-lg hover:shadow-[0_0_10px_#00df9a]">
              <a
                href="https://drive.google.com/file/d/1KOvJGNGBInBCJ3FsL4IEVtyC7RQrfYnB/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
