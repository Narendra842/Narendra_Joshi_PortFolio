import { useState } from "react";
import { HiMiniBarsArrowDown, HiMiniBarsArrowUp } from "react-icons/hi2";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    if (open) {
      setOpen(false);
      enablePageScroll();
    } else {
      setOpen(true);
      disablePageScroll();
    }
  }

  return (
    <header>
      <nav>
        {/* Mobile Navbar */}
        <div className="md:hidden bg-slate-800 list-none font-bold ">
          <div
            className="relative flex flex-col items-end justify-center
          z-50 h-20 shadow-sm w-full text-white"
          >
            <span onClick={toggleMenu} className="text-3xl mr-5 cursor-pointer">
              {!open ? (
                <HiMiniBarsArrowUp className="" />
              ) : (
                <HiMiniBarsArrowDown />
              )}
            </span>
          </div>

          <div
            className={`${open ? "block" : "hidden"} 
          fixed top-0 left-0 h-screen w-full bg-slate-800 z-40`}
          >
            <ul className="w-full flex flex-col justify-center h-full items-center gap-8  text-3xl">
              <li>
                <NavLink
                  onClick={toggleMenu}
                  to="/"
                  className={({ isActive }) => `
                ${
                  isActive
                    ? "text-orange-500 underline underline-offset-8"
                    : "text-white"
                } text-2xl  transition duration-300 ease-in-out
              `}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  onClick={toggleMenu}
                  to="/skill"
                  className={({ isActive }) => `
                ${
                  isActive
                    ? "text-orange-500 underline underline-offset-8"
                    : "text-white"
                } text-2xl  transition duration-300 ease-in-out
              `}
                >
                  Skills
                </NavLink>
              </li>

              <li>
                <NavLink
                  onClick={toggleMenu}
                  to="/experience"
                  className={({ isActive }) => `
                  ${
                    isActive
                      ? "text-orange-500 underline underline-offset-8"
                      : "text-white"
                  } text-2xl  transition duration-300 ease-in-out
                `}
                >
                  Experience
                </NavLink>
              </li>

              <li>
                <NavLink
                  onClick={toggleMenu}
                  to="/project"
                  className={({ isActive }) => `
                  ${
                    isActive
                      ? "text-orange-500 underline underline-offset-8"
                      : "text-white"
                  } text-2xl  transition duration-300 ease-in-out
                `}
                >
                  Projects
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  onClick={toggleMenu}
                  className={({ isActive }) => `
                  ${
                    isActive
                      ? "text-orange-500 underline underline-offset-8"
                      : "text-white"
                  } text-2xl  transition duration-300 ease-in-out
                `}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/*------------------------------------------------------------------------------------------------------ */}
        {/* Desktop Menu */}
        <div
          className="md:flex w-full  items-center
         h-20 bg-gray-[#242424] shadow-gray-700 shadow-sm hidden "
        >
          <ul
            className=" flex w-full xl:justify-end lg:justify-end font-bold 
            xl:mr-16 xl:gap-12  lg:mr-12 lg:gap-8  md:justify-evenly"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `
                  ${
                    isActive
                      ? "text-orange-500 underline underline-offset-8"
                      : "text-white"
                  } text-2xl  transition duration-300 ease-in-out
                `}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skill"
                className={({ isActive }) => `
                  ${
                    isActive
                      ? "text-orange-500 underline underline-offset-8"
                      : "text-white"
                  } text-2xl  transition duration-300 ease-in-out
                `}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                className={({ isActive }) => `
                  ${
                    isActive
                      ? "text-orange-500 underline underline-offset-8"
                      : "text-white"
                  } text-2xl  transition duration-300 ease-in-out
                `}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/project"
                className={({ isActive }) => `
                  ${
                    isActive
                      ? "text-orange-500 underline underline-offset-8"
                      : "text-white"
                  } text-2xl  transition duration-300 ease-in-out
                `}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => `
                  ${
                    isActive
                      ? "text-orange-500 underline underline-offset-8"
                      : "text-white"
                  } text-2xl  transition duration-300 ease-in-out
                `}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
